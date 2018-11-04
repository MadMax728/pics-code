# picstagraph-web
Repository for front-end development using react
#TODO: fill in details when we setup build, deployment etc..

React version of the webapp.

### Project Setup and Running Locally
- Clone the project:
  - `git clone `
- Run commands:
  - `yarn` or `yarn install` - This will download and install all dependencies required to run the application
  - `yarn start` - To launch a local instance of the application
- Other commands:
  - `yarn build` - Creates a production build of the web application in `/build/`
  - `yarn test` - Launches the Jest test suite in watch mode
  - `yarn lint` - Runs all `.js` files against our ESLint rules to catch potential bugs at compile time

By default the app will attempt to start running on port "**8080**". This can be overridden by setting `PORT` in a `.env.local` file at the root of the project.

See [advanced configuration](https://github.com/facebookincubator/create-react-app/blob/ed5c48c81b2139b4414810e1efe917e04c96ee8d/packages/react-scripts/template/README.md#advanced-configuration) for more settings.

### Running Your Server Application with Docker

```bash
$ docker-compose build picstgraph_web
$ docker-compose up
```

### Feature Toggles

Some application features can be toggled on and off. See [featureToggles.js](src/featureToggles.js) for details.

Example of enabling particular feature in browser console at runtime:  
`window.featureToggles.account = true`  
_(Still need to trigger render by changing route, etc.)_

### Code Generators
This project leverages a cli tool, plop, to generate certain types of code (components, containers, etc.).
To use this cli tool do the following:
- Install `plop` globally
  - `yarn global add plop`
  - **note** - you will likely need to reload your command line environment to pick up the command
- From the project's root directory run: `plop`
  - Example generators:
    - `func-component`
    - `component`
    - `component-test`
    - `container`
    - `component-lifecycle`
    - `reducer`
    - `async-action`
- Follow the prompts to generate code for your use case
  - If the files generated aren't in correct location then manually move to necessary subfolder
  - Any issues or changes please open an issue on the project to discuss updating the templates
  - **note** - There is a known bug if you bypass prompts - [see issue](https://github.com/amwmedia/node-plop/issues/54)
