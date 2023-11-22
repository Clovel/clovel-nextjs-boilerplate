const eslintConfig = {
  root: true,
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
    ecmaFeatures: {
      jsx: true,
    },
    project: [
      'tsconfig.json',
      'tsconfig.eslint.json',
    ],
    tsconfigRootDir: __dirname,
  },
  extends: [
    'standard',
    'eslint:recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:promise/recommended',
    'turbo',
    "next/core-web-vitals",
    'plugin:@next/next/recommended',
    'plugin:n/recommended',
  ],
  plugins: [
    '@typescript-eslint',
    'import',
    '@spence1115/modules-newlines',
    'promise',
  ],
  settings: {
    'import/external-module-folders': [
      'node_modules',
    ],
    'import/parsers': {
      '@typescript-eslint/parser': [
        '.ts',
        '.tsx',
      ],
    },
    'import/resolver': {
      node: {
        moduleDirectory: [
          'src',
          'node_modules',
        ],
      },
    },
  },
  rules: {
    eqeqeq: 'error',
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 'first',
      },
    ],
    'multiline-ternary': [
      'warn',
      'always-multiline',
    ],
    semi: [
      'error',
      'always',
    ],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'only-multiline',
      },
    ],
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    'jsx-quotes': [
      'error',
      'prefer-double',
    ],
    'object-curly-spacing': [
      'warn',
      'always',
      {
        objectsInObjects: false,
        arraysInObjects: false,
      },
    ],
    'object-curly-newline': [
      'warn',
      {
        ObjectPattern: {
          consistent: true,
        },
        ImportDeclaration: {
          multiline: true,
        },
      },
    ],
    'object-shorthand': 'off',
    'space-before-function-paren': [
      'warn',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'array-bracket-spacing': [
      'warn',
      'always',
    ],
    'key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true,
        mode: 'strict',
      },
    ],
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true,
        overrides: {
          if: {
            after: false,
          },
          switch: {
            after: false,
          },
          for: {
            after: false,
          },
          while: {
            after: false,
          },
          catch: {
            after: false,
          },
        },
      },
    ],
    'space-before-blocks': [
      'error',
    ],
    'linebreak-style': [
      'error',
      'unix',
    ],
    'prefer-template': [
      'error',
    ],
    'no-undef-init': [
      'off',
    ],
    camelcase: [
      'warn',
    ],
    'eol-last': [
      'error',
      'always',
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxEOF: 1,
        maxBOF: 0,
      },
    ],
    'no-multi-spaces': [
      'error',
      {
        ignoreEOLComments: true,
        exceptions: {
          VariableDeclarator: true,
          Property: true,
          ImportDeclaration: true,
        },
      },
    ],
    'operator-linebreak': [
      'warn',
      'after',
    ],
    'symbol-description': 'warn',
    '@spence1115/modules-newlines/import-declaration-newline': 'warn',
    '@spence1115/modules-newlines/export-declaration-newline': 'warn',
    'promise/always-return': [
      'error',
      {
        ignoreLastCallback: true,
      },
    ],
    'promise/catch-or-return': [
      'error',
      {
        allowFinally: true,
      },
    ],
    'turbo/no-undeclared-env-vars': 'off',
    'n/prefer-promises/dns': 'error',
    'n/prefer-promises/fs': 'error',
    'n/no-unsupported-features/es-syntax': 'off',
    'no-extra-boolean-cast': 'off',
    'n/no-missing-import': 'off', /* False negatives in ES syntax */
    'n/no-process-exit': 'off',
    'n/no-unsupported-features/node-builtins': [
      'error',
      {
        version: '>=14.19.3',
        ignores: [],
      },
    ],
    'n/no-unpublished-require': 'off',
    'n/no-unpublished-import': 'off',
    '@typescript-eslint/strict-boolean-expressions': [
      'error',
    ],
    '@typescript-eslint/no-empty-interface': [
      'off',
      {
        allowSingleExtends: true,
      },
    ],
    '@typescript-eslint/no-inferrable-types': [
      'off',
      {
        ignoreParameters: true,
        ignoreProperties: true,
      },
    ],
    '@typescript-eslint/restrict-template-expressions': [
      'warn',
      {
        allowNumber: true,
        allowBoolean: true,
        allowAny: false,
        allowNullish: true,
      },
    ],
    'no-use-before-define': [
      'off',
    ],
    '@typescript-eslint/no-use-before-define': [
      'warn',
    ],
    '@typescript-eslint/no-empty-function': [
      'off',
    ],
    '@typescript-eslint/member-delimiter-style': [
      'error',
    ],
    '@typescript-eslint/semi': [
      'error',
      'always',
    ],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
        disallowTypeAnnotations: false,
      },
    ],
    '@typescript-eslint/explicit-function-return-type': [
      'warn',
      {
        allowTypedFunctionExpressions: true,
        allowDirectConstAssertionInArrowFunctions: true,
      },
    ],
    '@typescript-eslint/type-annotation-spacing': [
      'warn',
      {
        before: false,
        after: true,
        overrides: {
          arrow: {
            before: true,
            after: true,
          },
        },
      },
    ],
    'react/no-unescaped-entities': [
      'off',
    ],
    'react/display-name': [
      'off',
    ],
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
        ],
      },
    ],
    'react/jsx-no-useless-fragment': [
      'error',
    ],
    'react/jsx-curly-brace-presence': [
      'error',
      {
        props: 'never',
        children: 'ignore',
      },
    ],
    'react/jsx-one-expression-per-line': [
      'error',
      {
        allow: 'none',
      },
    ],
    'react/jsx-indent': [
      'error',
      2,
      {
        checkAttributes: false,
        indentLogicalExpressions: true,
      },
    ],
    'react/jsx-indent-props': [
      'error',
      2,
    ],
    'react/jsx-props-no-multi-spaces': [
      'error',
    ],
    'react/jsx-max-props-per-line': [
      'error',
      {
        maximum: 1,
        when: 'always',
      },
    ],
    'react/jsx-first-prop-new-line': [
      'error',
      'multiline-multiprop',
    ],
    'react/jsx-no-bind': [
      'error',
      {
        ignoreRefs: true,
        allowArrowFunctions: true,
        allowFunctions: false,
      },
    ],
    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: false,
        logical: false,
        prop: false,
      },
    ],
    'react/jsx-curly-spacing': [
      'error',
      {
        when: 'never',
        attributes: {
          allowMultiline: true,
          children: false,
        },
        spacing: {
          objectLiterals: 'never',
        },
      },
    ],
    'react/jsx-curly-newline': [
      'error',
      {
        multiline: 'require',
        singleline: 'forbid',
      },
    ],
    'react/jsx-tag-spacing': [
      'error',
      {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
        beforeClosing: 'never',
      },
    ],
    'react/jsx-closing-tag-location': [
      'error',
    ],
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
    'react/jsx-closing-bracket-location': [
      'error',
      'line-aligned',
    ],
    'react/jsx-key': [
      'warn',
      {
        checkKeyMustBeforeSpread: true,
      },
    ],
    'react/prop-types': [
      'off',
    ],
    'react-hooks/rules-of-hooks': [
      'error',
    ],
    'react-hooks/exhaustive-deps': [
      'warn',
    ],
  },
}

module.exports = eslintConfig;
