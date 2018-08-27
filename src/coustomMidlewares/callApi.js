export const callApi = store => next => action => {
  debugger;
  if (!action.method && !action.endpoint) {
    next(action);
  }
  console.log(action);
  next(action);
};
