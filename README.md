# Portfolio

Personal portfolio site built with React and Vite.

## Overview

Single-page portfolio with hero, parallax sections, about, project showcase, and contact. Motion comes from Framer Motion; styles use SCSS.

## Stack

- React 18
- Vite 4
- Framer Motion
- Sass

## Structure

```
src/
  components/
    Hero/ Navbar/ AboutMe/ Parallax/ Portfolio/ Contact/
  App.jsx
  app.scss
  Tech.js          # tech stack icons used in the UI
public/            # images and brand assets
index.html
vite.config.js
```

## Getting started

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Notes

Static SPA — no backend. Update content in the component files and assets under `public/` as needed.
