#!/usr/bin/env node
const path = require('path')
const yargs = require('yargs')

const { version } = require('./package.json')

const argv = yargs
  .usage('Usage: <name>')
  .help()
  .argv

console.log(argv)
