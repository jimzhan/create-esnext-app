import { resolve } from 'path'

// eslint-disable-next-line
const pkg = require(resolve(process.cwd(), 'package.json'))
const info = { name: pkg.name, version: pkg.version }

const routes = async (app) => {
  app.get('/', async () => info)

  app.get('/:id', async request => Object.assign(info, { id: request.params.id }))
}

export default routes
