import fastify from 'fastify'
import { env } from 'utils'
import apps from 'views'
import settings from 'settings'

const app = fastify({ logger: true })

/* -------------------- Development Helpers -------------------- */
if (!env.isProduction) {
  app.log = env.trace(app.log)
}

/* -------------------- Application Routes -------------------- */
app.register(apps, { prefix: '/apps' })

app.listen(settings.get('port'), (err) => {
  if (err) throw err
  app.log.info(`server listening on ${app.server.address().port}`)
})
