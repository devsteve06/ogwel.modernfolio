# Ogwel Stephen — Portfolio

A modern, animated developer portfolio built as a static single-page app.

## Run & Operate

The site lives in the `artifacts/portfolio` workspace package. Common commands:

- `pnpm --filter @workspace/portfolio run dev` — run the portfolio dev server
- `pnpm --filter @workspace/portfolio run build` — build the static site (output: `artifacts/portfolio/dist/public`)
- `pnpm --filter @workspace/portfolio run serve` — preview the production build
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages

> The Vite config requires `PORT` and `BASE_PATH` environment variables — it will throw if they are not set. For local development:
>
> ```bash
> PORT=5173 BASE_PATH=/ pnpm --filter @workspace/portfolio run dev
> ```
>
> On Windows, set these from PowerShell (Git Bash rewrites `BASE_PATH=/` into a filesystem path):
>
> ```powershell
> $env:PORT='5173'; $env:BASE_PATH='/'; pnpm --filter @workspace/portfolio run dev
> ```

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React 19 + Vite 7, Wouter (routing), Tailwind CSS 4
- UI: shadcn/ui (Radix primitives), Framer Motion, lucide-react / react-icons
- Validation: Zod

## Where things live

- `artifacts/portfolio/` — the portfolio app
  - `src/pages/Home.tsx` — main page (hero, skills, projects)
  - `src/components/ui/` — shadcn/ui components
  - `src/index.css` — Tailwind theme and global styles
  - `vite.config.ts` — build/dev config (requires `PORT` and `BASE_PATH`)
- `pnpm-workspace.yaml` — workspace packages, dependency catalog, and platform overrides

## Requirements

- Node.js 24
- pnpm (the repo enforces pnpm via a `preinstall` guard)
