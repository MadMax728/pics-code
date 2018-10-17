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
  const authenticated = isUserAdmin() && jwtValid();
  return authenticated;
};

/**
 * logout user
 */
export const logoutUser = () => {
  clearTokensFromStorage();
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
    refreshToken: localStorage.getItem("refresh_token"),
    expiresIn: localStorage.getItem("expires_in"),
    tokenType: localStorage.getItem("token_type")
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
  if (authResponse.access_token) {
    localStorage.setItem("access_token", authResponse.access_token);
  }

  if (authResponse.refresh_token) {
    localStorage.setItem("refresh_token", authResponse.refresh_token);
  }

  if (authResponse.expires_in) {
    localStorage.setItem("expires_in", authResponse.expires_in);
  }

  if (authResponse.token_type) {
    localStorage.setItem("token_type", authResponse.token_type);
  }

  if (authResponse.hasOwnProperty("is_admin")) {
    localStorage.setItem("is_admin", authResponse.is_admin);
  }

  if (authResponse.hasOwnProperty("user_type")) {
    localStorage.setItem("user_type", authResponse.user_type);
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
};
