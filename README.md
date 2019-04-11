# webpack-workshop

## Set up

Clone the repo:

```bash
git clone https://github.com/bencoveney/webpack-workshop.git
cd webpack-workshop
```

Install dependencies:

```bash
npm install
```

## Running the build

Run the dev build (in watch mode):

```bash
npm run dev
```

Run the production build:

```bash
npm run prod
```

## Debugging

Run this from your console:

```
node --inspect-brk ./node_modules/webpack/bin/webpack.js
```

- Navigate to [chrome://inspect](chrome://inspect).
- Click *inspect* on your node process.
- In the sources tab, add your project folder. This will allow you to put breakpoints in files. You should only need to do this step once.

## Ideas

- **Loader (Easy)** - Pass a colour as an option to `good-job-loader` and colour the emitted text.
- **Loader (Middle)** - Extend the `good-job-loader` to support markdown.
- **Loader (Hard)** - Create a loader that takes a JSON file as input and generates JavaScript based on the JSON data.
- **Loader (Hard)** - Re-implement a loader from https://webpack.js.org/loaders/

- **Plugin (Easy)** - Add a reassuring message if the build fails.
- **Plugin (Easy)** - Extend the `good-job-loader` to accept additional messages as an option.
- **Plugin (Middle)** - Create a plugin that inserts the current time as a comment into the output bundle.
- **Plugin (Hard)** - Create a plugin that inserts the current git commit as a comment into the output bundle.
- **Plugin (Hard)** - Re-implement a plugin from https://webpack.js.org/plugins

## Useful links

- [Webpack loader API](https://webpack.js.org/api/loaders/)
- [Webpack writing a loader](https://webpack.js.org/contribute/writing-a-loader/)
- [SurviveJS loaders](https://survivejs.com/webpack/extending/loaders/)


- [Webpack plugin API](https://webpack.js.org/api/plugins/)
- [Webpack writing a plugin](https://webpack.js.org/contribute/writing-a-plugin/)
- [Webpack plugin patterns](https://webpack.js.org/contribute/plugin-patterns/)
- [Webpack compiler hooks](https://webpack.js.org/api/compiler-hooks/)
- [Webpack compilation hooks](https://webpack.js.org/api/compilation-hooks/)
- [SurviveJS plugins](https://survivejs.com/webpack/extending/plugins/)
