module.exports = (plop) => {
  plop.setGenerator('new', {
    description: 'Create a new web application starter kit',
    actions: require('./workspace'), // eslint-disable-line global-require
  })
}
