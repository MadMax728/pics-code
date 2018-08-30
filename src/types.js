import { string, bool, func, shape } from "prop-types";

export const OnboardingType = {
  topHeader: string,
  subHeader: string,
  showDownloadStore: bool,
  children: func.isRequired
};

export const LoginTypes = {
  login: func
};

export const RegisterTypes = {
  handleRegisteration: func
};
export const AppTypes = {
  isAuth: shape({
    auth_token: string
  })
};
export const homeTypes = {
  match: shape({
    params: string,
    path: string
  })
};
