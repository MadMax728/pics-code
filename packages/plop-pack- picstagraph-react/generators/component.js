module.exports = function(plop) {
  plop.setGenerator("component", {
    description: "Generate React class component",
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
        templateFile: "./component.hbs"
      }
    ]
  });
};
