#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const copy = require('recursive-copy')
const { consts, template, sys } = require('../utils')

const packages = {
  dependencies: [],
  devDependencies: [
    'babel-cli',
    'babel-eslint',
    'babel-jest',
    'babel-plugin-transform-class-properties',
    'babel-plugin-transform-decorators-legacy',
    'babel-plugin-module-resolver',
    'babel-preset-env',
    'babel-preset-jest',
    'cross-env',
    'eslint',
    'eslint-config-standard',
    'eslint-config-standard-react',
    'eslint-plugin-import',
    'eslint-plugin-jest',
    'eslint-plugin-node',
    'eslint-plugin-promise',
    'eslint-plugin-react',
    'eslint-plugin-standard',
    'husky',
    'jest',
    'lint-staged',
    'per-env',
    'prettier-standard',
    'rimraf'
  ]
}

const createBasicApp = project => {
  const cwd = process.cwd()
  const dest = path.resolve(cwd, project)

  sys.createFolder(cwd, project)
  sys.execute('npm', ['install', '-g', 'babel-eslint'])

  copy(consts.templates, dest, consts.copyOptions).then(results => {
    fs.writeFileSync(
      path.resolve(dest, 'package.json'),
      template.compile('package.json.hbs', {
        project,
        version: '0.1.0'
      }),
      consts.encoding
    )
    fs.unlinkSync(path.resolve(dest, 'package.json.hbs'))

    sys.execute('git', ['init'], { cwd: dest })
    Object.keys(packages).forEach(key => {
      sys.install(packages[key], dest)
    })
  })
}

module.exports = createBasicApp
