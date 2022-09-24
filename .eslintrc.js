module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier'
  ],
  rules: {
    'import/no-unresolved': 'off',
    'react/jsx-filename-extension': 'off',
    'no-console': 'off',
    'jsx-quotes': 'off',
    'prettier/prettier': 'error'
  },
};
