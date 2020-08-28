import jsxPlugin from "./plugins/jsxPlugin";
import acornJsx from "acorn-jsx"

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs'
  },
  acornInjectPlugins: [ acornJsx() ],
  plugins: [
    jsxPlugin()
  ],
  external: [ 'external-ui-lib' ]
};
