#!/usr/bin/env node
const chalk = require('chalk');
const inquirer = require('inquirer');
const validateProjectName = require('validate-npm-package-name');

const currentNodeVer = process.versions.node;
const log = console.log; // eslint-disable-line
const major = currentNodeVer.split('.')[0];
const requiredVer = 10;

if (major < requiredVer) {
  log([
    `You are running Node ${currentNodeVer}.`,
    `Create ESNext App requires Node ${requiredVer} or higher.`,
    'Please upgrade your node.',
  ].join('\n'));
  process.exit(1);
}

const createApp = (answers) => {
  const { name, template } = answers;
  log(chalk`{green ●} ☕️  Start creating ESNext application <type: {red ${template}}>: ${name}`);

  switch (answers.template) {
    default:
      log('Start creating project ...');
  }
};

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Please provide your project name:',
    },
    {
      type: 'list',
      name: 'template',
      message: 'Which template you need?',
      choices: [
        { name: 'Fastify - Server Boilerplate', value: 'Fastify' },
        { name: 'MobX (Parcel) + React Boilerplate', value: 'MobX' },
      ],
    },
  ])
  .then((answers) => {
    if (!validateProjectName(answers.name)) {
      log('Please provide a valid project name');
      process.exit(1);
    } else {
      createApp(answers);
    }
  });
