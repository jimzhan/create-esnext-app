const { injectBabelPlugin } = require('react-app-rewired')
const rewireEslint = require('react-app-rewire-eslint')

module.exports = function override (config, env) {
  config = injectBabelPlugin('transform-class-properties', config)
  config = injectBabelPlugin('transform-decorators-legacy', config)
  config = rewireEslint(config, env)
  return config
}
