import * as types from "../lib/constants/actionTypes";
import * as voucherService from "../services";
import { logger } from "../loggers";
import { Auth } from "../auth";
import { voucher_list } from "../mock-data";

const getVouchersStarted = () => ({
  type: types.GET_VOUCHERS_STARTED
});

const getVouchersSucceeded = data => ({
  type: types.GET_VOUCHERS_SUCCEEDED,
  payload: data
});

const getVouchersFailed = error => ({
  type: types.GET_VOUCHERS_FAILED,
  payload: error,
  error: true
});

export const getVouchers = () => {
  return dispatch => {
    dispatch(getVouchersStarted());
    const storage = Auth.extractJwtFromStorage();
    const header = {
      Authorization: storage.adminAccessToken
    };

    return voucherService.getVouchers(null, header).then(
      res => {
        dispatch(getVouchersSucceeded(res.data.data));
      },
      error => {
        dispatch(getVouchersFailed(error.response));
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};

// Add Voucher

const addVoucherStarted = () => ({
  type: types.ADD_VOUCHER_STARTED
});

const addVoucherSucceeded = data => ({
  type: types.ADD_VOUCHER_SUCCEEDED,
  payload: data
});

const addVoucherFailed = error => ({
  type: types.ADD_VOUCHER_FAILED,
  payload: error,
  error: true
});

export const addVoucher = provider => {
  return dispatch => {
    dispatch(addVoucherStarted());
    const storage = Auth.extractJwtFromStorage();

    const header = {
      Authorization: storage.adminAccessToken
    };

    return voucherService.addVoucher(provider, header).then(
      res => {
        dispatch(addVoucherSucceeded(res.data.data));
      },
      error => {
        dispatch(addVoucherFailed(error.response));
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};

// For Web /Admin - check voucher expiry

const checkVoucherExpiryStarted = () => ({
  type: types.CHECK_VOUCHER_EXPIRY_STARTED
});

const checkVoucherExpirySucceeded = data => ({
  type: types.CHECK_VOUCHER_EXPIRY_SUCCEEDED,
  payload: data
});

const checkVoucherExpiryFailed = error => ({
  type: types.CHECK_VOUCHER_EXPIRY_FAILED,
  payload: error,
  error: true
});

export const checkVoucherExpiry = data => {
  return dispatch => {
    dispatch(checkVoucherExpiryStarted());
    const storage = Auth.extractJwtFromStorage();
    const header = { authorization: storage.accessToken };
    return voucherService.checkVoucherExpiry(data, header).then(
      res => {
        dispatch(checkVoucherExpirySucceeded(res.data.data));
      },
      error => {
        dispatch(checkVoucherExpiryFailed(error.response));
        logger.error({ description: error.toString(), fatal: true });
      }
    );
  };
};
