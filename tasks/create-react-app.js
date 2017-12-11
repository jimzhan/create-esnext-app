#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const copy = require('recursive-copy')
const { consts, logger, project, template, sys } = require('../utils')
const { React } = require('./packages')

const createReactApp = project => {
  const cwd = process.cwd()
  const dest = path.resolve(cwd, project)

  sys.mkdir(dest)

  const source = path.resolve(consts.templates, 'react')
  copy(source, dest, consts.copyOptions)
    .then(() => project.create(dest, project, React))
    .then(() => project.applySettings(dest))
    .then(() =>
      console.log(chalk`{blue ●} <Project: ${project}> has been created.`)
    )
}

module.exports = createReactApp
