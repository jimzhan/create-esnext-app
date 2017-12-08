#!/usr/bin/env node
const mkdirp = require('mkdirp')
const spawn = require('child_process').spawnSync
const logger = require('./logger')

const createFolder = (root, folder) => {
  mkdirp(root, err => {
    if (err) {
      logger.error(`Failed to create <folder: ${folder}>: ${err.message}`)
      process.exit(1)
    }
  })
}

const install = (packages, cwd, forDev = true) => {
  const pkgType = forDev ? '--save-dev' : '--save'
  spawn('npm', ['install', pkgType].concat(packages), {
    cwd,
    stdio: 'inherit'
  })
}

module.exports = {
  createFolder,
  install
}
