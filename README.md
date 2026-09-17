# Vikram Ejjagiri — Portfolio

A clean, interactive React + Vite portfolio for an Applied AI Engineer.

## Run locally

1. Install Node.js (LTS).
2. Open this folder in VS Code.
3. Open the terminal.
4. Run:

```bash
npm install
npm run dev
```

5. Open the local URL shown by Vite.

## Add your resume

Copy your final CV PDF into:

`public/resume.pdf`

The current project package includes a copy of the uploaded CV as `resume.pdf`.

## Edit project content

All project information is in:

`src/data/projects.js`

The site is intentionally structured so real screenshots, dashboards, GitHub links and project files can be added later without redesigning the site.

## Deploy

Build first:

```bash
npm run build
```

The production site is created in `dist/`.

You can deploy the `dist` folder using Vercel, Netlify, GitHub Pages, or another static host.

## Important

The visual graphics currently used for projects are abstract technical placeholders. Replace them with real project screenshots/diagrams when the original files become available. Do not add performance metrics unless you can verify them from the project.
