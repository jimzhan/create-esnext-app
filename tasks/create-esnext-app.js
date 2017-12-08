#!/usr/bin/env node
const { logger } = require('../utils')
const createBasicApp = require('./create-basic-app')

const createESNextApp = answers => {
  const project = answers.project
  logger.info(`Start creating esnext app: ${project}`)
  switch (answers.template) {
    default:
      createBasicApp(project)
  }
}

module.exports = createESNextApp
