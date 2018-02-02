import { env } from 'utils'
import apps from 'views'
import settings from 'settings'

const fastify = require('fastify')({ logger: true })

/* -------------------- Development Helpers -------------------- */
if (!env.isProduction) {
  fastify.log = env.trace(fastify.log)
}

/* -------------------- Middlewares -------------------- */
fastify.use(require('cors')())
fastify.register(require('fastify-helmet'))

/* -------------------- Application Routes -------------------- */
fastify.register(apps, { prefix: '/apps' })

/* -------------------- Application Server -------------------- */
const host = settings.get('host')
const port = settings.get('port')

fastify.listen(port, host, (err) => {
  if (err) throw err
  fastify.log.info(`fastify listening on ${port}`)
})
