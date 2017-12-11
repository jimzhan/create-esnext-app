#!/usr/bin/env node
const chalk = require('chalk')
const createBasicApp = require('./create-basic-app')
const createReactApp = require('./create-react-app')

const createESNextApp = answers => {
  const project = answers.project
  console.log(
    chalk`{green ●} Start creating ESNext application <type: ${answers.template}>: ${project}`
  )

  switch (answers.template) {
    case 'react':
      createReactApp(project)
      break
    default:
      createBasicApp(project)
  }
}

module.exports = createESNextApp
