# Recipe Browser (React + TypeScript)

This project demonstrates core and advanced React concepts from WA3669, WA3670, and WA3671 in a small multi-route recipe browser.

## Included requirements

- React + TypeScript app scaffolded with Vite
- 3 routes with React Router (`/`, `/recipes/:id`, `/add`)
- Typed component architecture with one component per file
- Composition pattern using a reusable `Card` and `Layout` (`children` prop)
- Hooks usage: `useState`, `useEffect` with cleanup, Context API, and custom hooks
- Data fetching from `public/recipes.json` with loading/success/error states
- Controlled form with validation and visible error messages
- 3 tests using Vitest + React Testing Library
- Architecture rationale in `RATIONALE.md`

## Run the project

```bash
npm install
npm run dev
```

## Run tests

```bash
npm run test
```
