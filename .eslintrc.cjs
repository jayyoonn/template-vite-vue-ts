module.exports = {
  extends: ['alloy', 'alloy/vue', 'alloy/typescript', 'prettier'],
  plugins: ['prettier'],
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: {
      sourceType: 'module',
      js: '@babel/eslint-parser',
      jsx: '@babel/eslint-parser',
      ts: '@typescript-eslint/parser',
      tsx: '@typescript-eslint/parser',
    },
  },
  env: {
    browser: true,
    node: true,
  },
  globals: {},
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/prefer-optional-chain': 'off',
  },
};
