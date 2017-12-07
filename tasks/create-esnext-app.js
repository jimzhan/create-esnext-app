#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const mkdirp = require('mkdirp')
const copy = require('recursive-copy')
const Handlebars = require('handlebars')
const logger = require('../logger')

const encoding = 'utf-8'
const options = {
  overwrite: true,
  expand: true,
  junk: false,
  dot: true
}
const templates = path.resolve(__dirname, '..', 'templates')

const createBasicApp = project => {
  const wd = path.resolve(process.cwd(), project)

  mkdirp(wd, err => {
    if (err) {
      logger.error(`Failed to create <folder: ${project}: ${err.message}`)
      process.exit(1)
    }
  })

  copy(templates, wd, options).then(results => {
    fs.writeFileSync(
      path.resolve(wd, 'package.json'),
      compile('package.json.hbs', {
        project,
        version: '0.1.0'
      }),
      encoding
    )
    fs.unlinkSync(path.resolve(wd, 'package.json.hbs'))
  })
}

const createESNextApp = project => {
  logger.info(`Start creating esnext app: ${project}`)
  createBasicApp(project)
}

const compile = (filename, metadata = {}) => {
  const filepath = path.resolve(templates, filename)
  const content = fs.readFileSync(filepath, encoding)
  return Handlebars.compile(content)(metadata)
}

module.exports = createESNextApp
