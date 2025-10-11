# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.  

## How to set up React Testing Library in Vitest when using Vite.
### Installing vitest
- install Vitest - `npm install vitest --save-dev`
- Add to package.json - `"test": "vitest",`
- Add a test file - checkout ./src/app.test.js file for details
- run tests - `npm run test`

### Installing jsdom
Since React Testing Library tests React components, we need to enable HTML in Vitest with a library like jsdom.
- install jsdom - `npm install jsdom --save-dev`
- Add to vite.config.js - `test: {environment: 'jsdom'}`

### Installing react testing library
- install RTL - `npm install @testing-library/react @testing-library/jest-dom --save-dev`
- Add a test file - checkout ./tests/setup.js
- Add to vite.config.js - `test: {globals: true, setupFiles: './tests/setup.js',}`

- install user-event - `npm install @testing-library/user-event -- save-dev`