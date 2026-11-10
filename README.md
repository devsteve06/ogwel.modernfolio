# Ogwel Stephen — Portfolio

A modern, animated developer portfolio built as a static single-page app.

## Run & Operate

The quickest way to run the whole project is the root run script, which installs
dependencies (if needed) and starts the dev server at http://localhost:5173:

```powershell
./run.ps1            # Windows (PowerShell)
```

```bash
./run.sh             # macOS / Linux
```

Pass a task to the script to run something else, e.g. `./run.ps1 build` or `./run.ps1 preview`.

You can also use the root pnpm scripts directly:

- `pnpm dev` — run the portfolio dev server (http://localhost:5173)
- `pnpm preview` — preview the production build
- `pnpm run build` — typecheck + build the static site (output: `artifacts/portfolio/dist/public`)
- `pnpm run typecheck` — typecheck across all packages

`PORT` and `BASE_PATH` are optional environment variables (defaulting to `5173` and `/`)
that override the dev server port and the app's base path.

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React 19 + Vite 7, Wouter (routing), Tailwind CSS 4
- UI: shadcn/ui (Radix primitives), Framer Motion, lucide-react / react-icons
- Validation: Zod

## Where things live

- `artifacts/portfolio/` — the portfolio app
  - `src/pages/Home.tsx` — main page (hero, skills, projects)
  - `src/pages/CV.tsx` — web version of the CV at `/cv`
  - `src/components/Footer.tsx` — shared footer with **View CV** and **Download CV** actions
  - `src/lib/socials.ts` — social handles (`@devsteve06` on Instagram, X, TikTok) used by the contact section and footer
  - `public/Ogwel-Stephen-CV.pdf` — downloadable CV document
  - `src/components/Portrait.tsx` — profile photo frame used in the hero
  - `public/profile.jpg` — **your personal photo** (also accepts `.jpeg`, `.png`, `.webp`; the hero shows a placeholder until it exists)
  - `public/projects/studentconnect.jpg` / `public/projects/kaida.jpg` — **project screenshots** (same supported extensions; a 16:9 screenshot works best)
  - `public/certifications/ai-ethics.png` / `public/certifications/icta-ai-training.jpg` — **certificate previews** (same supported extensions; each card links to the image in a new tab, and a placeholder shows until the file exists)
  - `src/components/ui/` — shadcn/ui components
  - `src/index.css` — Tailwind theme and global styles
  - `vite.config.ts` — build/dev config
- `pnpm-workspace.yaml` — workspace packages and dependency catalog
- `run.ps1` / `run.sh` — one-command project runner

## Requirements

- Node.js 24
- pnpm (the repo enforces pnpm via a `preinstall` guard)
