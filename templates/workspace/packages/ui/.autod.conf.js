module.exports = {
  write: true,
  prefix: '~',
  devprefix: '^',
  dep: [
    'antd',
    'autoprefixer',
    'browserslist',
    'cross-env',
    'react',
    'react-dom',
    'react-app-rewired',
    'react-app-rewire-less',
    'rimraf',
  ],
  devdep: [
  ],
  /* ------------------------------------------------------------
   * `lerna` based packages require manual installation via npm registry.
   * @SEE https://github.com/node-modules/autod/issues/34
   * ------------------------------------------------------------*/
  registry: 'https://registry.npm.taobao.org',
}
