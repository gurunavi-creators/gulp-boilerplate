module.exports = {
  extends: ['gnavi'],
  rules: {
    semi: ['error', 'never'],
    'no-magic-numbers': 'off',
    'max-len': ['error', { code: 120 }],
    'comma-dangle': ['error', 'always-multiline'],
    'arrow-parens': ['error', 'as-needed'],
    'class-methods-use-this': ['error', { exceptMethods: ['init'] }],
    'import/no-extraneous-dependencies': ['off'],
    'no-new': 'off',
  },
}
