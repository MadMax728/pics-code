"use strict";

const camelCase = "^[a-z][A-Za-z]*$";
const PascalCase = "^[A-Z][A-Za-z]*$";

module.exports = {
  plugins: ["filenames"],
  rules: {
    "filenames/match-regex": ["error", camelCase]
  },
  overrides: [
    {
      files: ["src/components/**/*.js", "src/containers/**/*.js"],
      excludedFiles: "index.js",
      rules: {
        "filenames/match-regex": ["error", PascalCase]
      }
    },
    {
      files: ["*.test.js", "App.js", "**/*.stories.js"],
      rules: {
        "filenames/match-regex": "off"
      }
    }
  ]
};
