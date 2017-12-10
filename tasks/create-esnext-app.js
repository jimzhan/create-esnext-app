#!/usr/bin/env node
const chalk = require('chalk')
const createBasicApp = require('./create-basic-app')

const createESNextApp = answers => {
  const project = answers.project
  console.log(chalk`{green ●} Start creating ESNext application: ${project}`)

  switch (answers.template) {
    default:
      createBasicApp(project)
  }
}

module.exports = createESNextApp
