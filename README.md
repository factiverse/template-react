# React Template

This has some basic tools and dependencies which can be used when creating a React app.
**Feel free to contact [Tobias Tykvart](https://github.com/tobiastykvart) with any questions when creating a new repository from this template**

## Getting Started

1. Create a new repository with this one as a template.
2. Clone the repository.
3. Install [Node JS](https://nodejs.org/en/about/). The Node Package Manager `npm` is used to install all dependencies and runs the development server to display checkit locally in the browser.
4. `npm install` within the repository folder. This installs all dependencies.
5. Use [Emotion](https://emotion.sh/docs/introduction) for styling, it is already installed and ready to go. Use the css prop to style elements.
6. Run `npm start:dev` to start the json-server and dev web server and visit `localhost:4000` in your browser to see the app.
7. Recommended code editor and useful plugins:

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

- `npm start:dev` runs all commands necessary for development, or you can run them individually:
- `npm start` to start the development server locally. It should show 'Hello World' in the browser.
- `npm run server` serves `server/db.json` locally to mock APIs

### Other

- `npm test` to run all tests (should pass HelloWorld.test). Or use `npm run test:watch` to run tests continually on any file change.
- `npm run deploy` produces an optimized production build in the branch "gh-pages" and publishes the website on GitHub Pages.
- `npm run build` produces an optimized production build in the folder "build" which can be published in other ways.

## Authors

- **Tobias Tykvart** - _Front End_
