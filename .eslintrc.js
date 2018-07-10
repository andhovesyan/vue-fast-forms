module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/airbnb'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/extensions': ["error", "always", {
      "vue": "never",
      "js": "never",
      "json": "never",
    }],
    'import/no-extraneous-dependencies': 0,
    'no-prototype-builtins': 0,
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
