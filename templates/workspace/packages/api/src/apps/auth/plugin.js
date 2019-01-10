import * as views from './views'

export default {
  name: 'auth',

  async register (server) {
    server.route([
      {
        method: 'POST',
        path: '/login',

        options: {
          auth: false,

          // validate: validators.login,

          handler: views.login,

          tags: ['api']
        }
      },
      {
        method: 'POST',
        path: '/logout',

        options: {
          auth: false,

          handler: views.logout,

          tags: ['api']
        }
      }
    ])
  }
}