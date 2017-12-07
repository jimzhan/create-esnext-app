#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const mkdirp = require('mkdirp')
const Handlebars = require('handlebars')
const logger = require('../logger')

const encoding = 'utf-8'

const createESNextApp = project => {
  logger.info(`Start creating esnext app: ${project}`)
  const cwd = path.resolve(process.cwd(), project)
  const pkg = path.resolve(cwd, 'package.json')
  mkdirp(cwd, err => {
    if (err) {
      logger.error(`Failed to create folder: ${err.message}`)
      process.exit(1)
    }
    fs.writeFileSync(
      pkg,
      compile('package.json.hbs', {
        project,
        version: '0.1.0'
      }),
      encoding
    )
  })
}

const compile = (filename, metadata = {}) => {
  const filepath = path.resolve(__dirname, '..', 'template', filename)
  const content = fs.readFileSync(filepath, encoding)
  return Handlebars.compile(content)(metadata)
}

module.exports = createESNextApp
