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
      project: './vite.config.ts',
    },
  },
  env: {
    browser: true,
    node: true,
  },
  globals: {},
  rules: {
    'no-undef': 'off',
    'prettier/prettier': 'error',
    '@typescript-eslint/prefer-optional-chain': 'off',
  },
};
