import test from 'ava'
import { start } from '../server'

let server

test.beforeEach(async () => {
  server = await start()
})

test.afterEach(async () => {
  await server.stop()
  server = null
})

test('POST /login', async (t) => {
  const response = await server.inject({
    url: '/login',
    method: 'POST',
  })
  t.is(response.statusCode, 200)
})

test('POST /logout', async (t) => {
  const response = await server.inject({
    url: '/logout',
    method: 'POST',
  })
  t.is(response.statusCode, 200)
})