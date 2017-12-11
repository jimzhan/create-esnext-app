const fs = require('fs')
const path = require('path')
const copy = require('recursive-copy')

const consts = require('./consts')
const sys = require('./sys')
const template = require('./template')

const create = (dest, project, packages) => {
  const pkg = path.resolve(dest, 'package.json.hbs')
  fs.writeFileSync(
    path.resolve(dest, 'package.json'),
    template.compile(pkg, {
      project,
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

module.exports = {
  create,
  applySettings
}
