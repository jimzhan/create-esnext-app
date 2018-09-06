module.exports = {
  write: true,
  prefix: '~',
  devprefix: '^',
  dep: [
    'lerna',
    'wsrun',
    'esnext-scripts',
  ],
  devdep: [
    '@commitlint/cli',
    '@commitlint/config-conventional',
    '@commitlint/config-lerna-scopes',
    'commitizen',
    'cz-conventional-changelog',
    'husky',
    'standard-version',
  ],
  semver: [
    'lerna@3.3.0',
  ],
  /* ------------------------------------------------------------
   * `lerna` based packages require manual installation via npm registry.
   * @SEE https://github.com/node-modules/autod/issues/34
   * ------------------------------------------------------------*/
  registry: 'https://registry.npm.taobao.org',
}
