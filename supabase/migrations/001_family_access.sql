-- Co-Parent / Shared Family Access
-- Run this in the Supabase SQL editor

-- ==========================================
-- 1. families table
-- ==========================================
create table if not exists public.families (
  id uuid primary key default gen_random_uuid(),
  name text not null default 'My Family',
  created_by uuid not null references auth.users(id) on delete cascade,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- ==========================================
-- 2. family_members table
-- ==========================================
create table if not exists public.family_members (
  id uuid primary key default gen_random_uuid(),
  family_id uuid not null references public.families(id) on delete cascade,
  user_id uuid references auth.users(id) on delete cascade,
  role text not null default 'parent' check (role in ('parent', 'co-parent', 'caregiver')),
  invited_by uuid not null references auth.users(id),
  invited_email text,
  status text not null default 'pending' check (status in ('pending', 'accepted', 'declined')),
  joined_at timestamptz,
  created_at timestamptz not null default now()
);

create unique index if not exists idx_family_members_family_user
  on public.family_members(family_id, user_id)
  where user_id is not null;

create index if not exists idx_family_members_invited_email
  on public.family_members(invited_email)
  where status = 'pending';

-- ==========================================
-- 3. family_invites table (for invite codes)
-- ==========================================
create table if not exists public.family_invites (
  id uuid primary key default gen_random_uuid(),
  family_id uuid not null references public.families(id) on delete cascade,
  invited_by uuid not null references auth.users(id),
  invited_email text,
  invite_code text not null unique default substr(replace(gen_random_uuid()::text, '-', ''), 1, 8),
  role text not null default 'co-parent' check (role in ('parent', 'co-parent', 'caregiver')),
  status text not null default 'active' check (status in ('active', 'accepted', 'expired', 'revoked')),
  expires_at timestamptz not null default (now() + interval '7 days'),
  created_at timestamptz not null default now()
);

-- ==========================================
-- 4. Add family_id to profiles (optional)
-- ==========================================
alter table public.profiles
  add column if not exists family_id uuid references public.families(id) on delete set null;

-- ==========================================
-- 5. Add family_id to sessions (for shared sessions)
-- ==========================================
alter table public.sessions
  add column if not exists family_id uuid references public.families(id) on delete set null,
  add column if not exists is_shared boolean default false;

-- ==========================================
-- 6. RLS Policies
-- ==========================================

-- Families: users can see families they belong to
alter table public.families enable row level security;

create policy "Family members can view their families"
  on public.families for select
  using (
    exists (
      select 1 from public.family_members fm
      where fm.family_id = families.id
        and fm.user_id = auth.uid()
        and fm.status = 'accepted'
    )
  );

create policy "Users can create families"
  on public.families for insert
  with check (created_by = auth.uid());

create policy "Family creators can update"
  on public.families for update
  using (created_by = auth.uid());

-- Family members: visible to family members
alter table public.family_members enable row level security;

create policy "Members can view their family members"
  on public.family_members for select
  using (
    user_id = auth.uid()
    or exists (
      select 1 from public.family_members fm2
      where fm2.family_id = family_members.family_id
        and fm2.user_id = auth.uid()
        and fm2.status = 'accepted'
    )
  );

create policy "Users can insert their own membership"
  on public.family_members for insert
  with check (
    invited_by = auth.uid()
    or user_id = auth.uid()
  );

create policy "Users can update their own membership"
  on public.family_members for update
  using (user_id = auth.uid() or invited_by = auth.uid());

create policy "Users can delete their own membership"
  on public.family_members for delete
  using (user_id = auth.uid() or invited_by = auth.uid());

-- Family invites: visible to inviter and invitee
alter table public.family_invites enable row level security;

create policy "Users can view invites they sent or received"
  on public.family_invites for select
  using (
    invited_by = auth.uid()
    or invited_email = (select email from auth.users where id = auth.uid())
  );

create policy "Users can create invites for their family"
  on public.family_invites for insert
  with check (
    invited_by = auth.uid()
    and exists (
      select 1 from public.family_members fm
      where fm.family_id = family_invites.family_id
        and fm.user_id = auth.uid()
        and fm.status = 'accepted'
    )
  );

create policy "Users can update invites they created"
  on public.family_invites for update
  using (invited_by = auth.uid());

create policy "Users can delete invites they created"
  on public.family_invites for delete
  using (invited_by = auth.uid());

-- Profiles: users can see profiles of family members
-- (existing policy allows users to see their own profile)
create policy "Family members can view shared profiles"
  on public.profiles for select
  using (
    id = auth.uid()
    or (
      family_id is not null
      and exists (
        select 1 from public.family_members fm
        where fm.family_id = profiles.family_id
          and fm.user_id = auth.uid()
          and fm.status = 'accepted'
      )
    )
  );

-- Sessions: family members can see shared sessions
create policy "Family members can view shared sessions"
  on public.sessions for select
  using (
    user_id = auth.uid()
    or (
      family_id is not null
      and is_shared = true
      and exists (
        select 1 from public.family_members fm
        where fm.family_id = sessions.family_id
          and fm.user_id = auth.uid()
          and fm.status = 'accepted'
      )
    )
  );

-- ==========================================
-- 7. Helper function: get user's family
-- ==========================================
create or replace function public.get_user_family()
returns table (
  family_id uuid,
  family_name text,
  role text,
  member_count bigint
)
language sql
security definer
as $$
  select
    fm.family_id,
    f.name,
    fm.role,
    count(fm2.id)::bigint
  from public.family_members fm
  join public.families f on f.id = fm.family_id
  left join public.family_members fm2 on fm2.family_id = fm.family_id and fm2.status = 'accepted'
  where fm.user_id = auth.uid() and fm.status = 'accepted'
  group by fm.family_id, f.name, fm.role;
$$;

-- ==========================================
-- 8. Auto-create family on first invite
-- ==========================================
create or replace function public.handle_new_user_family()
returns trigger
language plpgsql
security definer
as $$
begin
  -- Create a family for the new user if they don't have one
  insert into public.families (name, created_by)
  values ('My Family', new.id)
  on conflict do nothing;

  insert into public.family_members (family_id, user_id, role, invited_by, status, joined_at)
  select f.id, new.id, 'parent', new.id, 'accepted', now()
  from public.families f
  where f.created_by = new.id
    and not exists (
      select 1 from public.family_members fm where fm.family_id = f.id and fm.user_id = new.id
    )
  on conflict do nothing;

  -- Link profile to family
  update public.profiles set family_id = (
    select f.id from public.families f where f.created_by = new.id limit 1
  ) where id = new.id and family_id is null;

  return new;
end;
$$;

-- Trigger on auth.users
drop trigger if exists on_auth_user_created_family on auth.users;
create trigger on_auth_user_created_family
  after insert on auth.users
  for each row execute function public.handle_new_user_family();
