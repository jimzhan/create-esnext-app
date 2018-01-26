#!/usr/bin/env node
const deepmerge = require('deepmerge')

const Basic = {
  dependencies: [
    'axios',
  ],
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

const Fastify = deepmerge(Basic, {
  dependencies: [
    'convict',
    'dotenv',
    'glob',
    'fastify',
    'pm2',
  ],
  devDependencies: [
    'eslint-config-airbnb-base',
    'nodemon',
  ],
})


const React = deepmerge(Basic, {
  dependencies: [
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
  ],
  devDependencies: [
    'eslint-config-airbnb',
    'parcel-bundler',
    'react-test-renderer',
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
  MobX,
}
