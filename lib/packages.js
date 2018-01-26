#!/usr/bin/env node
const deepmerge = require('deepmerge')

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
    'babel-preset-react',
    'commitizen',
    'cross-env',
    'cz-conventional-changelog',
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
    'jest-cli',
    'lint-staged',
    'per-env',
    'prettier-standard',
    'rimraf',
    '@commitlint/cli',
    '@commitlint/config-conventional',
  ],
}

const Fastify = deepmerge(Basic, {
  dependencies: [
    'convict',
    'dotenv',
    'glob',
    'fastify',
    'pm2',
  ],
  devDependencies: ['nodemon'],
})

const React = deepmerge(Basic, {
  global: ['create-react-app'],
  dependencies: [
    'antd',
    'ant-design-pro',
    'history',
    'prop-types',
    'react',
    'react-dom',
    'react-router-component',
    'react-scripts',
    'styled-components',
  ],
  devDependencies: [
    'babel-plugin-import',
    'enzyme',
    'enzyme-adapter-react-16',
    'jest-enzyme',
    'react-app-rewire-eslint',
    'react-app-rewire-less',
    'react-app-rewired',
    'react-hot-loader',
    'react-test-renderer',
  ],
})

const Redux = deepmerge(React, {
  dependencies: [
    'redux',
    'redux-actions',
    'redux-promise',
    'react-redux',
  ],
})

const MobX = deepmerge(React, {
  dependencies: [
    'mobx',
    'mobx-react',
    'mobx-react-devtools',
  ],
})

module.exports = {
  Basic,
  Fastify,
  React,
  Redux,
  MobX,
}
