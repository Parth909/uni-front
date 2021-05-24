import {
  SET_LIGHT_THEME,
  SET_DARK_THEME,
  SET_USER,
  SET_USER_CHANNELS,
  SET_FOLLOWING_CHANNELS,
} from "../actions/types";

const initialState = {
  userTheme: null,
  _id: null,
  email: null,
  first_name: null,
  middle_name: null,
  last_name: null,
  profile_img_url: null,
  created_at: null,
  modified_at: null,
  user_channels: [],
  following_channels: [],
};

export default function user(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_LIGHT_THEME:
      return { ...state, userTheme: payload };
    case SET_DARK_THEME:
      return { ...state, userTheme: payload };
    case SET_USER:
      payload.user["userTheme"] = payload.user["bg_theme"];
      delete payload.user["bg_theme"];
      return { ...state, ...payload.user };
    case SET_USER_CHANNELS:
      return { ...state, user_channels: payload.channels };
    case SET_FOLLOWING_CHANNELS:
      return { ...state, following_channels: payload.channels };
    default:
      return state;
  }
}
