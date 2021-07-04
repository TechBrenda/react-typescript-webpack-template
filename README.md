# Resources

[Creating React and TypeScript apps with Webpack](https://www.carlrippon.com/creating-react-app-with-typescript-eslint-with-webpack5/)

[Using CSS in React and TypeScript with Webpack 5](https://www.carlrippon.com/using-css-react-typescript-with-webpack5/)

[Using images in React and TypeScript with Webpack 5](https://www.carlrippon.com/using-images-react-typescript-with-webpack5/)

[Using Jest and RTL with React and TypeScript](https://www.carlrippon.com/using-jest-and-rtl-with-react-typescript/)

# Commands

Run locally in development mode: `npm start`

Create production code in `build` folder: `npm run build`

Run tests: `npm test`

# Optional API_URL Webpack setting

In webpack dev file, in the plugins section of config, add this section:

```json
new webpack.DefinePlugin({
  'process.env.API_URL': JSON.stringify('http://localhost:3001')
})
```
Change the URL to where your API is hosted.

In webpack prod file, the DefinePlugin is aleady included, so only add the line with process.env.API_URL:

```json
new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify('production'),
  'process.env.API_URL': JSON.stringify('http://localhost:3001')
}),
```
