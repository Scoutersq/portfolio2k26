# Developer Portfolio (Vite + React + Tailwind)

Clean, minimal developer portfolio focused on projects, blogs (MDX), and reusable code snippets. Dark/light themes, subtle motion, and a neutral palette with a cyan accent.

## Stack
- React + TypeScript (Vite)
- Tailwind CSS
- MDX for blog posts
- Framer Motion for animation
- Prism React Renderer for code highlighting

## Getting started
1) Install deps
```
npm install
```
2) Run dev server
```
npm run dev
```
3) Build for prod
```
npm run build
```
4) Preview production build
```
npm run preview
```

## Content model
- Profile + CTAs: src/data/site.ts
- Navigation + socials: src/data/navigation.ts
- Projects: src/data/projects.ts
- Blogs (MDX): src/data/blogs.ts with MDX files in src/content/blogs
- Snippets: src/data/snippets.ts

## Pages
- Home (hero, highlights)
- Projects grid
- Blogs list + MDX detail route
- Snippets with language filters + copy
- About

## Theming
- Theme toggle persisted in localStorage
- Colors come from CSS variables in src/index.css and tailwind.config.ts

## Deployment (Vercel)
- Build command: `npm run build`
- Output: `dist`
- Install command: `npm install`

## Notes
- Update placeholder profile/social links in src/data.
- Keep MDX content concise; frontmatter is not required because metadata lives in src/data/blogs.ts.
