"use strict";

module.exports = {
  plugins: ["react"],
  rules: {
    "react/default-props-match-prop-types": "error",
    "react/jsx-boolean-value": "warn",
    "react/jsx-key": "error",
    // "react/jsx-no-bind": "error",
    "react/jsx-no-comment-textnodes": "error",
    "react/jsx-no-duplicate-props": ["error", { ignoreCase: true }],
    "react/jsx-no-target-blank": "error",
    "react/jsx-pascal-case": "error", // don't think this is working
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/no-array-index-key": "warn",
    "react/no-children-prop": "error",
    "react/no-danger-with-children": "error",
    "react/no-direct-mutation-state": "error",
    "react/no-find-dom-node": "error",
    "react/no-is-mounted": "error",
    "react/no-multi-comp": ["error", { ignoreStateless: true }],
    "react/no-redundant-should-component-update": "error",
    "react/no-render-return-value": "error",
    "react/no-string-refs": "error",
    "react/no-typos": "error",
    "react/no-unescaped-entities": "error",
    "react/no-unknown-property": "error",
    "react/no-unused-prop-types": "warn",
    "react/no-unused-state": "warn",
    "react/prefer-es6-class": ["error", "always"],
    "react/prefer-stateless-function": "warn",
    "react/prop-types": "error",
    "react/react-in-jsx-scope": "error",
    "react/style-prop-object": "error"
  }
};
