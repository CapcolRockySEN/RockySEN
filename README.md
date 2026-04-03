# RockySEN

Plataforma de gestion operativa y administrativa para el seguimiento de servicios, personal y novedades.

## Estado actual
- Copia saneada del proyecto base.
- Pendiente de reconexion a nuevas cuentas de GitHub, Supabase, WhatsApp Cloud API y Vercel.
- La configuracion tracked del frontend y del backend fue saneada para no usar la cuenta anterior.
- Las referencias de marca visibles ya fueron renombradas a `RockySEN`, conservando los nombres de `Capcol`.

## Flujo de acceso
- Entrada principal: `index.html`
- Redireccion al ingreso: `app.html#/login`

## Modulos principales
- Login
- Centro de permisos
- Gestion administrativa
- Operacion
- Consultas y reportes

## Supabase
- Configuracion del frontend en `src/assets/js/config.js`
- Cliente principal de datos en `src/assets/js/supabase.js`
- Scripts SQL de migracion en `supabase/`
- Completar `SUPABASE_URL` y `SUPABASE_ANON_KEY` antes de volver a ejecutar la app.

## Backend WhatsApp
- Backend actual en `whatsapp-backend/`
- Guia de migracion y despliegue en `WHATSAPP_BACKEND_MIGRATION.md`
- Configurar nuevos secretos en `whatsapp-backend/.env` y en Vercel.
- Plantilla local disponible en `whatsapp-backend/.env.example`

## Rutas de la app
- `#/login`
- `#/`
- `#/about`
- `#/notes`
- `#/permissions`
- `#/users`
- `#/zones`
- `#/dependencies`
- `#/sedes`
- `#/employees`
- `#/supervisors`
- `#/registros-vivo`
- `#/imports-replacements`
- `#/import-history`
- `#/payroll`
- `#/absenteeism`
- `#/reports`
- `#/upload`

## Ejecucion local
1. Abrir `app.html` con Live Server, o `index.html` si quieres usar la redireccion automatica.
2. Entrar a la app desde `app.html#/login`.
3. Iniciar sesion y validar modulos segun rol/permisos.

## Documentacion operativa
- Supabase: `SUPABASE_SETUP.md`
- WhatsApp backend: `WHATSAPP_BACKEND_MIGRATION.md`
- Reconexion completa: `RECONNECTION_CHECKLIST.md`
