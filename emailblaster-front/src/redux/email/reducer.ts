import { EmailActionTypes, EmailState } from "./types";

export const INIT_STATE: EmailState = {
  isEmailSent:false
};

const Email = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case EmailActionTypes.API_RESPONSE_SUCCESS:
      switch (action.payload.actionType) {
        case EmailActionTypes.SEND_EMAIL:
          return {
            ...state,
            isEmailSent: true
          };
        default:
          return { ...state };
      }

    case EmailActionTypes.API_RESPONSE_ERROR:
      switch (action.payload.actionType) {
        case EmailActionTypes.SEND_EMAIL:
          return {
            ...state,
            isEmailSent: false
          };
        default:
          return { ...state };
      }

    case EmailActionTypes.SEND_EMAIL: {
      return {
        ...state,
        isEmailSent: false
      };
    }

    default:
      return { ...state };
  }
};

export default Email;
