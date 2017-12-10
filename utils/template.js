#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const Handlebars = require('handlebars')
const consts = require('./consts')

const compile = (filepath, metadata = {}) => {
  const content = fs.readFileSync(filepath, consts.encoding)
  return Handlebars.compile(content)(metadata)
}

module.exports = {
  compile
}
