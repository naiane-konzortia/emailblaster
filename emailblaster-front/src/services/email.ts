import APIClient from "./api";
import * as url from "./urls";

const api = new APIClient();

const sendEmail = (params: any) => {
  return api.create(`${url.SEND_EMAIL}`, params);
};

export { 
    sendEmail
};
