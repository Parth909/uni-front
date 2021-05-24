import axios from "axios";
import {
  SET_LIGHT_THEME,
  SET_DARK_THEME,
  SET_USER,
  SET_USER_CHANNELS,
  SET_FOLLOWING_CHANNELS,
} from "./types";

export const setUserTheme = (theme) => (dispatch) => {
  switch (theme) {
    case "light":
      document.body.setAttribute("data-theme", "light");
      localStorage.setItem("__UniUserTheme__", "light");
      dispatch({
        type: SET_LIGHT_THEME,
        payload: "light",
      });
      break;
    case "dark":
      document.body.setAttribute("data-theme", "dark");
      localStorage.setItem("__UniUserTheme__", "dark");
      dispatch({
        type: SET_DARK_THEME,
        payload: "dark",
      });
      break;
    default:
      document.body.setAttribute("data-theme", "light");
      localStorage.setItem("__UniUserTheme__", "light");
      dispatch({
        type: SET_LIGHT_THEME,
        payload: "light",
      });
      break;
  }
};

export const setUserData = (userid) => async (dispatch) => {
  const res = await axios.get(`/user/${userid}`);

  localStorage.setItem("____vtube_userdata___", JSON.stringify(res.data.user));

  console.log(res.data);
  dispatch({
    type: SET_USER,
    payload: { user: res.data.user },
  });
};

export const blindUserUpdate =
  (userid = "4c948705-6036-4135-ba9f-0f5843ba3f92") =>
  (dispatch) => {
    const user = localStorage.getItem("____vtube_userdata___");
    if (user !== null) {
      dispatch({
        type: SET_USER,
        payload: { user: JSON.parse(user) },
      });
    } else {
      setUserData(userid);
    }
  };

// ___________DO SAME AS LIKES FOR USER AS WELL STORE IN LOCALSTORAGE

export const setUserChannels = (userid) => async (dispatch) => {
  try {
    let data = {
      userid,
    };
    const res = await axios.post(`/channel/get-user-channels`, data);

    dispatch({
      type: SET_USER_CHANNELS,
      payload: { channels: res.data },
    });
  } catch (error) {}
};

export const setFollowingChannels = (userid) => async (dispatch) => {
  try {
    let data = {
      userid,
    };
    const res = await axios.post(`/channel/get-following-channels`, data);

    dispatch({
      type: SET_FOLLOWING_CHANNELS,
      payload: { channels: res.data },
    });
  } catch (error) {}
};
