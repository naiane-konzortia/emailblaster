import { all } from "redux-saga/effects";

//auth
import sendEmailSaga from "./email/saga";


export default function* rootSaga() {
  yield all([
    sendEmailSaga(),
  
  ]);
}
