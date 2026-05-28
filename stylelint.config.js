export default {
  ignoreFiles: ['vault/.obsidian/plugins/**/*.css'],
  extends: ['@tofrankie/stylelint'],
  rules: {
    'font-family-no-missing-generic-family-keyword': null,
    'no-descending-specificity': null,
    'selector-pseudo-element-no-unknown': null,
    'custom-property-pattern': null,
    'selector-class-pattern': null,
    'value-keyword-case': [
      'lower',
      {
        ignoreProperties: ['font-family', '--fontStack-monospace', '--fontStack-sansSerif'],
      },
    ],
  },
}
