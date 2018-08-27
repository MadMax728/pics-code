export const callApi = store => next => action => {
  if (action.method && action.endPoint) {
    debugger;
    const { method, headers, payload, types, endPoint } = action;
    const [requestType, successType, failureType] = types;
    // if access_token is there check for access token else if login actions i.e without auth perform with access token
    if (action.auth) {
      //const {auth_token} = store();
      // then perform auth actions
    }

    if (method.includes("Mock")) {
      endPoint(payload)
        .then(data => next({ type: successType, data }))
        .catch(error => next({ type: failureType, error }));
    }
    fetch(endPoint, {
      method,
      headers,
      body: JSON.stringify(payload)
    })
      .then(response => response.json)
      .then(data => next({ type: successType, data }))
      .catch(error => next({ type: failureType, error }));
  }
  next(action);
};
