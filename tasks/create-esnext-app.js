#!/usr/bin/env node
const chalk = require('chalk')
const project = require('../src')
const { Basic, React } = require('./packages')

const createESNextApp = answers => {
  const name = answers.name
  console.log(
    chalk`{green ●} Start creating ESNext application <type: ${answers.template}>: ${project}`
  )

  switch (answers.template) {
    case 'react':
      project.create(name, React)
      break
    default:
      project.create(name, Basic)
  }
}

module.exports = createESNextApp
