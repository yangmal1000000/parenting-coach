-- Fix family_invites RLS — can't query auth.users directly
-- Create a helper function with security definer
create or replace function public.get_user_email()
returns text
language sql
security definer
as $$
  select email from auth.users where id = auth.uid();
$$;

-- Drop old policy
drop policy if exists "Users can view invites they sent or received" on public.family_invites;

-- New policy using the helper function
create policy "Users can view invites they sent or received"
  on public.family_invites for select
  using (
    invited_by = auth.uid()
    or invited_email = public.get_user_email()
  );
