const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const lodash = require('lodash')
const mkdirp = require('mkdirp')
const spawn = require('cross-spawn')
const copy = require('recursive-copy')
const Handlebars = require('handlebars')

const consts = require('./consts')
const logger = require('./logger')

// ------------------------------------------------------------
//  System Helpers.
// ------------------------------------------------------------

/**
 * Synonym to `mkdir -p`.
 *
 * @param {string} abspath - folder to be created.
 */
const mkdir = abspath => {
  mkdirp(abspath, err => {
    if (err) {
      logger.error(`Failed to create <folder: ${abspath}>: ${err.message}`)
      process.exit(1)
    }
  })
}

/**
 * Execute system command.
 *
 * @param {string} command - command to be executed
 * @param {array} args - list of command arguments.
 * @param {object} options - command options.
 */
const execute = (command, args, options = {}) => {
  spawn.sync(command, args, Object.assign({ stdio: 'inherit' }, options))
}

/**
 * Install given npm package into specified working directory.
 *
 * @param {array} packages - npm packages to be installed.
 * @param {string} cwd - working directoy to install.
 */
const install = (packages, cwd) => {
  Object.keys(packages).forEach(type => {
    let scope
    switch (type) {
      case 'global':
        scope = '--global'
        break
      case 'dependencies':
        scope = '--save'
        break
      default:
        scope = '--save-dev'
    }
    execute('npm', ['install', scope].concat(packages[type]), { cwd })
  })
}

const compile = (filepath, metadata = {}) => {
  const content = fs.readFileSync(filepath, consts.encoding)
  return Handlebars.compile(content)(metadata)
}

const initialize = (dest, name, packages) => {
  const pkg = path.resolve(dest, 'package.json.hbs')
  fs.writeFileSync(
    path.resolve(dest, 'package.json'),
    compile(pkg, {
      name,
      version: '0.1.0'
    }),
    consts.encoding
  )
  fs.unlinkSync(pkg)
  execute('git', ['init'], { cwd: dest })
  install(packages, dest)
}

const applySettings = dest => {
  const options = Object.assign(consts.copyOptions, { filter: ['**/*'] })
  const source = path.resolve(consts.templates, 'shared/')
  return copy(source, dest, options)
}

const create = (name, template, packages) => {
  const cwd = process.cwd()
  const dest = path.resolve(cwd, name)

  mkdir(dest)

  let resolve
  if (lodash.isArray(template)) {
    resolve = Promise.all(
      template.map(item =>
        copy(path.resolve(consts.templates, item), dest, consts.copyOptions)
      )
    )
  } else {
    resolve = copy(
      path.resolve(consts.templates, template),
      dest,
      consts.copyOptions
    )
  }
  resolve
    .then(() => initialize(dest, name, packages))
    .then(() => applySettings(dest))
    .then(() =>
      console.log(
        chalk`{green ●} ❤️  ESNext application <name: ${name}> has been created.`
      )
    )
}

module.exports = {
  create
}
