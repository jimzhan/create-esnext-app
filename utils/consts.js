#!/usr/bin/env node
const path = require('path')

const basedir = path.resolve(__dirname, '..')

const encoding = 'utf-8'

const templates = path.resolve(basedir, 'templates')

const copyOptions = {
  overwrite: true,
  expand: true,
  junk: false,
  dot: true
}

module.exports = {
  basedir,
  encoding,
  copyOptions,
  templates
}
