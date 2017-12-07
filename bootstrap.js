#!/usr/bin/env node
const inquirer = require('inquirer')
const validateProjectName = require('validate-npm-package-name')
const currentNodeVer = process.versions.node
const semver = currentNodeVer.split('.')
const major = semver[0]

const requiredVer = 8
const createESNextApp = require('./tasks/create-esnext-app')
const logger = require('./logger')

if (major < requiredVer) {
  logger.error(
    `You are running Node ${currentNodeVer}.\nCreate ESNext App requires Node ${requiredVer} or higher.\nPlease upgrade your node.`
  )
  process.exit(1)
}

inquirer
  .prompt([
    {
      type: 'input',
      name: 'project',
      message: 'Please provide your project name:'
    }
  ])
  .then(answers => {
    if (!validateProjectName(answers.project)) {
      logger.error(`Please provide a valid project name`)
      process.exit(1)
    } else {
      createESNextApp(answers.project)
    }
  })
