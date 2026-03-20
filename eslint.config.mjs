import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import typescriptEslintParser from '@typescript-eslint/parser';
import importHelpers from 'eslint-plugin-import-helpers';
import prettierPlugin from 'eslint-plugin-prettier';

const config = [
  ...nextVitals,
  ...nextTypescript,
  {
    ignores: [
      'eslint.config.mjs',
      'next.config.js',
      'next-i18next.config.js',
      '**/*.d.ts',
    ],
  },
  {
    files: ['**/*.{js,jsx}'],
    plugins: {
      prettier: prettierPlugin,
      'import-helpers': importHelpers,
    },
    rules: {
      'max-len': ['error', 80],
      'prettier/prettier': [
        'error',
        { endOfLine: 'auto', trailingComma: 'all' },
      ],
      'no-plusplus': 'off',
      'class-methods-use-this': 'off',
      'react/jsx-props-no-spreading': 'off',
      semi: 'error',
      'import-helpers/order-imports': [
        'error',
        {
          newlinesBetween: 'always',
          groups: [
            'module',
            '/^@assets/',
            '/^@components/',
            '/^@contexts/',
            '/^@hooks/',
            '/^@views/',
            '/^@pages/',
            '/^@utils/',
            ['parent', 'sibling', 'index'],
          ],
          alphabetize: {
            order: 'asc',
            ignoreCase: true,
          },
        },
      ],
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      '@typescript-eslint': typescriptEslintPlugin,
      prettier: prettierPlugin,
      'import-helpers': importHelpers,
    },
    languageOptions: {
      parser: typescriptEslintParser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
      },
    },
    rules: {
      'max-len': ['error', 80],
      'prettier/prettier': [
        'error',
        { endOfLine: 'auto', trailingComma: 'all' },
      ],
      'no-plusplus': 'off',
      'class-methods-use-this': 'off',
      'react/jsx-props-no-spreading': 'off',
      semi: 'error',
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/comma-dangle': 'off',
      '@typescript-eslint/indent': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'import-helpers/order-imports': [
        'error',
        {
          newlinesBetween: 'always',
          groups: [
            'module',
            '/^@assets/',
            '/^@components/',
            '/^@contexts/',
            '/^@hooks/',
            '/^@views/',
            '/^@pages/',
            '/^@utils/',
            ['parent', 'sibling', 'index'],
          ],
          alphabetize: {
            order: 'asc',
            ignoreCase: true,
          },
        },
      ],
    },
  },
];

export default config;
