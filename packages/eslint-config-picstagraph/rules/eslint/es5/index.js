"use strict";

module.exports = {
  rules: {
    "dot-notation": "warn",
    "max-params": ["error", 5],
    "no-array-constructor": "warn",
    "no-case-declarations": "error",
    "no-cond-assign": "error",
    "no-delete-var": "error",
    "no-dupe-args": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-else-return": "warn",
    "no-empty": "error",
    "no-empty-character-class": "error",
    "no-empty-pattern": "error",
    "no-eval": "error",
    "no-ex-assign": "error",
    "no-extra-bind": "error",
    "no-func-assign": "error",
    "no-implied-eval": "error",
    "no-invalid-regexp": "error",
    "no-iterator": "warn", // TODO - Chris: may revisit
    "no-lone-blocks": "error",
    "no-lonely-if": "warn",
    "no-loop-func": "error",
    "no-new-func": "error",
    "no-regex-spaces": "error",
    "no-script-url": "error",
    "no-self-compare": "error",
    "no-throw-literal": "error",
    "no-undef": "error",
    "no-unneeded-ternary": "warn",
    "no-unreachable": "error",
    "no-unsafe-negation": "error",
    "no-unused-expressions": "error",
    "no-unused-vars": ["warn", { ignoreRestSiblings: true }],
    "no-useless-concat": "warn",
    "no-useless-constructor": "warn",
    "no-useless-return": "warn",
    "one-var": ["error", "never"],

    // https://eslint.org/docs/rules/valid-jsdoc
    // "valid-jsdoc": [
    //   "warn",
    //   {
    //     requireReturn: false,
    //     requireReturnType: true,
    //     requireReturnDescription: false
    //   }
    // ],
    camelcase: ["warn", { properties: "never" }],
    complexity: ["warn", 20],
    eqeqeq: ["error", "smart"],
    yoda: "warn" // Keep combined with no-cond-assign
  }
};
