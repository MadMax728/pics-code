module.exports = function(plop) {
  plop.setGenerator("func-component", {
    description: "Generate React functional component",
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
        templateFile: "./func-component.hbs"
      }
    ]
  });
};
