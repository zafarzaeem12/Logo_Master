import { combineReducers } from "redux";
import Authenticate from "./authReducer";
import WebSettings from "./webSettingReducer";

export default combineReducers({
  user_authenticate: Authenticate,
  user_settings: WebSettings,
});
