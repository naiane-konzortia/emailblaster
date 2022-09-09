import { combineReducers } from "redux";

import Email from "./email/reducer";
import Pages from "./pages/reducer"

export default combineReducers({
 
  Email,
  Pages
 
});
