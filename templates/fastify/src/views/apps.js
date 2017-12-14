import { resolve } from 'path'

const pkg = require(resolve(process.cwd(), 'package.json'))
const info = { name: pkg.name, version: pkg.version }

const routes = async (app, options) => {
  app.get('/', async (request, reply) => {
    return info
  })

  app.get('/:id', async (request, reply) => {
    return Object.assign(info, { id: request.params.id })
  })
}

export default routes
