export enum EmailActionTypes {
  API_RESPONSE_SUCCESS = "@@email/API_RESPONSE_SUCCESS",
  API_RESPONSE_ERROR = "@@email/API_RESPONSE_ERROR",

  SEND_EMAIL = "@@email/SEND_EMAIL",
}

export interface EmailState {
  isEmailSent: boolean;
}
