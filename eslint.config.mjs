// @ts-check
import eslint from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['eslint.config.mjs'],
  },

  eslint.configs.recommended,
  ...tseslint.configs.recommended, // 👈 sin type-checking

  eslintPluginPrettierRecommended,

  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      sourceType: 'commonjs',
      parserOptions: {
        projectService: false, // 👈 clave
      },
    },
  },

  {
    rules: {
      // reglas molestas OFF
      '@typescript-eslint/no-explicit-any': 'off',

      // reglas útiles pero no rompehuevos
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' },
      ],

      '@typescript-eslint/consistent-type-imports': 'warn',

      // Promesas
      '@typescript-eslint/no-floating-promises': 'warn',
    },
  },
);