# React Template

This has all the tools and dependencies which should be used when creating a React app.
**Please contact [Tobias Tykvart](https://github.com/tobiastykvart) before creating a new repository from this template**, some dependencies might have to be updated first.

## Getting Started

1. Create a new repository with this one as a template.
2. Clone the repository.
3. Install [Node JS](https://nodejs.org/en/about/). The Node Package Manager `npm` is used to install all dependencies and runs the development server to display checkit locally in the browser.
4. `npm install` within the repository folder. This installs all dependencies.
5. Install [SASS](https://sass-lang.com/). All CSS editing should be done in the .scss files found in the sccs folder and built with SASS into main.ccs. Use the command `sass --watch src/sass:src/css src/components:src/css` to compile scss files into css on changes. The .scss files are organized by:
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
- [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments) for more human-friendly comments.
- [Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer)
- [ES7 React/Redux/GraphQL/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
- [Guides](https://marketplace.visualstudio.com/items?itemName=spywhere.guides)
- [indent-rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow)
- [Reindent on Save](https://marketplace.visualstudio.com/items?itemName=adadevelopersacademy.reindent-on-save)
- [npm Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense])

## Tools

Check package.md for explanations of all the packages we are using. These are installed automatically (see "Getting Started": step 4).

- [Material UI](https://material-ui.com/) provides template React components (@material-ui/icons).

## Commands

- `npm start` to start the development server locally. It should show 'Hello World' in the browser.
- `npm test` to run all tests (should pass HelloWorld.test). Or use `npm run test:watch` to run tests continually on any file change.
- `sass --watch src/sass:src/css src/components:src/css` to watch for file changes in sass files and compile them into the css file.
- `npm run deploy` produces an optimized production build in the branch "gh-pages" and publishes the website on GitHub Pages.
- `npm run build` produces an optimized production build in the folder "build" which can be published in other ways.

## Authors

- **Tobias Tykvart** - _Front End_
