const initialState = {
  loginData: {
    user: null,
    isLoading: false,
    error: null
  },
  changePasswordData: {
    redirectToMyProfile: false,
    changeSucceeded: false,
    isLoading: false,
    error: null
  },
  userData: {
    profile: null,
    socialNetworks: null,
    isLoading: false,
    error: null
  },
  registerData: {
    registeredUser: null,
    isLoading: false,
    error: null
  },
  resetPasswordData: {
    password: null,
    isLoading: false,
    error: null
  },
  newPasswordData: {
    password: null,
    isLoading: false,
    error: false
  }
};

export default initialState;