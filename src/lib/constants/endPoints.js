// admin Services
export const getAdminsEndPoint = "/users/admin?type=adminDashBoard";
export const updateAdminEndPoint = "/users/set-isadmin";

// ad Services
export const getSettingsAdsEndPoint = "/advertisement/";
export const createAdEndPoint = "/advertisement";
export const editAdEndPoint = "/advertisement/";
export const getAdsDetailsEndPoint = "/advertisement/";

// back-office dashboard service
export const getBackOfficeDashboardEndPoint = "/newsfeeds/news-feeds";

// Campaign Service
export const getCompanyCampaignsEndPoint =
  "/campaigns/get-all-company-campaigns";
export const getCreatorCampaignsEndPoint =
  "/campaigns/get-all-creator-campaigns";
export const getNewsFeedCampaignsEndPoint =
  "/campaigns/get-all-news-feed-campaigns";
export const getUserProfileCampaignsEndPoint =
  "/campaigns/get-all-user-profile-campaigns";
export const getSavedCampaignsEndPoint = "/campaigns/get-all-saved-campaigns";
export const getSettingsCampaignsEndPoint = "/campaigns/";
export const getCampaignTypeEndPoint = "/campaigns/list/";
export const getCampaignDetailsEndPoint = "/campaigns/";
export const getFavouriteCampaignsEndPoint = "/campaigns/favorite?favBy=";
export const createCampaignEndPoint = "/campaigns";
export const editCampaignEndPoint = "/campaigns/";
export const addParticipantsEndPoint = "/participants/add-participant";
export const removeParticipantsEndPoint = "/participants/";

// CMS Management Service
export const getCMSManagementEndPoint = "/cmspage";
export const getCMSDetailEndPoint = "/cmspage/";
export const getWebCMSDetailEndPoint = "/cmspage/cmspage";
export const updateCMSEndPoint = "/cmspage";
export const createCMSEndPoint = "/cmspage/";

// Comment Service
export const getCommentsEndPoint = "/comment/";
export const addCommentEndPoint = "/comment/";
export const deleteCommentEndPoint = "/comment/";
export const editCommentEndPoint = "/comment/";

// Dashboard Service
export const newsEndPoint = "/newsfeeds/news-feeds";
export const exploresEndPoint = "/explore?";
export const participantsEndPoint = "/participants/";
export const usersEndPoint = "/users";
export const picsEndPoint = "/image/get-pics";

// hashTag service
export const hashTagsEndPoint = "/hashtags";
export const addHashTagEndPoint = "/hashtags";

// hastag User Service
export const usernamesEndPoint = "/users";

// Like Service
export const likeEndPoint = "/like";

// media services
export const uploadMediaImageEndPoint = "/image/profile";
export const uploadMediaVideoEndPoint = "/video";

// Message Service
export const getMessagesEndPoint = "/messages?";

export const deleteMessagesForMe = "/messages/for/";

// Privacy Service
export const setProfilePrivacyEndPoint = "/users/private";
export const setSocialShareEndPoint = "/users/social-share";
export const setProfilePersonalizedAdvertiseEndPoint = "/users/advertise";
export const setChangeEmailEndPoint = "/users/change-email";
export const setChangePasswordEndPoint = "/users/change-password";
export const setChangeInvoiceAddressEndPoint = "/users/";
export const deleteSearchHistoryEndPoint = "/users/deleteSearchHistory";
export const deactivateAccountEndPoint = "/users/active-deactive";

// Profile Setting Service
export const activateBusinessProfileEndPoint =
  "/users/activate-business-profile";
export const getBillsEndPoint = "/users/get-bills";
export const getDownloadDataEndPoint = "/users/download-data";

// reported content service
export const updateBackOfficeReportEndPoint = "/reports";
export const addReportEndPoint = "/reports";
export const getReportedStatisticsEndPoint =
  "/reports/post-count?reportContent=";

// review services
export const CampaignsEndPoint = "/campaigns/get-all-campaigns";
export const AdsEndPoint = "/advertisement/list";
export const getReviewStatisticsEndPoint = "/post-count";
export const updateBackOfficeReviewEndPoint = "/update-status";

// Select Service
export const categoriesEndPoint = "/categories";
export const offersEndPoint = "/offers";
export const inquiriesEndPoint = "/inquiries";
export const dailyBudgetsEndPoint = "/dailybudgets";
export const radiusEndPoint = "/radius";
export const callToActionsEndPoint = "/calltoactions";
export const periodsEndPoint = "/vouchers/?type=periodLists";
export const amountsEndPoint = "/vouchers/?type=amountLists";
export const typesEndPoint = "/vouchers/?type=typeLists";
export const numbersEndPoint = "/vouchers/?type=numberLists";

// setting service
export const getNewsFeedOwnerEndPoint = "newsfeeds/own-news-feeds";
export const getNewsFeedOtherEndPoint = "/newsfeeds/own-news-feeds?id=";
export const getSavedOwnerEndPoint = "/saveposts";
export const getAboutEndPoint = "/users/";
export const setSavedPostEndPoint = "/savepost/";

// tags service

export const getOfferTagEndPoint = "/offertags";
export const getInquiryTagEndPoint = "/inquirytags";
export const addOfferTagEndPoint = "/offertags";
export const addInquiryTagEndPoint = "/inquirytags";

// User services
export const submitLoginEndPoint = "/auth/login";
export const validateOTPEndPoint = "/auth/validate-otp";
export const submitRegisterEndPoint = "/users";
export const submitCompanyRegisterEndPoint = "/users/company/create";
export const setNewPasswordEndPoint = "/users/set-password";
export const submitResetPasswordEndPoint = "/auth/forgot-password";
export const getUserEndPoint = "/users/"; // users
export const uploadProfilePictureEndPoint = "/images/profile";
export const updateUserProfileEndPoint = "/users";
export const generateOTPEndPoint = "/auth/generate-otp";
export const logoutEndPoint = "/auth/logout";
export const getSocialNetworkEndPoint = "/auth/social-network-details";
export const getUserCommunityEndPoint = "/users/community?followerId=";

// Users Services
export const getUserListSubscriberEndPoint =
  "/messages/userlist?type=subscriber";
export const getUserListUnknownEndPoint = "/messages/userlist?type=unknown";
export const getUserListLikeYouEndPoint = "/messages/userlist?type=likeYou";
export const getUserListCompanyEndPoint = "/messages/userlist?type=company";
export const sendRequestEndPoint = "/subscribe";
export const getUnsubscribeEndPoint = "/subscribe/";
export const getPendingUserListEndPoint = "/subscribe";
export const acceptRequestEndPoint = "/subscribe/accept-request";
export const blockUserRequestEndPoint = "/subscribe/block-request";
export const unblockUserRequestEndPoint = "/subscribe/";
export const searchUsersEndpoint = "/users/search";

// Verification Service
export const getVerificationsEndPoint = "/users/admin/list?type=verifiedUser";
export const getUnverifiedUsersEndPoint =
  "/users/admin/list?type=UnverifiedUser";
export const updateVerificationEndPoint = "/users/admin/verify-user";

// Voucher Service
export const getVouchersEndPoint = "/vouchers/?type=voucherLists";
export const addVoucherEndPoint = "/vouchers";

// Get Notification
export const getNotificationEndPoint = "/subscribe/notification";
