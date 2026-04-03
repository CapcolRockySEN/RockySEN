insert into public.profiles (
  id,
  email,
  display_name,
  documento,
  role,
  estado,
  supervisor_eligible
) values (
  'eecb593e-25ce-4426-a8bb-c4128e73c894',
  'rocky.med@capcol.com.co',
  'Administrador Principal',
  '1234567890',
  'superadmin',
  'activo',
  true
)
on conflict (id) do update
set
  email = excluded.email,
  display_name = excluded.display_name,
  documento = excluded.documento,
  role = excluded.role,
  estado = excluded.estado,
  supervisor_eligible = excluded.supervisor_eligible,
  updated_at = now();
