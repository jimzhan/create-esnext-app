#!/usr/bin/env node
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

const install = (packages, cwd) => {
  Object.keys(packages).forEach(type => {
    let scope
    switch (type) {
      case 'global':
        scope = '--global'
        break
      case 'dependencies':
        scope = '--save'
        break
      default:
        scope = '--save-dev'
    }
    execute('npm', ['install', scope].concat(packages[type]), { cwd })
  })
}

module.exports = {
  execute,
  install,
  mkdir
}
