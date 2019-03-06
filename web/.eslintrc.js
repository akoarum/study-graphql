module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/recommended', '@vue/prettier'],
  plugins: [
    'vue',
    'prettier'
  ],
  rules: {
    'no-console': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/require-default-prop': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/component-name-in-template-casing': 'off',
    'vue/html-self-closing': 'off',
    'vue/html-closing-bracket-spacing': 'off'
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
