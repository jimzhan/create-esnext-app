const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const copy = require('recursive-copy')

const consts = require('./consts')
const sys = require('./sys')
const template = require('./template')

const initialize = (dest, name, packages) => {
  const pkg = path.resolve(dest, 'package.json.hbs')
  fs.writeFileSync(
    path.resolve(dest, 'package.json'),
    template.compile(pkg, {
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

  const source = path.resolve(consts.templates, template)
  copy(source, dest, consts.copyOptions)
    .then(() => initialize(dest, name, packages))
    .then(() => applySettings(dest))
    .then(() =>
      console.log(chalk`{blue ● <Project: ${name}> has been created.}`)
    )
}

module.exports = {
  create
}
