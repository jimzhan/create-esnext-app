#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const Handlebars = require('handlebars')
const consts = require('./consts')

const encoding = 'utf-8'
const templates = path.resolve(consts.basedir, 'templates')

const compile = (filepath, metadata = {}) => {
  const content = fs.readFileSync(path.resolve(templates, filepath), encoding)
  return Handlebars.compile(content)(metadata)
}

module.exports = {
  compile
}
