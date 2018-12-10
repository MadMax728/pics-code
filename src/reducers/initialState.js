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
    error: false,
    imageData: null
  },
  campaignData: {
    campaigns: null,
    campaign: [],
    isLoading: false,
    error: false
  },
  adData: {
    ads: null,
    ad: [],
    isLoading: false,
    error: false
  },
  exploreData: {
    explores: null,
    isLoading: false,
    error: false
  },
  dashboardData: {
    dashboard: null,
    isLoading: false,
    error: false
  },
  aboutData: {
    about: null,
    isLoading: false,
    error: false
  },
  newsFeedData: {
    newsFeed: null,
    isLoading: false,
    error: false
  },
  savedData: {
    saved: null,
    isLoading: false,
    error: false
  },
  likeData: {
    like: null,
    isLoading: false,
    error: false
  },
  commentData: {
    comments: {},
    comment: null,
    isLoading: false,
    error: false
  },
  tags: {
    addedOfferTags: null,
    addedInquiryTags: null,
    offerTags: null,
    inquiryTags: null,
    comments: null,
    isLoading: false,
    error: false
  },
  selectData: {
    categories: null,
    offers: null,
    inquirys: null,
    dailyBudgets: null,
    isLoading: false,
    error: false
  },
  usersData: {
    subscribers: [],
    isLoading: false,
    error: false
  },
};

export default initialState;
