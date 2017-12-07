#!/usr/bin/env node
const chalk = require('chalk')

const error = message => {
  console.error(chalk.red(message))
}

const debug = message => {
  console.info(chalk.blue(message))
}

const info = message => {
  console.info(chalk.green(message))
}

module.exports = {
  error,
  debug,
  info
}
