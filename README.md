# React + TypeScript + Vite

Ce modèle fournit une configuration minimale pour faire fonctionner React avec Vite, le HMR et quelques règles Oxlint.

Deux plugins officiels sont actuellement disponibles :

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) utilise [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) utilise [SWC](https://swc.rs/)

## React Compiler

Le React Compiler n’est pas activé dans ce modèle en raison de son impact sur les performances en développement et lors de la compilation. Pour l’ajouter, consultez [cette documentation](https://react.dev/learn/react-compiler/installation).

## Étendre la configuration Oxlint

Si vous développez une application de production, nous recommandons d’activer les règles de lint sensibles aux types en installant `oxlint-tsgolint` et en modifiant `.oxlintrc.json` :

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

Consultez la [documentation des règles Oxlint](https://oxc.rs/docs/guide/usage/linter/rules) pour la liste complète des règles et des catégories.
