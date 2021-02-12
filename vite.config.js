export default {
  esbuild: {
    jsxInject: `import Ganic from 'ganic'`,
    jsxFactory: 'Ganic.createElement',
    jsxFragment: 'Ganic.Fragment'
  }
}
