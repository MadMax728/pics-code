module.exports = function(plop) {
  plop.setGenerator("container", {
    description: "Generate React Redux container component",
    prompts: [
      {
        type: "input",
        name: "presentationalName",
        message: "Existing _presentational_ component name"
      }
    ],
    actions: [
      {
        type: "add",
        path: "src/containers/{{pascalCase presentationalName}}Container.js",
        templateFile: "./container.hbs"
      }
    ]
  });
};
