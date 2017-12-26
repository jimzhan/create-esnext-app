import fastify from 'fastify'
import settings from 'settings'
import { env } from 'utils'
import * as views from 'views'

const app = fastify({ logger: true })

/* -------------------- Development Helpers -------------------- */
if (!env.isProduction) {
  app.log = env.trace(app.log)
}

/* -------------------- Application Routes -------------------- */
app.register(views.apps, { prefix: '/apps' })

app.listen(settings.get('port'), function (err) {
  if (err) throw err
  app.log.info(`server listening on ${app.server.address().port}`)
})
