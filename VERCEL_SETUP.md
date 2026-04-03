# Vercel Setup - RockySEN

## Estructura a desplegar
- Proyecto 1: frontend estatico en la raiz del repo.
- Proyecto 2: backend WhatsApp en `whatsapp-backend/`.

## Antes de empezar
- El repositorio ya esta publicado en GitHub: `CapcolRockySEN/RockySEN`.
- El frontend ya apunta al nuevo Supabase en `src/assets/js/config.js`.
- El backend ya apunta al nuevo Supabase en `whatsapp-backend/.env`.
- Aun faltan variables reales de WhatsApp y `CRON_SECRET`.

## Proyecto 1 - Frontend
Crear un proyecto nuevo en Vercel importando el repo `RockySEN`.

Configurar asi:
- Root Directory: `.`
- Framework Preset: `Other`
- Build Command: vacio
- Output Directory: vacio

Resultado esperado:
- La URL principal carga `index.html`
- `index.html` redirige a `app.html#/login`

## Proyecto 2 - Backend WhatsApp
Crear otro proyecto nuevo en Vercel importando el mismo repo `RockySEN`.

Configurar asi:
- Root Directory: `whatsapp-backend`
- Framework Preset: `Other`
- Build Command: vacio
- Output Directory: vacio

Variables de entorno requeridas en el proyecto backend:
- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `CRON_SECRET`
- `WHATSAPP_VERIFY_TOKEN`
- `WHATSAPP_ACCESS_TOKEN`
- `WHATSAPP_WABA_ID`
- `WHATSAPP_PHONE_NUMBER_ID`
- `WHATSAPP_GRAPH_VERSION`
- `WHATSAPP_APP_SECRET`

Tomar como base `whatsapp-backend/.env.example`.

## Cron
El backend ya incluye `whatsapp-backend/vercel.json` con este cron:
- Ruta: `/api/cron/close-daily-operation`
- Horario: `10 5 * * *`

Ese horario en Vercel corre en UTC.

Si defines `CRON_SECRET` en Vercel, Vercel enviara automaticamente el header `Authorization: Bearer <CRON_SECRET>` al cron del proyecto.

## Validaciones despues del deploy
Frontend:
- Abrir la URL del proyecto frontend.
- Confirmar que redirige a `#/login`.
- Iniciar sesion con el usuario administrador.

Backend:
- Abrir `https://TU-BACKEND.vercel.app/health`
- Debe responder con `{\"ok\":true}`
- Probar verificacion del webhook:
  - `https://TU-BACKEND.vercel.app/webhooks/whatsapp?hub.mode=subscribe&hub.verify_token=TU_WHATSAPP_VERIFY_TOKEN&hub.challenge=1234`
  - Debe responder `1234`

## Conexion por CLI
Si luego quieres enlazar localmente los proyectos a Vercel por CLI:
- Instalar o usar Vercel CLI
- Enlazar el frontend desde la raiz
- Enlazar el backend desde `whatsapp-backend`

## Nota operativa
- El frontend no depende de variables de entorno de Vercel hoy, porque `SUPABASE_URL` y `SUPABASE_ANON_KEY` estan escritas en `src/assets/js/config.js`.
- El backend si depende completamente de las variables configuradas en Vercel.
