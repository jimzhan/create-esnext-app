#!/usr/bin/env node
const chalk = require('chalk')
const inquirer = require('inquirer')
const validateProjectName = require('validate-npm-package-name')
const { logger, packages, project } = require('./lib')

const currentNodeVer = process.versions.node
const major = currentNodeVer.split('.')[0]
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

const { Basic, Fastify, MobX } = packages

const createESNextApp = answers => {
  const { name, template } = answers
  console.log(
    chalk`{green ●} ☕️  Start creating ESNext application <type: {red ${template}}>: ${name}`
  )

  switch (answers.template) {
    case 'Fastify':
      project.create(name, template, Fastify)
      break
    case 'MobX':
      project.create(name, template, MobX)
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
        { name: 'Basic - ESNext Boilerplate', value: 'Basic' },
        { name: 'Fastify - Server Boilerplate', value: 'Fastify' },
        { name: 'MobX + React Boilerplate', value: 'MobX' }
      ]
    }
  ])
  .then(answers => {
    if (!validateProjectName(answers.name)) {
      logger.error(`Please provide a valid project name`)
      process.exit(1)
    } else {
      createESNextApp(answers)
    }
  })
