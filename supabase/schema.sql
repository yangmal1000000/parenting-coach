-- Calm Parent — Supabase Schema
-- Run this in the Supabase SQL editor after creating a project

-- === Profiles (extends Supabase auth.users) ===
create table public.profiles (
  id uuid references auth.users on delete cascade primary key,
  display_name text,
  child_name text,
  child_age text,
  child_notes text,
  preferred_language text default 'en',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- === Sessions (saved advice) ===
create table public.sessions (
  id text primary key,  -- client-generated session ID (e.g. "s1234567890")
  user_id uuid references public.profiles on delete cascade,
  query text not null,
  advice text not null,
  sources text[] default '{}',
  topic_category text,
  rating text check (rating in ('up', 'down')),
  bookmarked boolean default false,
  feedback_text text,
  language text default 'en',
  child_name text,
  child_age text,
  created_at bigint,  -- epoch ms (matches client format)
  synced_at timestamptz default now()
);

-- === Indexes ===
create index idx_sessions_user_id on public.sessions(user_id);
create index idx_sessions_bookmarked on public.sessions(user_id, bookmarked);
create index idx_sessions_created on public.sessions(user_id, created_at desc);

-- === Row Level Security ===
alter table public.profiles enable row level security;
alter table public.sessions enable row level security;

-- Users can only see/edit their own profile
create policy "Users can view own profile"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Users can update own profile"
  on public.profiles for update
  using (auth.uid() = id);

create policy "Users can insert own profile"
  on public.profiles for insert
  with check (auth.uid() = id);

-- Users can only see/edit their own sessions
create policy "Users can view own sessions"
  on public.sessions for select
  using (auth.uid() = user_id);

create policy "Users can insert own sessions"
  on public.sessions for insert
  with check (auth.uid() = user_id);

create policy "Users can update own sessions"
  on public.sessions for update
  using (auth.uid() = user_id);

create policy "Users can delete own sessions"
  on public.sessions for delete
  using (auth.uid() = user_id);

-- === Updated_at trigger ===
create or replace function handle_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger profiles_updated_at
  before update on public.profiles
  for each row execute function handle_updated_at();

-- === Auto-create profile on signup ===
create or replace function handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id)
  values (new.id);
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function handle_new_user();
