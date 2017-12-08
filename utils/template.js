#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const Handlebars = require('handlebars')

const encoding = 'utf-8'
const templates = path.resolve(__dirname, '..', 'templates')

const compile = (filename, metadata = {}) => {
  const filepath = path.resolve(templates, filename)
  const content = fs.readFileSync(filepath, encoding)
  return Handlebars.compile(content)(metadata)
}

module.exports = {
  compile
}
