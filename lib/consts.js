#!/usr/bin/env node
const path = require('path')

const basedir = path.resolve(__dirname, '..')

const encoding = 'utf-8'

const templates = path.resolve(basedir, 'templates')

const copyOptions = {
  overwrite: false,
  expand: true,
  junk: false,
  dot: true
}

const Settings = [
  '.vscode',
  '.editorconfig',
  '.gitignore',
  'tsconfig.json'
].map(item => path.resolve(basedir, item))

module.exports = {
  basedir,
  encoding,
  copyOptions,
  templates,
  Settings
}
