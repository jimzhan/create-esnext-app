import glob from 'glob'
import path from 'path'
import dotenv from 'dotenv'
import convict from 'convict'

/**
 * Root Settings.
 */
let settings = {
  port: {
    doc: 'The port to bind.',
    format: 'port',
    default: 8080,
    env: 'PORT',
  },
}

/**
 * Automatically loads all settings files under this folder and export
 * them defaults to global via their own namespace.
 * e.g. settings in `db.js` will be merged into top level `settings`
 * with prefix `db` before creating root `convict`.
 * -------------------- Detailed Schema --------------------
 *  Ref. https://github.com/mozilla/node-convict
 */
const configure = () => {
  dotenv.config()

  const files = glob.sync(`${__dirname}/*.js`, { ignore: '**/index.js' })
  Object.values(files).forEach((abspath) => {
    const module = require(abspath) // eslint-disable-line
    if (!module.default) {
      return
    }

    const prefix = path.parse(abspath).name
    const modcfg = module.prefix === false
      ? module.default
      : { [prefix]: module.default }
    settings = Object.assign(settings, modcfg)
  })

  return convict(settings)
}

export default configure()
