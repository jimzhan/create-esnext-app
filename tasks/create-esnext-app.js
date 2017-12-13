#!/usr/bin/env node
const chalk = require('chalk')
const { project } = require('../lib')
const { Basic } = require('./packages')

const createESNextApp = answers => {
  const { name, template } = answers
  console.log(
    chalk`{green ●} Start creating ESNext application <type: ${template}>: ${name}`
  )

  switch (answers.template) {
    default:
      project.create(name, template, Basic)
  }
}

module.exports = createESNextApp
