#!/usr/bin/env node
const lodash = require('lodash')
const mkdirp = require('mkdirp')
const spawn = require('cross-spawn')
const logger = require('./logger')

const mkdir = abspath => {
  mkdirp(abspath, err => {
    if (err) {
      logger.error(`Failed to create <folder: ${abspath}>: ${err.message}`)
      process.exit(1)
    }
  })
}

const execute = (command, args, options = {}) => {
  spawn.sync(command, args, Object.assign({ stdio: 'inherit' }, options))
}

const install = (packages, cwd, forDev = true) => {
  if (!lodash.isArray(packages)) return
  const pkgType = forDev ? '--save-dev' : '--save'
  execute('npm', ['install', pkgType].concat(packages), { cwd })
}

module.exports = {
  execute,
  install,
  mkdir
}
