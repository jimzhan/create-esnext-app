import { start } from './server'

(async () => {
  try {
    const server = await start()
    console.log('Server is listening on', server.info.uri)
  } catch (err) {
    console.error('Error occoured when starting server:', err.message)
    process.exit(1)
  }
})()