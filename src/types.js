import { string, bool, func, shape } from "prop-types";

const histroyType = {
  history: shape({
    push: func
  })
};
const childrenType = {
  children: func.isRequired
};

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
export const ForgotPasswordTypes = {
  resendEmail: string,
  handleResetEmail: func
};

export const ResetEmailType = {
  handleResetEmail: func,
  ...histroyType
};

export const ResetPasswordType = {
  handleResetPassword: func,
  ...histroyType
};
export const SearchResultType = {
  ...childrenType
};
