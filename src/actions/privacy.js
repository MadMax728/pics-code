import * as types from "../lib/constants/actionTypes";
import * as privacyService from "../services";
import { logger } from "../loggers";
import { Auth } from "../auth";

// Set Profile Privacy
const setProfilePrivacyStarted = () => ({
  type: types.SET_PROFILE_PRIVACY_STARTED
});

const setProfilePrivacySucceeded = data => ({
  type: types.SET_PROFILE_PRIVACY_SUCCEEDED,
  payload: data
});

const setProfilePrivacyFailed = error => ({
  type: types.SET_PROFILE_PRIVACY_FAILED,
  payload: error,
  error: true
});

// Set Profile - Personalized Advertise
const setProfilePersonalizedAdvertiseStarted = () => ({
  type: types.SET_PROFILE_PERSONALIZED_ADVERTISE_STARTED
});

const setProfilePersonalizedAdvertiseSucceeded = data => ({
  type: types.SET_PROFILE_PERSONALIZED_ADVERTISE_SUCCEEDED,
  payload: data
});

const setProfilePersonalizedAdvertiseFailed = error => ({
  type: types.SET_PROFILE_PERSONALIZED_ADVERTISE_FAILED,
  payload: error,
  error: true
});

// Change Email
const setChangeEmailStarted = () => ({
  type: types.SET_CHANGE_EMAIL_STARTED
});

const setChangeEmailSucceeded = data => ({
  type: types.SET_CHANGE_EMAIL_SUCCEEDED,
  payload: data
});

const setChangeEmailFailed = error => ({
  type: types.SET_CHANGE_EMAIL_FAILED,
  payload: error,
  error: true
});

// Change Password
const setChangePasswordStarted = () => ({
  type: types.SET_CHANGE_PASSWORD_STARTED
});

const setChangePasswordSucceeded = data => ({
  type: types.SET_CHANGE_PASSWORD_SUCCEEDED,
  payload: data
});

const setChangePasswordFailed = error => ({
  type: types.SET_CHANGE_PASSWORD_FAILED,
  payload: error,
  error: true
});

// Change  Invoice Address
const setChangeInvoiceAddressStarted = () => ({
  type: types.SET_CHANGE_INVOICE_ADDRESS_STARTED
});

const setChangeInvoiceAddressSucceeded = data => ({
  type: types.SET_CHANGE_INVOICE_ADDRESS_SUCCEEDED,
  payload: data
});

const setChangeInvoiceAddressFailed = error => ({
  type: types.SET_CHANGE_INVOICE_ADDRESS_FAILED,
  payload: error,
  error: true
});

// Delete Search History
const deleteSearchHistoryStarted = () => ({
  type: types.DELETE_SEARCH_HISTORY_STARTED
});

const deleteSearchHistorySucceeded = data => ({
  type: types.DELETE_SEARCH_HISTORY_SUCCEEDED,
  payload: data
});

const deleteSearchHistoryFailed = error => ({
  type: types.DELETE_SEARCH_HISTORY_FAILED,
  payload: error,
  error: true
});

// Deactivate Account
const deactivateAccountStarted = () => ({
  type: types.DEACTIVATE_ACCOUNT_STARTED
});

const deactivateAccountSucceeded = data => ({
  type: types.DEACTIVATE_ACCOUNT_SUCCEEDED,
  payload: data
});

const deactivateAccountFailed = error => ({
  type: types.DEACTIVATE_ACCOUNT_FAILED,
  payload: error,
  error: true
});

export const setProfilePrivacy = isPrivacy => {
  return dispatch => {
    dispatch(setProfilePrivacyStarted());
    const storage = Auth.extractJwtFromStorage();
    const headers = {
      Authorization: storage.accessToken
    };
    const params = { headers };

    return privacyService.setProfilePrivacy(params, isPrivacy).then(
      res => {
        dispatch(setProfilePrivacySucceeded(res));
      },
      error => {
        dispatch(setProfilePrivacyFailed(error.response));
        logger.error({ description: error.toString(), fatal: true });
      }
    );
  };
};

export const setProfilePersonalizedAdvertise = isPersonalizedAdvertise => {
  return dispatch => {
    dispatch(setProfilePersonalizedAdvertiseStarted());
    const storage = Auth.extractJwtFromStorage();
    const headers = { Authorization: storage.accessToken };
    const params = { headers };

    return privacyService
      .setProfilePersonalizedAdvertise(params, isPersonalizedAdvertise)
      .then(
        res => {
          dispatch(setProfilePersonalizedAdvertiseSucceeded(res));
        },
        error => {
          dispatch(setProfilePersonalizedAdvertiseFailed(error.response));
          logger.error({
            description: error.toString(),
            fatal: true
          });
        }
      );
  };
};

export const setChangeEmail = emailDetails => {
  return dispatch => {
    dispatch(setChangeEmailStarted());
    const storage = Auth.extractJwtFromStorage();
    const headers = { Authorization: storage.accessToken };
    const params = { headers };

    return privacyService.setChangeEmail(params, emailDetails).then(
      res => {
        dispatch(setChangeEmailSucceeded(res));
      },
      error => {
        dispatch(setChangeEmailFailed(error.response));
        logger.error({ description: error.toString(), fatal: true });
      }
    );
  };
};

export const setChangePassword = passwordDetails => {
  return dispatch => {
    dispatch(setChangePasswordStarted());
    const storage = Auth.extractJwtFromStorage();
    const headers = { Authorization: storage.accessToken };
    const params = { headers };

    return privacyService.setChangePassword(params, passwordDetails).then(
      res => {
        dispatch(setChangePasswordSucceeded(res));
      },
      error => {
        dispatch(setChangePasswordFailed(error.response));
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};

export const setChangeInvoiceAddress = invoiceAddressDetails => {
  return dispatch => {
    dispatch(setChangeInvoiceAddressStarted());
    const storage = Auth.extractJwtFromStorage();
    const headers = { Authorization: storage.accessToken };
    const params = { headers };

    return privacyService
      .setChangeInvoiceAddress(params, invoiceAddressDetails)
      .then(
        res => {
          dispatch(setChangeInvoiceAddressSucceeded(res));
        },
        error => {
          dispatch(setChangeInvoiceAddressFailed(error.response));
          logger.error({
            description: error.toString(),
            fatal: true
          });
        }
      );
  };
};

export const deleteSearchHistory = searchHistoryId => {
  return dispatch => {
    dispatch(deleteSearchHistoryStarted());
    const storage = Auth.extractJwtFromStorage();
    const headers = { Authorization: storage.accessToken };
    const params = { headers };

    return privacyService.deleteSearchHistory(params, searchHistoryId).then(
      res => {
        dispatch(deleteSearchHistorySucceeded(res));
      },
      error => {
        dispatch(deleteSearchHistoryFailed(error.response));
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};

export const deactivateAccount = accountId => {
  return dispatch => {
    dispatch(deactivateAccountStarted());
    const storage = Auth.extractJwtFromStorage();
    const headers = { Authorization: storage.accessToken };
    const params = { headers };

    return privacyService.deactivateAccount(params, accountId).then(
      res => {
        dispatch(deactivateAccountSucceeded(res));
      },
      error => {
        dispatch(deactivateAccountFailed(error.response));
        logger.error({ description: error.toString(), fatal: true });
      }
    );
  };
};
