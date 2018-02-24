# create-esnext-app

Opinionated ESNext application boilerplate generator.

[![build](https://travis-ci.org/jimzhan/create-esnext-app.svg?branch=master)](https://travis-ci.org/jimzhan/create-esnext-app)
[![JavaScript Style Guide](https://camo.githubusercontent.com/387caee7992b38dcac6cb23f87abf0ba139d7101/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f636f64652532307374796c652d616972626e622d626c75652e737667)](https://github.com/airbnb/javascript)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Standard Version](https://img.shields.io/badge/release-standard%20version-brightgreen.svg)](https://github.com/conventional-changelog/standard-version)
[![npm version](https://img.shields.io/npm/v/create-esnext-app.svg)](https://www.npmjs.com/package/create-esnext-app)
[![npm downloads](https://img.shields.io/npm/dt/create-esnext-app.svg)](https://www.npmjs.com/package/create-esnext-app)

![docker-node](https://user-images.githubusercontent.com/460877/36463289-fe3a3b8c-1703-11e8-861a-1530142eda3a.png)

## Key Features

* Cutting edge [babel](https://babeljs.io/) supports.
* [Docker](http://www.docker.com/) with [pm2](https://github.com/Unitech/pm2) supports:
  - [node](https://hub.docker.com/_/node/) with [Debian](https://www.debian.org/).
  - [pm2](https://github.com/Unitech/pm2) with cluster supports at server side.
* GIT Workflow includes
  - auto-code formatting (via [prettier-standard](https://github.com/sheerun/prettier-standard)).
  - structural commit message restriction/validation (via [commitizen](https://github.com/commitizen/cz-cli)/[conventional-changelog](https://github.com/commitizen/cz-conventional-changelog) and [commitlint](https://github.com/marionebl/commitlint))
* Automatic versioning and CHANGELOG generation (via [standard-version](https://github.com/conventional-changelog/standard-version)).
* Pre-configured VSCode editing & debugging settings.


## Supported Templates

* [Basic](#basic---esnext-boilerplate) - Foundation of every ESNext based application.
* [Fastify](#fastify-server-boilerplate) - Fastify based API server template with Docker support.
* [MobX](#mobx-parcel--react-boilerplate) - MobX + React template built on top of [Parcel](https://parceljs.org/) with Docker support.

## Installation

```sh
npm install -g create-esnext-app
```

## Update

```sh
npm update -g create-esnext-app
```

## Create Biolerplate

```sh
create-esnext-app
```

## GIT Workflow

#### GIT Commit

![GIT Commit](https://user-images.githubusercontent.com/460877/34345735-28409f70-ea2c-11e7-83aa-6bb9051138b3.png)

#### GIT Push

![GIT Push](https://user-images.githubusercontent.com/460877/34345739-2d6e6a4a-ea2c-11e7-886e-cc677e1d4d11.png)


## Templates

###  Basic - ESNext Boilerplate

* [Babel](https://babeljs.io/) settings with supports includes:
  * [Class properties](https://babeljs.io/docs/plugins/transform-class-properties/)
  * [Decorators](https://github.com/loganfsmyth/babel-plugin-transform-decorators-legacy)
  * [Babel Env](https://github.com/babel/babel/tree/master/packages/babel-preset-env)
  * [Babel Jest](https://github.com/facebook/jest/tree/master/packages/babel-jest)
  * [Module Resolver](https://github.com/tleunen/babel-plugin-module-resolver) for `src`.
* [Commitizen](https://github.com/commitizen/cz-cli) for better commit message (via `npm run commit`).
  * [Conventional Changelog](https://github.com/commitizen/cz-conventional-changelog) as commit message template.
  * [CommitLint](https://github.com/marionebl/commitlint) as commit message format validator (via `commitmsg` hook provided by `husky`)
* [ESLint](https://github.com/eslint/eslint) with:
  * [Airbnb Config](https://github.com/airbnb/javascript) without `semicolon` :trollface:
  * [VSCode](https://code.visualstudio.com/) supports.
  * [Jest](https://github.com/facebook/jest).
* [Jest](https://github.com/facebook/jest) with [VSCode](https://code.visualstudio.com/) supports.
* [Prettier](https://github.com/prettier/prettier) for code formatting (`precommit` and `VSCode`).
* [Husky](https://github.com/typicode/husky) for GIT hooks.
* [per-env](https://github.com/ericclemmons/per-env) for npm scripts.


### Fastify Server Boilerplate

* Foundation extended from [Basic](#basic---esnext-boilerplate).
* [Fastify](https://github.com/fastify/fastify) - An modern efficient server.
* [Convict](https://github.com/mozilla/node-convict) - expands on the standard pattern of configuring with dynamic settings supports.
* [PM2](https://github.com/Unitech/pm2) - production process manager.
* [Docker](https://www.docker.com/) - containerization ready for your production deployment.


### MobX (Parcel) + React Boilerplate

* Foundation extended from [Basic](#basic---esnext-boilerplate).
* [Parcel](https://parceljs.org) based React boilerplate.
* [Enzyme](https://github.com/airbnb/enzyme) testing utilities for React.
* [Ant Design](https://github.com/ant-design/ant-design/) An enterprise-class UI design language and React-based implementation.
* [mobx-react](https://github.com/mobxjs/mobx-react) - React bindings for MobX.
* [Docker](https://www.docker.com/) - containerization ready for your production deployment.


## VSCode Supports (Optional)
* Required Extensions:
  - [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
* Workspace settings (via `.vscode/settings.json`).
* Chrome based debugger (via `.vscode/launch.json`).
