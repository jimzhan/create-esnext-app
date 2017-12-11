#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const copy = require('recursive-copy')
const { consts, logger, template, sys } = require('../utils')
const { React } = require('./packages')

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
  Object.keys(React).forEach(key => {
    sys.install(React[key], dest, key === 'devDependencies')
  })
}

const applySettings = dest => {
  const options = Object.assign(consts.copyOptions, { filter: ['**/*'] })
  const source = path.resolve(consts.templates, 'shared/')
  return copy(source, dest, options)
}

const createReactApp = project => {
  const cwd = process.cwd()
  const dest = path.resolve(cwd, project)

  sys.mkdir(dest)
  sys.execute('npm', ['install', '-g', 'babel-eslint', 'create-react-app'])

  const source = path.resolve(consts.templates, 'react')
  copy(source, dest, consts.copyOptions)
    .then(() => createProject(dest, project))
    .then(() => applySettings(dest))
    .then(() =>
      console.log(chalk`{blue ●} <Project: ${project}> has been created.`)
    )
}

module.exports = createReactApp
