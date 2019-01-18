//https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401
export const ErrorCodes = {
  NotFound: 404,
  ServerError: 500,
  NotImplemented: 501,
  Unauthorized: 401,
  ServiceUnavailable: 503,
  UnknownError: 520,
  BadRequest: 400,
  InstallmentSchedule: {
    ServiceFetchFailed: 500,
    ServiceDown: 502,
    NoDataMustPayInFull: 700,
    NoDataCancelledOrElapsed: 701,
    NoDataByAccountBilled: 702,
    NoDataByPolicyBilled: 703,
    NoRegisteredAccounts: 900
  }
};
