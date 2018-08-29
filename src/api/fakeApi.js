class MockLogin {
  static CreateUser(payload) {
    payload = Object.assign({}, payload);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          payload.userName &&
          payload.password &&
          payload.userName.length > 9
        ) {
          resolve({
            ...payload,
            auth_token: `${payload.userName}-${Math.floor(Math.random())}`
          });
        } else reject("error in saving pls try again");
      }, 5000);
    });
  }

  static RegisterUser(payload) {
    payload = Object.assign({}, payload);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          payload.userName &&
          payload.password &&
          payload.userName.length > 9
        ) {
          resolve({
            ...payload,
            auth_token: `${payload.userName}-${Math.floor(Math.random())}`
          });
        } else reject("error in saving pls try again");
      }, 5000);
    });
  }
}
export { MockLogin };
