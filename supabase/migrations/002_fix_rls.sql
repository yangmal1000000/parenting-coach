-- Fix RLS recursion — drop and recreate with simpler policies
drop policy if exists "Members can view their family members" on public.family_members;
drop policy if exists "Family members can view shared profiles" on public.profiles;
drop policy if exists "Family members can view shared sessions" on public.sessions;

-- family_members: user can see their own rows or rows they invited
create policy "Members can view their family members"
  on public.family_members for select
  using (user_id = auth.uid() or invited_by = auth.uid());

-- profiles: user can only see their own profile
create policy "Family members can view shared profiles"
  on public.profiles for select
  using (id = auth.uid());

-- sessions: user can see their own + shared sessions from family
create policy "Family members can view shared sessions"
  on public.sessions for select
  using (
    user_id = auth.uid()
    or (is_shared = true and family_id in (
      select family_id from public.family_members
      where user_id = auth.uid() and status = 'accepted'
    ))
  );
