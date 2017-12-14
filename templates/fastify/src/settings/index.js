import dotenv from 'dotenv'
import convict from 'convict'

dotenv.config()

const settings = convict({
  port: {
    doc: 'The port to bind.',
    format: 'port',
    default: 8080,
    env: 'PORT'
  },
  db: {
    host: {
      doc: 'Database host name/IP',
      format: '*',
      default: '127.0.0.1'
    },
    name: {
      doc: 'Database name',
      format: String
    }
  }
})

export default settings
