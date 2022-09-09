import { takeEvery, fork, put, all, call } from "redux-saga/effects";
import { setCookie } from "nookies";
//Account Redux states
import { EmailActionTypes } from "./types";
import {
  emailApiResponseSuccess,
  emailApiResponseError,
} from "./actions";

import {
  sendEmail as sendEmailApi,
 } from "../../services";

 const myDomain = process.env.REACT_APP_PUBLIC_DOMAIN;


//Include Both Helper File with needed methods

// Is user register successfull then direct plot user in redux.
function* sendEmail({ payload:  params  }: any) {
  try {
    const response: Promise<any> = yield call(sendEmailApi, params.data);
    yield put(
      emailApiResponseSuccess(
        EmailActionTypes.SEND_EMAIL,
        response
      )
    );
  } catch (error: any) {
    yield put(
      emailApiResponseError(EmailActionTypes.SEND_EMAIL, error)
    );
  }
}


export function* watchSendEmail() {
  yield takeEvery(EmailActionTypes.SEND_EMAIL, sendEmail);
}

function* sendEmailSaga() {
  yield all([
    fork(watchSendEmail),
  ]);
}

export default sendEmailSaga;

