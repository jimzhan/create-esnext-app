#!/usr/bin/env node
const inquirer = require('inquirer')
const validateProjectName = require('validate-npm-package-name')
const currentNodeVer = process.versions.node
const major = currentNodeVer.split('.')[0]

const { logger } = require('./lib')
const createESNextApp = require('./tasks/create-esnext-app')

const requiredVer = 8

if (major < requiredVer) {
  logger.error(
    [
      `You are running Node ${currentNodeVer}.`,
      `Create ESNext App requires Node ${requiredVer} or higher.`,
      'Please upgrade your node.'
    ].join('\n')
  )
  process.exit(1)
}

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Please provide your project name:'
    },
    {
      type: 'list',
      name: 'template',
      message: 'Which template you need?',
      choices: [
        { name: 'Basic - ESNext Biolerplate', value: 'basic' }
        // { name: 'React + AntD Biolerplate', value: 'react' }
      ]
    }
  ])
  .then(answers => {
    if (!validateProjectName(answers.project)) {
      logger.error(`Please provide a valid project name`)
      process.exit(1)
    } else {
      createESNextApp(answers)
    }
  })
