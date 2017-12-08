#!/usr/bin/env node
const path = require('path')

const encoding = 'utf-8'

const templates = path.resolve(__dirname, '..', 'templates')

const copyOptions = {
  overwrite: true,
  expand: true,
  junk: false,
  dot: true
}

module.exports = {
  encoding,
  copyOptions,
  templates
}
