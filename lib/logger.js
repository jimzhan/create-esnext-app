#!/usr/bin/env node
const chalk = require('chalk')

/* eslint-disable */
const error = (message) => {
  console.error(chalk.red(message))
}

const debug = (message) => {
  console.info(chalk.blue(message))
}

const info = (message) => {
  console.info(chalk.green(message))
}
/* eslint-enable */

module.exports = {
  error,
  debug,
  info,
}
