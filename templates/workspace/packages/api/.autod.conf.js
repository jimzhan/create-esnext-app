module.exports = {
  write: true,
  prefix: '~',
  devprefix: '^',
  dep: [
  ],
  devdep: [
  ],
  /* ------------------------------------------------------------
   * `lerna` based packages require manual installation via npm registry.
   * @SEE https://github.com/node-modules/autod/issues/34
   * ------------------------------------------------------------*/
  registry: 'https://registry.npm.taobao.org',
}
