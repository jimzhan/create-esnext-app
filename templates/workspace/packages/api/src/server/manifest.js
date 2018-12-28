import settings from '../settings'

export default {
  server: {
    host: settings.host,
    port: settings.port,
    router: {
      isCaseSensitive: false,
      stripTrailingSlash: true
    },
    routes: {
      cors: true,
      security: {
        hsts: false,
        xss: true,
        noOpen: true,
        noSniff: true,
        xframe: false
      }
    }
  },
  register: {
    plugins: [{
      plugin: require('yar'),
      options: settings.yar
    },
    {
      plugin: './apps/auth'
    }]
  }
}