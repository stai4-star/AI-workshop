# CLAUDE.md

## Stack
Next.js (App Router), TypeScript, plain CSS, Supabase, deployed on Vercel.

## Commands
- `npm install` — install dependencies
- `npm run dev` — run locally
- `npm run build` — production build
- `npm run lint` — lint the codebase

## Never
- Add a dependency without asking first.
- Edit `.env` or any environment variable.
- Change auth configuration without saying what is changing and why.
- Create new top-level folders.

## Conventions
- TypeScript throughout; no `any` without a reason.
- Plain CSS only — no Tailwind or component library unless asked first.
- Palette: background #FFD0D7, accent #E75480, with black, white, and red as supporting accents. Keep it consistent across every page.
- Keep components small and colocated with the routes that use them under the existing App Router structure.

## Current focus
See roadmap.md, work only on the slice marked ACTIVE.
