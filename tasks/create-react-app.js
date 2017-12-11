#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const copy = require('recursive-copy')
const { consts, logger, project, template, sys } = require('../utils')
const { React } = require('./packages')

const createReactApp = name => {
  const cwd = process.cwd()
  const dest = path.resolve(cwd, name)

  sys.mkdir(dest)

  const source = path.resolve(consts.templates, 'react')
  copy(source, dest, consts.copyOptions)
    .then(() => project.create(dest, name, React))
    .then(() => project.applySettings(dest))
    .then(() =>
      console.log(chalk`{blue ●} <Project: ${name}> has been created.`)
    )
}

module.exports = createReactApp
