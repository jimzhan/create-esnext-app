import Glue from 'glue'
import manifest from './manifest'
import settings from '../settings'

export const start = async () => {
  const server = await Glue.compose(manifest, { relativeTo: settings.basedir })
  await server.start()
  return server
}