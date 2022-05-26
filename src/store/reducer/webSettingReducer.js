import {
  GET_WEB_SETTINGS,
  TOGGLE_AUTH_MODAL,
  TOGGLE_FOOTER,
} from "../constants";
const INIT_STATE = {
  web_setting: {},
  auth_modal: false,
  show_footer: true,
};

const WebSettings = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_WEB_SETTINGS:
      return {
        ...state,
        web_setting: action.payload,
      };
    case TOGGLE_AUTH_MODAL:
      return {
        ...state,
        auth_modal: !state.auth_modal,
      };
    case TOGGLE_FOOTER:
      return {
        ...state,
        show_footer: !state.show_footer,
      };
    default:
      return state;
  }
};

export default WebSettings;
