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
    campaign: null,
    favouriteCampaign: null,
    isLoading: false,
    error: false
  },
  adData: {
    ads: null,
    ad: null,
    isLoading: false,
    error: false
  },
  backOfficeDashboardData: {
    backOfficeDashboard: null,
    isLoading: false,
    error: false
  },
  cmsManagementData: {
    cmsManagement: null,
    cmsDetail: null,
    isLoading: false,
    error: false
  },
  dashboardData: {
    news: null,
    isLoadingnews: false,
    errornews: false,

    explores: null,
    isLoadingexplores: false,
    errorexplores: false,

    participants: null,
    isLoadingparticipants: false,
    errorparticipants: false,

    users: null,
    isLoadingusers: false,
    errorusers: false,

    pics: null,
    isLoadingpics: false,
    errorpics: false
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
    saves: null,
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
  mediaData: {
    media: null,
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
    inquiries: null,
    dailyBudgets: null,
    radius: null,
    targetGroups: null,
    callToActions: null,
    periods: null,
    amounts: null,
    types: null,
    numbers: null,
    languages: null,
    isLoading: false,
    error: false
  },
  usersData: {
    users: [],
    isLoading: false,
    error: false,
    isRequestSend: null,
    isUnsubscribed: null,
    userList: [],
    pendingUserList: [],
    isAcceptRequest: null,
    BlockRequestResult: [],
    isUnblock: null
  },
  subscribeData: {
    subscriber: [],
    subscribed: [],
    isLoading: false,
    error: false
  },
  profilePrivacyData: {
    profilePrivacyData: [],
    isLoading: false,
    error: false,
    changeEmailData: [],
    changePasswordData: [],
    changeInvoiceAddressData: [],
    userData: []
  },
  adminData: {
    admins: null,
    admin: null,
    isLoading: false,
    error: false
  },
  verificationData: {
    verifications: null,
    verification: null,
    unverifiedUsers: null,
    isLoading: false,
    error: false
  },
  voucherData: {
    vouchers: null,
    voucher: null,
    voucherExpiryResult: null,
    isLoading: false,
    error: false
  },
  reviewData: {
    campaigns: null,
    ads: null,
    isLoading: false,
    error: false
  },
  reportedContentData: {
    Image: null,
    Videos: null,
    Campaigns: null,
    Pics: null,
    Ads: null,
    Comments: null,
    Users: null,

    ImageStatistics: null,
    VideosStatistics: null,
    CampaignsStatistics: null,
    PicsStatistics: null,
    AdsStatistics: null,
    CommentsStatistics: null,
    UsersStatistics: null,

    addReport: null,

    isLoading: false,
    error: false
  },
  businessProfileData: {
    businessProfileActivationData: null,
    billsData: null,
    downloadData: null,
    isLoading: false,
    error: false
  },
  searchData: {
    searchKeyword: null,
    isLoading: false,
    error: false
  },
  hashUserData: {
    usernames: null,
    hashTags: null,
    isLoading: false,
    error: false
  },
  hashTagData: {
    hashTags: null,
    addedHashTags: null,
    isLoading: false,
    error: false
  },
  messagesData: {
    messages: [],
    lastEvaluatedKeys: undefined,
    isLoading: false,
    error: false
  }
};

export default initialState;
