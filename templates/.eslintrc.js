module.exports = {
  'env': {
    'es2021': true,
    'node': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  'overrides': [
    {
      'env': {
        'node': true
      },
      'files': [
        '.eslintrc.{js,cjs}'
      ],
      'parserOptions': {
        'sourceType': 'script'
      }
    }
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    '@typescript-eslint'
  ],
  'rules': {
    'indent': ['error', 2],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'arrow-body-style': ['error', 'always'],
    'eqeqeq': ['error'],
    'capitalized-comments': ['error', 'always'],
    'curly': ['error'],
    'dot-notation': ['error'],
    'no-div-regex': ['error'],
    'no-else-return': ['error'],
    'prefer-const': ['error'],
    'comma-spacing': ['error', { 'before': false, 'after': true }],
    'max-len': [
      'error',
      {
        'code': 180,
        'ignoreTrailingComments': true,
        'ignoreUrls': true,
        'ignoreTemplateLiterals': true,
        'ignoreRegExpLiterals': true,  
      }
    ]
  }
};
