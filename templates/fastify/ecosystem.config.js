module.exports = {
  apps: [
    {
      name: 'SID',
      script: 'src/index.js',
      interpreter: './node_modules/.bin/babel-node',
      watch: true,
      env: {
        NODE_ENV: 'development',
      },
    },
    {
      name: 'PROD',
      script: 'build/index.js',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
  /**
   * ------- Deployment Section -------
   *  *NOTE* please replace `host`, `path`, `repo` and `ref` with your actual ones.
   */
  deploy: {
    production: {
      user: 'node',
      host: '127.0.0.1',
      ref: 'origin/master',
      repo: 'git@github.com:repo.git',
      path: '/var/www/production',
      'post-deploy': 'npm install && npm start',
      env: {
        NODE_ENV: 'production',
      },
    },
    staging: {
      user: 'node',
      host: '127.0.0.1',
      ref: 'origin/master',
      repo: 'git@github.com:repo.git',
      path: '/var/www/staging',
      'post-deploy': 'npm install && npm start',
      env: {
        NODE_ENV: 'production',
      },
    },
  },
}
