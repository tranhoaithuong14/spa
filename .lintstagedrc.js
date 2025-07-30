module.exports = {
  'src/**/*.{ts,tsx}': [
    'eslint --fix --max-warnings=0',
    'prettier --write',
    'git add',
  ],
  'src/**/*.{less,css,json}': [
    'prettier --write',
    'git add',
  ],
};