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

## Resume

`public/resume-en.pdf` and `public/resume-de.pdf` (public versions without address and phone). The Resume button asks the visitor which language they want.

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

## Project evidence

- The Industrial AI projects show real screenshots from the projects (`public/projects/`): Grafana dashboard, EDA figures, anomaly heatmaps and the OEE dashboard. The production digitalization platform shows an architecture diagram; replace it with a dashboard screenshot when available.
- `src/data/evidence.js` holds each project's validation status, architecture flow and limitations (EN/DE). Labels say exactly what was tested: simulated data, public dataset, local run, and what is not yet validated (e.g. real hardware). Update a label only when it becomes true.
- `src/data/evidence.js` also holds the Master's curriculum section, taken from the TH Deggendorf module handbook.
- Only report metrics that come from the project's own evaluation output.
