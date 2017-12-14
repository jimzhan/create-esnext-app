#!/usr/bin/env node
const chalk = require('chalk')
const inquirer = require('inquirer')
const validateProjectName = require('validate-npm-package-name')
const currentNodeVer = process.versions.node
const major = currentNodeVer.split('.')[0]
const { logger, packages, project } = require('./lib')

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

const { Basic, React } = packages

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
        { name: 'Basic - ESNext Boilerplate', value: 'basic' },
        { name: 'React + AntD Boilerplate', value: 'react' }
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
