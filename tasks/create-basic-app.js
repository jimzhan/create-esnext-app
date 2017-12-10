#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const copy = require('recursive-copy')
const { consts, logger, template, sys } = require('../utils')

const packages = {
  dependencies: ['axios'],
  devDependencies: [
    'babel-cli',
    'babel-eslint',
    'babel-jest',
    'babel-plugin-transform-class-properties',
    'babel-plugin-transform-decorators-legacy',
    'babel-plugin-transform-runtime',
    'babel-plugin-module-resolver',
    'babel-preset-env',
    'babel-preset-jest',
    'cross-env',
    'eslint',
    'eslint-config-standard',
    'eslint-config-standard-react',
    'eslint-plugin-html',
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

const createProject = (dest, project) => {
  const pkg = path.resolve(dest, 'package.json.hbs')

  fs.writeFileSync(
    path.resolve(dest, 'package.json'),
    template.compile(pkg, {
      project,
      version: '0.1.0'
    }),
    consts.encoding
  )
  fs.unlinkSync(pkg)
  sys.execute('git', ['init'], { cwd: dest })

  // install project dependencies.
  Object.keys(packages).forEach(key => {
    sys.install(packages[key], dest, key === 'devDependencies')
  })
}

const applySettings = dest => {
  const options = Object.assign(consts.copyOptions, { filter: ['**/*'] })
  const source = path.resolve(consts.templates, 'shared/')

  copy(source, dest, options)
    .then(() => logger.info(`Project created`))
    .catch(err => {
      logger.error(`Failed to apply settings: ${err.message}`)
      process.exit(1)
    })
}

const createBasicApp = project => {
  const cwd = process.cwd()
  const dest = path.resolve(cwd, project)

  sys.mkdir(dest)
  sys.execute('npm', ['install', '-g', 'babel-eslint'])

  const source = path.resolve(consts.templates, 'basic')
  copy(source, dest, consts.copyOptions)
    .then(() => createProject(dest, project))
    .then(() => applySettings(dest))
}

module.exports = createBasicApp
