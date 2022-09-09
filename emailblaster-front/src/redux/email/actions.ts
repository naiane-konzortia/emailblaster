import { EmailActionTypes } from "./types";

// common success
export const emailApiResponseSuccess = (
  actionType: string,
  data: any
) => ({
  type: EmailActionTypes.API_RESPONSE_SUCCESS,
  payload: { actionType, data },
});

// common error
export const emailApiResponseError = (
  actionType: string,
  error: string
) => ({
  type: EmailActionTypes.API_RESPONSE_ERROR,
  payload: { actionType, error },
});

export const emailSender = (data: {}) => {
  return {
    type: EmailActionTypes.SEND_EMAIL,
    payload: { data },
  };
};

