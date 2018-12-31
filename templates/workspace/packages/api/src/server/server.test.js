import test from 'ava'
import { start } from '../server'
import settings from '../settings'

let server

test.beforeEach(async () => {
  server = await start()
})

test.afterEach(async () => {
  await server.stop()
  server = null
})

test('start an hapi server', async (t) => {
  t.is(server.info.port, settings.port)
})

test('access a non-existent url', async (t) => {
  const response = await server.inject({
    url: '/notfound',
    method: 'GET',
    payload: { foo: 'bar' }
  })
  t.is(response.statusCode, 404)
})
