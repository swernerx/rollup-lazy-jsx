import jsxPlugin from "./plugins/jsxPlugin";
import acornJsx from "acorn-jsx"

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs',
    //
    // externalLiveBindings: false
    //
    // this actually fixes the produced code from:
    //   return <Header__default['default']>Hello</Header__default['default']>
    // to:
    //   return <Header__default>Hello</Header__default>
  },
  acornInjectPlugins: [ acornJsx() ],
  plugins: [
    jsxPlugin()
  ],
  external: [ 'external-ui-lib' ]
};
