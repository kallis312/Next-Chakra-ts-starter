module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // 'scope-enum': [2, 'always', ['yourscope', 'yourscope']],
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'chore',
        'style',
        'refactor',
        'ci',
        'test',
        'revert',
        'perf',
        'vercel',
      ],
    ],
  },
};