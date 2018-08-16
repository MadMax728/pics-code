const stripSuffix = answer => answer.replace(/reducer$/i, "");

module.exports = function(plop) {
  plop.setGenerator("reducer", {
    description: "Generate Redux reducer",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Reducer name",
        filter: stripSuffix
      }
    ],
    actions: [
      {
        type: "add",
        path: "src/reducers/{{camelCase name}}Reducer.js",
        templateFile: "./reducer.hbs"
      }
    ]
  });
};
