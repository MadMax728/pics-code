"use strict";

module.exports = {
  extends: [
    "./es5.js",
    "../rules/eslint/es6/index.js",
    "../rules/import/index.js"
  ],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      impliedStrict: true
    }
  },
  env: {
    es6: true,
    node: true
  },
  globals: {},
  rules: {}
};
