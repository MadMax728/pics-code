"use strict";

module.exports = {
  parser: "babel-eslint",
  extends: [
    "./es6.js",
    "../rules/jsx-a11y/index.js",
    "../rules/filenames/index.js",
    "../rules/react/index.js"
  ],
  env: {
    browser: true,
    jest: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  }
};
