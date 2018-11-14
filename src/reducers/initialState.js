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
    error: null,
    deleted: null
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
  },
  userDataByUsername: {
    user: null,
    isLoading: false,
    error: false
  },
  campaignData: {
    landingCampaigns: null,
    participantCampaigns: null,
    creatorCampaigns: null,
    companyCampaigns: null,
    exploreCampaigns: null,
    isLoading: false,
    error: false
  }
};

export default initialState;
