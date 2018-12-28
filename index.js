#!/usr/bin/env node
const path = require('path')
const chalk = require('chalk')
const inquirer = require('inquirer')
const validateProjectName = require('validate-npm-package-name')
const helpers = require('./lib/helpers')

const plop = require('node-plop')(
  path.resolve(__dirname, 'lib', 'plopfile.js'),
)
// ------------------------------------------------------------------------------------------
//  Minimum system requirement safeguard.
// ------------------------------------------------------------------------------------------
const currentNodeVer = process.versions.node
const major = currentNodeVer.split('.')[0]
const requiredVer = 10
if (major < requiredVer) {
  helpers.error([
    `You are running Node ${currentNodeVer}.`,
    `Create ESNext App requires Node ${requiredVer} or higher.`,
    'Please upgrade your node.',
  ].join('\n'))
  process.exit(1)
}

const createESNextApp = (answers) => {
  const { name } = answers
  const app = plop.getGenerator('new')
  helpers.info(chalk`☕️  Start creating ESNext application <name: {red ${name}}>`)

  app.runActions({ name }).then(() => {
    helpers.execute('npm', ['install', '--global', 'autod', 'yarn'])
    // @TODO efficient installer
    const cwd = path.resolve(process.cwd(), name)
    helpers.execute('autod', null, { cwd })
    helpers.execute('yarn', ['install'], { cwd })
    helpers.execute('lerna', ['exec', '--', 'autod'], { cwd })
    helpers.execute('yarn', ['install'], { cwd })
    helpers.info(`workspace <${name}> has been created`)
  })
}

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Please provide your project name:',
    },
  ])
  .then((answers) => {
    if (!validateProjectName(answers.name)) {
      logger.error('Please provide a valid project name')
      process.exit(1)
    } else {
      createESNextApp(answers)
    }
  })
