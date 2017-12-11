#!/usr/bin/env node

const Basic = {
  dependencies: ['axios'],
  devDependencies: [
    'babel-cli',
    'babel-eslint',
    'babel-jest',
    'babel-plugin-transform-class-properties',
    'babel-plugin-transform-decorators-legacy',
    'babel-plugin-transform-runtime',
    'babel-plugin-module-resolver',
    'babel-preset-env',
    'babel-preset-jest',
    'cross-env',
    'eslint',
    'eslint-config-standard',
    'eslint-config-standard-react',
    'eslint-plugin-html',
    'eslint-plugin-import',
    'eslint-plugin-jest',
    'eslint-plugin-node',
    'eslint-plugin-promise',
    'eslint-plugin-react',
    'eslint-plugin-standard',
    'husky',
    'jest',
    'lint-staged',
    'per-env',
    'prettier-standard',
    'rimraf'
  ]
}

const React = {
  dependencies: Basic.dependencies.concat([
    'react',
    'react-dom',
    'react-router-component',
    'react-scripts',
    'styled-components'
  ]),
  devDependencies: Basic.devDependencies.concat([
    'react-app-rewire-eslint',
    'react-app-rewired'
  ])
}

module.exports = {
  Basic,
  React
}
