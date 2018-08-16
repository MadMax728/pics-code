// Order affects display when selecting a generator.
module.exports = function(plop) {
  plop.load([
    "./generators/func-component.js",
    "./generators/component.js",
    "./generators/component-test.js",
    "./generators/container.js",
    "./generators/component-lifecycle.js",
    "./generators/reducer.js",
    "./generators/async-action-creator.js"
  ]);
};
