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
    socialNetworks: [],
    isLoading: false,
    error: null
  }
};

export default initialState;
