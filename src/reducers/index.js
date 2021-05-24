import { combineReducers } from "redux";
//
import alert from "./alert";
import user from "./user";
import currentVideo from "./currentVideo";
import recmVideo from "./recmVideo";
import likes from "./likes";
import channel from "./channel";

export default combineReducers({
  alert,
  user,
  currentVideo,
  recmVideo,
  likes,
  channel,
});
