"use strict";

module.exports = {
  rules: {
    "constructor-super": "error",
    "no-class-assign": "error",
    "no-const-assign": "error",
    "no-dupe-class-members": "error",
    // We're using import/no-duplicates instead
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
    //"no-duplicate-imports": "error",
    "no-new-symbol": "error",
    "no-this-before-super": "error",
    "no-useless-computed-key": "warn",
    "no-useless-constructor": "warn",
    "no-var": "error",
    "object-shorthand": "warn",
    "prefer-const": "warn",
    "prefer-rest-params": "warn"
  }
};
