module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb', 'plugin:react/recommended', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'react-hooks'],

  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': 0, // Necessidade de criar um arquivo .jsx
    'import/prefer-default-export': 0, // Todos os exports precisam conter default, nesse projeto, alguns não terão
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn', // Regras do próprio REACT HOOKS
    'import/no-extraneous-dependencies': 0,
    'no-console': 0,
    'default-param-last': 0,
  },
};
