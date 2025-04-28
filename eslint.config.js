import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import pluginPrettier from 'eslint-plugin-prettier'
import configPrettier from 'eslint-config-prettier'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    plugins: {
      js,
      prettier: pluginPrettier,
    },
    extends: ['js/recommended'],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      quotes: ['error', 'single'],
      semi: ['error', 'never'],
      'prettier/prettier': 'error',
      'react/react-in-jsx-scope': 'on',
    },
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  configPrettier,
])
