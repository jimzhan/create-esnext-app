const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const lodash = require('lodash')
const copy = require('recursive-copy')
const Handlebars = require('handlebars')

const consts = require('./consts')
const sys = require('./sys')

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
  sys.execute('git', ['init'], { cwd: dest })
  sys.install(packages, dest)
}

const applySettings = dest => {
  const options = Object.assign(consts.copyOptions, { filter: ['**/*'] })
  const source = path.resolve(consts.templates, 'shared/')
  return copy(source, dest, options)
}

const create = (name, template, packages) => {
  const cwd = process.cwd()
  const dest = path.resolve(cwd, name)

  sys.mkdir(dest)

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
