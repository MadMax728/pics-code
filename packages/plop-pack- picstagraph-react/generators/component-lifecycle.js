module.exports = function(plop) {
  plop.setGenerator("component-lifecycle", {
    description: "Generate React class component with lifecycle methods",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name"
      }
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{pascalCase name}}.js",
        templateFile: "./component-lifecycle.hbs"
      }
    ]
  });
};
