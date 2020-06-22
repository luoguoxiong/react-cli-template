module.exports = {
  extends: [require.resolve("@umijs/fabric/dist/eslint")],

  rules: {
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-object-literal-type-assertion": 0,
    "@typescript-eslint/no-use-before-define": 1,
    "@typescript-eslint/camelcase": 1,
    "@typescript-eslint/no-unused-vars": 1,
    "@typescript-eslint/camelcase": 0,
    "no-param-reassign": 0,
    "no-return-assign": 0,
    "react/sort-comp": 1,
    "no-restricted-syntax": 1,
    "global-require": 1,
    "consistent-return": 0,
    "jsx-a11y/interactive-supports-focus": 0,
  },
};
