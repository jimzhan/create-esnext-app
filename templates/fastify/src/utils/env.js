export const isProduction = () => process.env.NODE_ENV === 'production'

export const trace = (logger) => {
  const makeCallSiteGetter = level => function getCallSite() {
    const child = logger.child({
      caller: Error().stack.split('\n')[2].trim().replace('at ', ''),
    })
    return child[level](...arguments) // eslint-disable-line
  }

  const facade = Object.create(logger)
  Object.keys(logger.levels.values).forEach((level) => {
    facade[level] = makeCallSiteGetter(level)
  })
  return facade
}
