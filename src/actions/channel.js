import axios from "axios";
import {
  SET_VIDEO_CHANNEL,
  FOLL_UNFOLLOW_CHANNEL,
  SET_CHANNEL_HOME_VIDEOS,
  SET_FEATURED_CHANNELS,
} from "./types";
import store from "../store";

// actions
import { setAlert } from "./alert";

export const setVideoChannel = (channelid) => async (dispatch) => {
  try {
    const res = await axios.get(`/channel/get/${channelid}`);

    if (res.data) {
      dispatch({
        type: SET_VIDEO_CHANNEL,
        payload: { channel: res.data },
      });
    }
  } catch (error) {}
};

export const follUnfollChannel = (userid, channelid) => async (dispatch) => {
  try {
    const data = {
      userid,
      channelid,
    };

    const res = await axios.patch("/channel/foll-unfoll-channel", data);

    if (res.data.success) {
      dispatch({
        type: FOLL_UNFOLLOW_CHANNEL,
        payload: { userid, msg: res.data.success.split(" ") },
      });
    }
  } catch (error) {
    // console.error(Object.getOwnPropertyNames(error));
    store.dispatch(setAlert(error.response.data.error, "uni-danger", 5000));
  }
};

export const setChannelHomeVideos = (channelid) => async (dispatch) => {
  try {
    const data = {
      channelid,
    };
    const res = await axios.post(`/channel/get-channel-videos`, data);

    dispatch({
      type: SET_CHANNEL_HOME_VIDEOS,
      payload: { channel_videos: res.data },
    });
  } catch (error) {}
};

export const setFeaturedChannels = (channelid) => async (dispatch) => {
  try {
    const data = {
      channelid,
    };
    const res = await axios.post("/channel/get-featured-channels", data);

    dispatch({
      type: SET_FEATURED_CHANNELS,
      payload: { featured_channels: res.data },
    });
  } catch (error) {}
};
// export const set
