module.exports = {
  root: true,
  env: {
    node: true,
    es2020: true,
    commonjs: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['prettier', '@typescript-eslint', 'import-helpers'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier',
  ],
  rules: {
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-cycle': [0, { ignoreExternal: true }],
    'implicit-arrow-linebreak': 'off',
    'no-plusplus': 'off',
    'arrow-parens': 'off',
    'comma-dangle': 'off',
    'global-require': 'off',
    'operator-linebreak': 'off',
    'no-restricted-exports': 'off',
    'no-use-before-define': ['error'],
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    'prefer-const': ['error'],
    '@typescript-eslint/comma-dangle': 'off',
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-use-before-define': [
      'error',
      { functions: false, classes: false, variables: true },
    ],
    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        allowSingleExtends: true,
      },
    ],
    'import-helpers/order-imports': [
      'error',
      {
        newlinesBetween: 'always',
        groups: [
          'module',
          '/^apps/',
          '/^utils/',
          '/^types/',
          ['parent', 'sibling', 'index'],
        ],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts'],
        paths: ['src'],
      },
    },
  },
}
