import { string, bool, func } from "prop-types";

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
