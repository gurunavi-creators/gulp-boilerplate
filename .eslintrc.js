module.exports = {
  extends: ['gnavi', 'prettier'],
  overrides: {
    files: ['gulp/**/*.js'],
    rules: {
      'class-methods-use-this': ['error', { exceptMethods: ['init'] }],
      'import/no-default-export': 'off',
      'import/no-extraneous-dependencies': 'off',
    },
  },
}
