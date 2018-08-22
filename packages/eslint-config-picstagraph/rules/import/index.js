"use strict";

module.exports = {
  plugins: ["import"],
  rules: {
    "import/default": "error",
    "import/export": "error",
    "import/no-absolute-path": "error",
    "import/no-commonjs": "error",
    "import/no-duplicates": "error",
    "import/no-mutable-exports": "error",
    "import/no-named-as-default": "error",
    "import/no-named-as-default-member": "error",
    "import/no-named-default": "error",
    "import/no-unresolved": "error"
  }
};
