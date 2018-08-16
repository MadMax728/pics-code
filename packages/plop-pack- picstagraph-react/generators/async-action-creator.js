const stripSuffix = answer => answer.replace(/actions$/i, "");

const addInvokeSuffixIfNone = funcName =>
  funcName.endsWith(")") ? funcName : funcName + "()";

module.exports = function(plop) {
  plop.setGenerator("async-action", {
    description: "Generate async action creator",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Action name",
        filter: stripSuffix
      },
      {
        type: "input",
        name: "functionReturningPromise",
        message: "Function returning promise",
        filter: addInvokeSuffixIfNone
      }
    ],
    actions: [
      {
        type: "add",
        path: "src/actions/{{camelCase name}}Actions.js",
        templateFile: "./async-action-creator.hbs"
      }
    ]
  });
};
