module.exports = {
  extends: 'airbnb-base',
  env: {
    browser: true,
    es6: true,
  },
  parser: 'babel-eslint',
  plugins: ['react', 'html', 'filenames'],
  rules: {
    'array-bracket-spacing': 'error',
    'arrow-parens': ['error', 'always'],
    'class-methods-use-this': 0,
    'comma-dangle': ['error', 'always-multiline'],
    'consistent-return': ['error', { treatUndefinedAsUnspecified: true }],
    'filenames/match-exported': 'error',
    'import/no-named-as-default': 'error',
    indent: ['error', 2, { SwitchCase: 1 }],
    'jsx-quotes': 'error',
    'key-spacing': ['error', { afterColon: true }],
    'line-comment-position': ['error', { position: 'above' }],
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'max-len': ['error', { code: 120, comments: 100, ignoreUrls: true }],
    'max-lines': ['error', { max: 500, skipBlankLines: true, skipComments: true }],
    'newline-after-var': ['error', 'always'],
    'newline-before-return': 'error',
    'no-await-in-loop': 'error',
    'no-console': 'error',
    'no-debugger': 'error',
    'no-delete-var': 'error',
    'no-dupe-args': 'error',
    'no-dupe-class-members': 'error',
    'no-dupe-keys': 'error',
    'no-empty-function': 'error',
    'no-empty-pattern': 'error',
    'no-empty': 'error',
    'no-eval': 'error',
    'no-extend-native': 0,
    'no-extra-semi': 'error',
    'no-implicit-globals': 'error',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': [
      'error',
      { skipTemplates: true, skipRegExps: true, skipComments: true },
    ],
    'no-label-var': 'error',
    'no-lonely-if': 'error',
    'no-mixed-requires': 'error',
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
    'no-multi-str': 'error',
    'no-path-concat': 'error',
    'no-process-exit': 'error',
    'no-restricted-globals': 'error',
    'no-tabs': 'error',
    'no-trailing-spaces': 'error',
    'no-unexpected-multiline': 'error',
    'no-unneeded-ternary': 'error',
    'no-unreachable': 'error',
    'no-unsafe-finally': 'error',
    'no-useless-concat': 'error',
    'no-useless-constructor': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: { multiline: true, minProperties: 2 },
        ObjectPattern: { multiline: true, minProperties: 2 },
        ImportDeclaration: 'never',
      },
    ],
    'object-curly-spacing': 'error',
    'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
    'prefer-const': 'error',
    'prefer-destructuring': 'error',
    'prefer-spread': 'error',
    quotes: ['error', 'single'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-curly-spacing': 'error',
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
        shorthandFirst: true,
      },
    ],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/no-unknown-property': 'error',
    'react/no-unused-state': 'error',
    'react/prop-types': 'error',
    'react/sort-comp': 'error',
    'sort-keys': ['error', 'asc', { caseSensitive: true }],
  },
};
