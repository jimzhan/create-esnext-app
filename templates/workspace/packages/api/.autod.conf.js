module.exports = {
  write: true,
  prefix: '~',
  devprefix: '^',
  dep: [
    'ava',
    'bcrypt',
    'boom',
    'bson',
    'confidence',
    'cross-env',
    'esm',
    'glue',
    'hapi',
    'hoek',
    'immutable',
    'nyc',
    'rimraf',
    'yar'
  ],
  devdep: [
    'nodemon'
  ],
  /* ------------------------------------------------------------
   * `lerna` based packages require manual installation via npm registry.
   * @SEE https://github.com/node-modules/autod/issues/34
   * ------------------------------------------------------------*/
  registry: 'https://registry.npm.taobao.org',
}
