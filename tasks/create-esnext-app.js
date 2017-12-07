#!/usr/bin/env node
const fs = require('fs')
const ora = require('ora')
const path = require('path')
const mkdirp = require('mkdirp')
const copy = require('recursive-copy')
const spawn = require('child_process').spawnSync
const Handlebars = require('handlebars')
const { logger } = require('../utils')

const encoding = 'utf-8'
const options = {
  overwrite: true,
  expand: true,
  junk: false,
  dot: true
}
const templates = path.resolve(__dirname, '..', 'templates')

const createFolder = (abspath, folder) => {
  mkdirp(abspath, err => {
    if (err) {
      logger.error(`Failed to create <folder: ${folder}: ${err.message}`)
      process.exit(1)
    }
  })
}

const createBasicApp = project => {
  const wd = path.resolve(process.cwd(), project)

  createFolder(process.cwd(), project)
  const pkgs = [
    'babel-cli',
    'babel-eslint',
    'babel-jest',
    'babel-plugin-transform-class-properties',
    'babel-plugin-transform-decorators-legacy',
    'eslint',
    'eslint-config-standard',
    'eslint-config-standard-react',
    'eslint-plugin-import',
    'eslint-plugin-node',
    'eslint-plugin-promise',
    'eslint-plugin-react',
    'eslint-plugin-standard',
    'husky',
    'jest',
    'lint-staged',
    'prettier-standard'
  ]
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

    spawn('npm', ['install', '--save-dev'].concat(pkgs), {
      cwd: wd,
      stdio: 'inherit'
    })
  })
}

const createESNextApp = project => {
  const spinner = ora(`Start creating esnext app: ${project}`).start()
  createBasicApp(project)
  spinner.stop()
}

const compile = (filename, metadata = {}) => {
  const filepath = path.resolve(templates, filename)
  const content = fs.readFileSync(filepath, encoding)
  return Handlebars.compile(content)(metadata)
}

module.exports = createESNextApp
