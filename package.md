# Documentation for package.json

The goals of this document are:

- Giva an overview of the dependencies we are using and for what
- Notes on versions and why/when to update/not update them

## Dependencies

- 'react react-dom' - [React JS (Browser)](https://reactjs.org) is used to build the user interface
- '@mui/material @emotion/react @emotion/styled' - [Material UI](https://mui.com/) is a library of React UI components that implements Google's Material Design, styling is done wIth [Emotion](https://emotion.sh/docs/introduction)

- 'react-router-dom' - [React Router](https://reactrouter.com/web/guides/quick-start) makes routing between different pages possible
- 'i18next, i18next-browser-languagedetector, react-i18next' - internationalization of the UI with [i18next](https://github.com/i18next/react-i18next)

## DevDependencies

- 'express json-server' - runs a local server to mock APIs with [JSON Server](https://github.com/typicode/json-server#getting-started)
- 'clean-webpack-plugin' - cleans the build folder
- 'webpack webpack-cli @types/webpack webpack-dev-server @types/webpack-dev-server babel-loader html-webpack-plugin ts-node fork-ts-checker-webpack-plugin @types/fork-ts-checker-webpack-plugin eslint-webpack-plugin clean-webpack-plugin' - [webpack](https://webpack.js.org) creates performant bundles containing our app’s JavaScript code
- 'eslint eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/parser @typescript-eslint/eslint-plugin' - [ESLint](https://eslint.org/) lints our code
- '@babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript @babel/plugin-transform-runtime @babel/runtime' - [Babel](https://babeljs.io/) converts React and TypeScript code to JavaScript
- 'typescript @types/react @types/react-dom' - [Typescript](https://www.typescriptlang.org) extends Javascript by adding types
- 'css-loader style-loader' - to bundle css files into the build
  we should be able to remove this when switching to Emotion for all styling
- 'fork-ts-checker-webpack-plugin' - webpack plugin that runs TypeScript type checker on a separate process
- 'gh-pages' - allows us to easily deploy to [GitHub Pages](https://pages.github.com/)
- 'html-webpack-plugin' - plugin that simplifies creation of HTML files to serve your bundles
- 'jest' - [Jest](https://jestjs.io/) for unit testing for all testing needs
- '@testing-library/user-event @testing-library/user-event' - [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) makes user centric testing of React components easier
- 'clean-webpack-plugin' - cleans the build folder
