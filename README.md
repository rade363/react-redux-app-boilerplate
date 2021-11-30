# React/Redux/Thunk App Boilerplate
* React app running on an Express server (can be enhanced to support SSR easily)
* Redux + Thunk
* Hot reload
* TypeScript, ESLint, CSS Lint
* Jest

## Instructions
* Install all dependencies (`npm i`)
* Create the `./.env` file in the root folder (sample below).
* Use `npm run build` to create JS bundles in the `./dist` folder.
* Use `npm run start` to start the Express server and open the app at the specified port, e.g. [http://localhost:5000](http://localhost:5000).
* Other intuitive commands for code validation/linting are available in the `./package.json` file.

## Env File Sample
```
NODE_ENV=development

WEB_HOST=http://localhost
WEB_PORT=5000
```
