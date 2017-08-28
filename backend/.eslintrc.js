// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  globals: {
    app: true,
    server: true,
    io: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: [
    'eslint:recommended',
    'tidyzq',
  ],
}
