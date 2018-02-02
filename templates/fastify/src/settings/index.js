import glob from 'glob'
import path from 'path'
import dotenv from 'dotenv'
import convict from 'convict'

/**
 * Root Settings.
 */
let settings = {
  env: {
    doc: 'Deployment environment',
    format: String,
    default: 'development',
    env: 'NODE_ENV',
  },
  host: {
    doc: 'The host to run the system.',
    format: String,
    default: '0.0.0.0',
    env: 'HOST',
  },
  port: {
    doc: 'The port to bind.',
    format: 'port',
    default: 8080,
    env: 'PORT',
  },
  secret: {
    doct: 'Application secret',
    format: String,
    default: null,
    env: 'SECRET',
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
