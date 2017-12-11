#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const copy = require('recursive-copy')
const { consts, logger, template, sys } = require('../utils')
const { Basic } = require('./packages')

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
  sys.install(Basic)
}

const applySettings = dest => {
  const options = Object.assign(consts.copyOptions, { filter: ['**/*'] })
  const source = path.resolve(consts.templates, 'shared/')
  return copy(source, dest, options)
}

const createBasicApp = project => {
  const cwd = process.cwd()
  const dest = path.resolve(cwd, project)

  sys.mkdir(dest)

  const source = path.resolve(consts.templates, 'basic')
  copy(source, dest, consts.copyOptions)
    .then(() => createProject(dest, project))
    .then(() => applySettings(dest))
    .then(() =>
      console.log(chalk`{blue ●} <Project: ${project}> has been created.`)
    )
}

module.exports = createBasicApp
