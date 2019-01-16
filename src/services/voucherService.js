import { api } from "../api";
import { addVoucherEndPoint, getVouchersEndPoint } from "../lib/constants/endPoints";

// Developers can override this with an env.local file
const baseUrl = process.env.REACT_APP_API_BASEURL;
// const api = apiFactory(baseUrl);

/**
 *
 * @param {*} payload
 */

// BackOffice Dashboard API
export const getVouchers = (payload, header = {}) =>
  api(baseUrl, header).get(getVouchersEndPoint);

// BackOffice Dashboard API
export const addVoucher = (payload, header = {}) =>
  api(baseUrl, header).post(addVoucherEndPoint, payload);

// Admin - Campeign / Ads - Redeem Functionality
export const checkVoucherExpiry = (payload, header = {}) =>
  api(baseUrl, header).get(
    "/vouchers/check-voucher-expiry?voucherCode=" +
      payload.code +
      "&type=" +
      payload.type
  );
