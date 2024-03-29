import * as images from "../lib/constants/images";

/**
 * check user is authenticated or not
 */
export const isUserAuthenticated = () => {
  const authenticated = jwtValid();
  return authenticated;
};

/**
 * check user is admin authenticated or not
 */
export const isAdminUserAuthenticated = () => {
  const authenticated = isUserAdmin() && jwtAdminValid();

  return authenticated;
};

/**
 * logout user
 */
export const logoutUser = () => {
  clearTokensFromStorage();
};

/**
 * logout admin
 */
export const logoutAdmin = () => {
  localStorage.removeItem("admin_access_token");
};

/**
 * check jwt is valid or not
 */
export const isUserAdmin = () => {
  const token = extractJwtFromStorage();
  if (
    !token ||
    !token.isAdmin ||
    token.isAdmin === "false" ||
    token.isAdmin === false
  ) {
    return false;
  }

  return true;

  // exp value on jwt seems to be for length of access token not refresh token!
  // this only decodes the jwt. it does not verify the signature; that's best left to the API server.
  //let decodedToken = jwt.decode(token.accessToken);
  //
  // Verify that the expired date in UTC seconds since unix epoch is greater than now UTC in seconds otherwise if not our token is expired.
  //let now = new Date();
  //return decodedToken["exp"] > Math.floor( now.getTime() / 1000 );
};

/**
 * check jwt is valid or not
 */
export const jwtValid = () => {
  const token = extractJwtFromStorage();
  if (!token) {
    return false;
  }

  return true;

  // exp value on jwt seems to be for length of access token not refresh token!
  // this only decodes the jwt. it does not verify the signature; that's best left to the API server.
  //let decodedToken = jwt.decode(token.accessToken);
  //
  // Verify that the expired date in UTC seconds since unix epoch is greater than now UTC in seconds otherwise if not our token is expired.
  //let now = new Date();
  //return decodedToken["exp"] > Math.floor( now.getTime() / 1000 );
};

/**
 * check jwt is valid or not
 */
export const jwtAdminValid = () => {
  const token = extractJwtFromStorage();
  if (!token || !token.adminAccessToken || !token.isAdmin) {
    return false;
  }

  return true;

  // exp value on jwt seems to be for length of access token not refresh token!
  // this only decodes the jwt. it does not verify the signature; that's best left to the API server.
  //let decodedToken = jwt.decode(token.accessToken);
  //
  // Verify that the expired date in UTC seconds since unix epoch is greater than now UTC in seconds otherwise if not our token is expired.
  //let now = new Date();
  //return decodedToken["exp"] > Math.floor( now.getTime() / 1000 );
};

/**
 * extract jwt from storage
 */
export const extractJwtFromStorage = () => {
  const token = localStorage.getItem("access_token");
  if (!token) {
    return null;
  }

  return {
    accessToken: token,
    isAdmin: localStorage.getItem("is_admin"),
    userType: localStorage.getItem("user_type"),
    adminAccessToken: localStorage.getItem("admin_access_token"),
    language: localStorage.getItem("language"),
    userInfo: localStorage.getItem("user_info"),
    username: localStorage.getItem("username")
  };
};

/**
 * cleare token from storage
 */
export const clearTokensFromStorage = () => {
  removeJwtFromStorage();
};

/**
 * save jwt in storage
 */
export const saveJwtToStorage = authResponse => {
  if (authResponse.token) {
    localStorage.setItem("access_token", authResponse.token);
  }
  // Change due to reflected in back-office login
  if (
    authResponse.email &&
    authResponse.username &&
    authResponse.id &&
    authResponse.role &&
    authResponse.profileUrl
  ) {
    localStorage.setItem(
      "user_info",
      JSON.stringify({
        email: authResponse.email,
        username: authResponse.username,
        language: authResponse.language || "English",
        profileUrl: authResponse.profileUrl || images.image,
        userType: authResponse.userType || "creator",
        role: authResponse.role,
        id: authResponse.id
      })
    );
  }

  if (authResponse.hasOwnProperty("isAdmin")) {
    localStorage.setItem("is_admin", authResponse.isAdmin);
  }

  if (authResponse.hasOwnProperty("user_type")) {
    localStorage.setItem("user_type", authResponse.user_type);
  }

  if (authResponse.hasOwnProperty("admin_access_token")) {
    localStorage.setItem("admin_access_token", authResponse.admin_access_token);
  }

  if (authResponse.hasOwnProperty("language")) {
    localStorage.setItem("language", authResponse.language);
  }

  if (authResponse.hasOwnProperty("username")) {
    localStorage.setItem("username", authResponse.username);
  }

  return extractJwtFromStorage();
};

/**
 * remove jwt from storage
 */
export const removeJwtFromStorage = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
  localStorage.removeItem("expires_in");
  localStorage.removeItem("token_type");
  localStorage.removeItem("is_admin");
  localStorage.removeItem("user_type");
  localStorage.removeItem("admin_access_token");
  localStorage.removeItem("user_info");
  localStorage.removeItem("username");
};
