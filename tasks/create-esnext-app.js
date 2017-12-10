#!/usr/bin/env node
const ora = require('ora')
const { logger } = require('../utils')
const createBasicApp = require('./create-basic-app')

const createESNextApp = answers => {
  const project = answers.project
  const spinner = ora('Start creating ESNext application: ${project}').start()
  switch (answers.template) {
    default:
      createBasicApp(project, spinner)
  }
}

module.exports = createESNextApp
