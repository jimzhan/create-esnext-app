#!/usr/bin/env node
const lodash = require('lodash')

const Basic = {
  global: ['babel-eslint'],
  dependencies: ['axios'],
  devDependencies: [
    'babel-cli',
    'babel-eslint',
    'babel-jest',
    'babel-plugin-import',
    'babel-plugin-transform-class-properties',
    'babel-plugin-transform-decorators-legacy',
    'babel-plugin-transform-react-jsx',
    'babel-plugin-transform-runtime',
    'babel-preset-env',
    'babel-preset-airbnb',
    'commitizen',
    'cross-env',
    'cz-conventional-changelog',
    'eslint',
    'eslint-config-airbnb',
    'eslint-import-resolver-babel-module',
    'eslint-plugin-html',
    'eslint-plugin-jest',
    'eslint-plugin-import',
    'husky',
    'jest-cli',
    'lint-staged',
    'per-env',
    'prettier-standard',
    'rimraf',
    '@commitlint/cli',
    '@commitlint/config-conventional',
  ],
}

const React = Object.assign(lodash.cloneDeep(Basic), {
  dependencies: Basic.dependencies.concat([
    'antd',
    'ant-design-pro',
    'enzyme',
    'enzyme-adapter-react-16',
    'history',
    'jest-enzyme',
    'less',
    'prop-types',
    'react',
    'react-dom',
    'react-hot-loader',
    'react-router-dom',
    'regenerator',
    'styled-components',
  ]),
  devDependencies: Basic.devDependencies.concat([
    'parcel-bundler',
    'react-test-renderer',
  ]),
})

const MobX = Object.assign(lodash.cloneDeep(React), {
  dependencies: React.dependencies.concat([
    'mobx',
    'mobx-react',
    'mobx-react-devtools',
  ]),
})

module.exports = {
  Basic,
  React,
  MobX,
}
