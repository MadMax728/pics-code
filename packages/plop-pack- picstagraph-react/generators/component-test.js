module.exports = function(plop) {
  plop.setGenerator("component-test", {
    description: "Generate Jest tests of React component",
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
        path: "src/components/{{pascalCase name}}.test.js",
        templateFile: "./component-test.hbs"
      }
    ]
  });
};
