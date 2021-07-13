# Resources

[Creating React and TypeScript apps with Webpack](https://www.carlrippon.com/creating-react-app-with-typescript-eslint-with-webpack5/)

[Using CSS in React and TypeScript with Webpack 5](https://www.carlrippon.com/using-css-react-typescript-with-webpack5/)

[Using images in React and TypeScript with Webpack 5](https://www.carlrippon.com/using-images-react-typescript-with-webpack5/)

[Using Jest and RTL with React and TypeScript](https://www.carlrippon.com/using-jest-and-rtl-with-react-typescript/)

# npm Commands

Initial install: `npm install`

Run locally in development mode: `npm start`

Create production code in `build` folder: `npm run build`

Run tests: `npm test`

# yarn Commands

If you prefer yarn instead of npm, the commands are very similar. Installing will still create node_modules folder, but you'll get yarn.lock instead of package-lock.json.

Do not try to install with both yarn and npm. If you want to switch to the other, first delete node_modules folder and the lock file.

Initial install: `yarn install`

Run locally in development mode: `yarn start`

Create production code in `build` folder: `yarn build`

Run tests: `yarn test`

# Set Environment Variables

Create .env file at top level of project. This is in the .gitignore file because it should not be checked into source control.

Add the variable `API_URL` and set it to the URL that will be the base of your API calls. Axios will set this as the default so that all Axios calls will only need to set the URI (the part of the address that comes after the domain).

Example:

```
API_URL=http://localhost:8080
```

Set as many environment variables as you need in this file. Each must be on its own line. Each variable name must be all capital letters and may contain underscores. A name may contain numbers but not start with a number. Do not include spaces around the equal sign. The value should not be quoted.

Reference the variables in JavaScript (.ts and .tsx files) by prefixing the variable name with `process.env`.

Example:

```
axios.defaults.baseURL = process.env.API_URL;
```
