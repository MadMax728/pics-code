import * as types from "../lib/constants/actionTypes";
import * as voucherService from "../services";
import { logger } from "../loggers";
import { Auth } from "../auth";
import {
  voucher_list
} from "../mock-data";

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

    return voucherService.getVouchers(header).then(
      res => {
          dispatch(getVouchersSucceeded(res.data.data));
      },
      error => {
        dispatch(getVouchersFailed(error.response))
        dispatch(getVouchersSucceeded(voucher_list));
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};
