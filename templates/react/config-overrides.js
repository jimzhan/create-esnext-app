const { injectBabelPlugin } = require('react-app-rewired')
const rewireLess = require('react-app-rewire-less')
const rewireEslint = require('react-app-rewire-eslint')

module.exports = function override (config, env) {
  config = injectBabelPlugin('transform-class-properties', config)
  config = injectBabelPlugin('transform-decorators-legacy', config)
  config = injectBabelPlugin(
    ['import', { libraryName: 'antd', style: true }],
    config
  )
  /* Customize global AntD styles here. */
  config = rewireLess.withLoaderOptions({
    modifyVars: {}
  })(config, env)
  config = rewireEslint(config, env)
  return config
}
