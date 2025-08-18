import nextPlugin from '@next/eslint-plugin-next';
import tseslint from 'typescript-eslint';
import unicorn from 'eslint-plugin-unicorn';
import prettier from 'eslint-plugin-prettier';
import tailwind from 'eslint-plugin-tailwindcss';

export default [
  {
    ignores: ['node_modules/**', '.next/**', 'dist/**', 'build/**'],
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      '@next/next': nextPlugin,
      '@typescript-eslint': tseslint.plugin,
      unicorn,
      prettier,
      tailwind,
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
      },
    },
    extends: [
      'plugin:@next/next/core-web-vitals',
      'plugin:@typescript-eslint/recommended',
      'plugin:unicorn/recommended',
      'plugin:tailwindcss/recommended',
      'prettier',
    ],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      'react-hooks/exhaustive-deps': 'error',
      'prefer-const': 'error',
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/no-null': 'off',
      'unicorn/filename-case': 'off',
      'tailwindcss/no-custom-classname': 'off',
      'prettier/prettier': ['error', { endOfLine: 'auto' }],
    },
  },
];
