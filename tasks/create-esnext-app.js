#!/usr/bin/env node
const chalk = require('chalk')
const { project } = require('../src')
const { Basic, React } = require('./packages')

const createESNextApp = answers => {
  const { name, template } = answers
  console.log(
    chalk`{green ●} Start creating ESNext application <type: ${template}>: ${name}`
  )

  switch (answers.template) {
    case 'react':
      project.create(name, template, React)
      break
    default:
      project.create(name, template, Basic)
  }
}

module.exports = createESNextApp
