# React + TypeScript + Vite

A minimal template to set up React with Vite, TypeScript, HMR, and ESLint.

## Plugins

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react) (uses Babel for Fast Refresh)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) (uses SWC for Fast Refresh)

## ESLint Configuration

For production apps, enable type-aware linting:

1. Update `parserOptions`:

   ```js
   parserOptions: {
     project: ['./tsconfig.node.json', './tsconfig.app.json'],
     tsconfigRootDir: import.meta.dirname,
   }
   ```

2. Use `tseslint.configs.recommendedTypeChecked` or `strictTypeChecked`.

3. Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and configure:

   ```js
   import react from 'eslint-plugin-react';

   export default tseslint.config({
     settings: { react: { version: '19' } },
     plugins: { react },
     rules: {
       ...react.configs.recommended.rules,
       ...react.configs['jsx-runtime'].rules,
     },
   });
   ```
