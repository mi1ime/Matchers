import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const compat = new FlatCompat({
  baseDirectory: dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [...compat.extends('airbnb-base'), {
  languageOptions: {
    globals: {
      ...globals.browser,
      ...globals.jest,
    },

    ecmaVersion: 'latest',
    sourceType: 'module',
  },
}];