# Madhumithra M — Portfolio

Dark, glassmorphic, InfoSec-flavored portfolio built with React + TypeScript + Vite + Tailwind CSS v4 + Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Before you deploy — 3 things to check

1. **Profile photo**: replace `public/assets/profile-placeholder.svg` with your real photo, save it as
   `public/assets/profile.jpg`, then update `photoUrl` in `src/data/content.ts` to `/assets/profile.jpg`.
   Also update the `og:image` path in `index.html`.
2. **LinkedIn & LeetCode URLs**: in `src/data/content.ts` under `socials`, the LinkedIn and LeetCode links are
   my best guess from your resume hyperlinks — I couldn't extract the exact underlying URLs from the PDF.
   Please open your resume, right-click each link, "copy link address", and paste the real URLs in.
3. **Live demo links**: `AI PrepZone`'s live link in `src/data/content.ts` is set to a placeholder Render URL
   pattern (`ai-prepzone.onrender.com`) — swap in your actual deployed URL if it differs.

## Editing content

Everything text-based (name, roles, projects, patent, skills, achievements, contact info) lives in one file:

```
src/data/content.ts
```

Change it there and every section updates automatically — no need to touch component files.

## Project images

Your project screenshots are already placed in `public/assets/`:
- `project-ai-prepzone.jpg`
- `project-collab-sheets.jpg`
- `project-vit-scheduler.jpg`

Your resume and patent PDFs are bundled too, and are linked directly from the site:
- `public/assets/Madhumithra_M_Resume.pdf` (Resume download button)
- `public/assets/patent-IN202641068105-A1.pdf` (Patent → view document)
- `public/assets/patentability-search-report.pdf` (Patent → search report)

## Deploying to GitHub Pages / Vercel / Netlify

This is a standard Vite app — push it to `github.com/Madhu-Mithra-M/portfolio` and connect it to Vercel or
Netlify (zero config needed), or run `npm run build` and deploy the `dist/` folder.

## Stack

- React 18 + TypeScript
- Vite 5
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- Framer Motion
- Lucide React icons
