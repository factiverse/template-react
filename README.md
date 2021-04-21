# React Tempplate

This has all the tools and dependencies which should be used when creating a React app.

## Getting Started

1. Create a new repository with this one as a template.
2. Clone the repository.
3. Install [Node JS](https://nodejs.org/en/about/). The Node Package Manager ```npm``` is used to install all dependencies and runs the development server to display checkit locally in the browser.
4. ```npm install``` within the repository folder. This installs all dependencies.
5. Install [SASS](https://sass-lang.com/). All CSS editing should be done in the .scss files found in the sccs folder and built with SASS into main.ccs. Use the command ``sass --watch scss:css`` to compile scss files into css on changes. The .scss files are organized by:
    - Pages (specific styles for each page)
    - Components (reusable like buttons, menu bar, ...)
    - Base (fonts, colors, ...)
    - Abstracts (functions, variables, mixins, ...)
    - global.scss files to import everything of one category
6. Recommended code editor and useful plugins:
  - [Visual Studio Code](https://code.visualstudio.com/)
  - [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) shows ESLint warning within VS Code.
  - [npm](https://marketplace.visualstudio.com/items?itemName=eg2.vscode-npm-script)
  - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  - [Quokka.js](https://marketplace.visualstudio.com/items?itemName=WallabyJs.quokka-vscode) for rapid JavaScript / TypeScript prototyping.
  - [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments) for more human-friendly comments.
  - [Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer)
  - [ES7 React/Redux/GraphQL/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
  - [Guides](https://marketplace.visualstudio.com/items?itemName=spywhere.guides)
  - [indent-rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow)
  - [Reindent on Save](https://marketplace.visualstudio.com/items?itemName=adadevelopersacademy.reindent-on-save)
  - [npm Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense])

## Tools
### These are installed automatically, see step 4

- [React JS (Browser)](https://reactjs.org) is used to build the user interface (react react-dom).
- [Typescript](https://www.typescriptlang.org) extends Javascript by adding types (typescript @types/react @types/react-dom).
- [Babel](https://babeljs.io/) converts React and TypeScript code to JavaScript (@babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript @babel/plugin-transform-runtime @babel/runtime).
- [ESLint](https://eslint.org/) lints our code (eslint eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/parser @typescript-eslint/eslint-plugin).
- [webpack](https://webpack.js.org) creates performant bundles containing our app’s JavaScript code (webpack webpack-cli @types/webpack webpack-dev-server @types/webpack-dev-server babel-loader html-webpack-plugin ts-node fork-ts-checker-webpack-plugin @types/fork-ts-checker-webpack-plugin eslint-webpack-plugin clean-webpack-plugin).
- [Jest](https://jestjs.io/) for unit testing (jest).
- [Enzyme](https://enzymejs.github.io/enzyme/) makes testing of React components easier (enzyme enzyme-adapter-react-16).
- [Husky](https://typicode.github.io/husky/#/) manages Git hooks (husky).
- [React Icons](https://react-icons.github.io/react-icons) for a collection of icons from different sources (react-icons).
- [React Router](https://reactrouter.com/web/guides/quick-start) makes routing between different pages possible (react-router-dom).
- [JSON Server](https://github.com/typicode/json-server#getting-started) is a fake REST API for testing and mocking (json-server).
- [Material UI](https://material-ui.com/) provides template React components (@material-ui/icons).
- [GitHub Pages](https://pages.github.com/) as one way to publish the website.
- [i18next](https://github.com/i18next/react-i18next) offers support for different languages (i18next react-i18next i18next-browser-languagedetector).

## Commands

- ```npm start``` to start the development server locally. It should show 'Hello World' in the browser.
- ```npm test``` to run all tests (should pass HelloWorld.test). Or use ```npm run test -- --watch --coverage``` to run tests continually on any file change.
- ```sass --watch src/sass:css``` to watch for file changes in sass files and compile them into the css file.
- ```npm run deploy``` produces an optimized production build in the branch "gh-pages" and publishes the website on GitHub Pages.
- ```npm run build``` produces an optimized production build in the folder "build" which can be published in other ways.
- ```npm run deploy``` builds and deploys the app on GitHub Pages

## Authors

-   **Tobias Tykvart** - _Front End_
