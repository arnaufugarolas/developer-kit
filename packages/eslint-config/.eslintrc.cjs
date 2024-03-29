'use strict'

/** @type {import("eslint").Config} */
module.exports = {
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  extends: [
    'eslint:all',
    'plugin:prettier/recommended',
    'plugin:github/recommended',
    'plugin:sonarjs/recommended',
    'plugin:unicorn/recommended',
    'plugin:node/recommended-module',
    'plugin:optimize-regex/all',
    'plugin:security/recommended-legacy',
    'plugin:no-unsanitized/DOM',
    'plugin:xss/recommended',
  ],
  overrides: [
    {
      extends: [
        'plugin:github/typescript',
        'plugin:@typescript-eslint/recommended-type-checked',
        'plugin:@typescript-eslint/stylistic-type-checked',
      ],
      files: ['**/*.ts'],
      parserOptions: {
        project: './tsconfig.json',
      },
      rules: {
        'import/no-unresolved': 'off',
        'no-undef': 'off',
        'node/no-missing-import': 'off',
      },
    },
    {
      extends: [
        'plugin:github/browser',
        'plugin:github/react',
        'plugin:react/all',
        'plugin:react-redux/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
      ],
      files: ['**/*.tsx', '**/*.jsx'],
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 'latest',
      },
      plugins: ['react', 'react-redux', 'react-hooks', 'jsx-a11y'],
      rules: {
        'react/function-component-definition': [
          'error',
          { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' },
        ],
        'react/jsx-filename-extension': ['error', { extensions: ['.tsx', '.jsx'] }],
        'react/jsx-indent': 'off',
        'react/jsx-indent-props': 'off',
        'react/jsx-max-depth': ['error', { max: 3 }],
        'react/jsx-no-bind': 'off',
        'react/jsx-one-expression-per-line': 'off',
        'react/prop-types': 'off',
        'unicorn/filename-case': ['error', { case: 'pascalCase' }],
      },
      settings: {
        react: {
          version: 'detect',
        },
      },
    },
    {
      extends: ['plugin:@html-eslint/recommended'],
      files: ['**/*.html'],
      parser: '@html-eslint/parser',
      plugins: ['@html-eslint', 'html'],
    },
    {
      files: ['**/*.md'],
      plugins: ['markdown'],
      processor: 'markdown/markdown',
      rules: {
        'no-console': 'off',
        'no-process-exit': 'off',
        'no-undef': 'off',
        'no-unused-vars': 'off',
        'unicorn/filename-case': 'off',
      },
    },
    {
      files: ['**/*.json'],
      plugins: ['json-format'],
      settings: {
        'json/ignore-files': ['**/package-lock.json'],
        'json/json-with-comments-files': ['**/tsconfig.json', '.vscode/**'],
        'json/sort-package-json': 'standard',
      },
    },
    {
      extends: ['plugin:yml/standard', 'plugin:yml/prettier'],
      files: ['**/*.yml', '**/*.yaml'],
      parser: 'yaml-eslint-parser',
    },
    {
      env: {
        browser: false,
        commonjs: true,
      },
      extends: ['plugin:node/recommended-script'],
      files: ['**/*.cjs'],
      rules: {
        'import/no-commonjs': 'off',
      },
    },
    {
      extends: [
        'plugin:jest/recommended',
        'plugin:jest-dom/recommended',
        'plugin:jest/style',
        'plugin:jest-formatting/strict',
        'plugin:testing-library/react',
      ],
      files: ['**/*.test.*', '**/*.spec.*', '**/__tests__/**', '**/__test__/**'],
      plugins: ['jest', 'jest-async', 'jest-dom'],
      rules: {
        'jest-async/expect-return': 'error',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    'prettier',
    'github',
    'sonarjs',
    'unicorn',
    'no-secrets',
    'no-unsanitized',
    'xss',
    'simple-import-sort',
    'import',
    'sort-keys-fix',
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    'capitalized-comments': 'off',
    'filenames/match-regex': 'off',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'no-plusplus': 'off',
    'node/no-unpublished-import': 'off',
    'node/no-unpublished-require': 'off',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
    'sort-imports': 'off',
    'sort-keys-fix/sort-keys-fix': 'warn',
  },
}
