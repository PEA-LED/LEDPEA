-- ใช้ไฟล์นี้กับฐานข้อมูล PEA LED ที่สร้างไว้แล้ว
-- ไม่ลบข้อมูล projects เดิม

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  username text unique not null,
  role text not null default 'user' check (role in ('admin','user')),
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;
alter table public.projects enable row level security;

drop policy if exists "Users can read own profile" on public.profiles;
create policy "Users can read own profile"
on public.profiles for select to authenticated
using (id = auth.uid());

drop policy if exists "Public can read projects" on public.projects;
create policy "Public can read projects"
on public.projects for select to anon, authenticated
using (true);

drop policy if exists "Admins can insert projects" on public.projects;
create policy "Admins can insert projects"
on public.projects for insert to authenticated
with check (
  exists (select 1 from public.profiles p where p.id = auth.uid() and p.role = 'admin')
);

drop policy if exists "Admins can update projects" on public.projects;
create policy "Admins can update projects"
on public.projects for update to authenticated
using (
  exists (select 1 from public.profiles p where p.id = auth.uid() and p.role = 'admin')
)
with check (
  exists (select 1 from public.profiles p where p.id = auth.uid() and p.role = 'admin')
);

drop policy if exists "Admins can delete projects" on public.projects;
create policy "Admins can delete projects"
on public.projects for delete to authenticated
using (
  exists (select 1 from public.profiles p where p.id = auth.uid() and p.role = 'admin')
);

-- เมื่อสร้างผู้ใช้ใน Authentication > Users ระบบจะสร้าง profile ให้โดยอัตโนมัติ
create or replace function public.handle_admin_profile()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  if lower(new.email) = lower('ajchanoksuksawad@gmail.com') then
    insert into public.profiles (id, username, role)
    values (new.id, 'Dear', 'admin')
    on conflict (id) do update set username='Dear', role='admin';
  elsif lower(new.email) = lower('166333241054-st@rmutsb.ac.th') then
    insert into public.profiles (id, username, role)
    values (new.id, 'แนน', 'admin')
    on conflict (id) do update set username='แนน', role='admin';
  else
    insert into public.profiles (id, username, role)
    values (new.id, coalesce(split_part(new.email,'@',1), 'user'), 'user')
    on conflict (id) do nothing;
  end if;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after insert on auth.users
for each row execute function public.handle_admin_profile();

-- กรณีสร้างผู้ใช้ไว้ก่อนแล้ว ให้สร้าง/อัปเดต profiles ตามอีเมล
insert into public.profiles (id, username, role)
select id, 'Dear', 'admin' from auth.users
where lower(email)=lower('ajchanoksuksawad@gmail.com')
on conflict (id) do update set username='Dear', role='admin';

insert into public.profiles (id, username, role)
select id, 'แนน', 'admin' from auth.users
where lower(email)=lower('166333241054-st@rmutsb.ac.th')
on conflict (id) do update set username='แนน', role='admin';
