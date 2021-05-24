import {
  SET_CURRENT_VIDEO,
  SET_CURRENT_VIDEO_ERROR,
  INCR_VIDEO_COUNT,
  UPDATE_VIDEO_LIKES,
  UPDATE_VIDEO_DISLIKES,
} from "./types";
import axios from "axios";
import store from "../store";
import moment from "moment";

export const setCurrentVideo = (videoid) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/video/get-video/${videoid}`);

    dispatch({
      type: SET_CURRENT_VIDEO,
      payload: { data: res.data, success: "Video Obtained successfully" },
    });
  } catch (error) {
    dispatch({
      type: SET_CURRENT_VIDEO_ERROR,
      payload: { error: "Can't load the video" },
    });
  }
};

export const incrVideoViews = (videoid) => async (dispatch) => {
  try {
    const res = await axios.patch("/api/video/incr-video-views", {
      videoid: videoid,
    });

    dispatch({
      type: INCR_VIDEO_COUNT,
      payload: { views: res.data.views },
    });
  } catch (error) {
    console.log("Video views can't be incremented");
  }
};

export const getRecommendedVideos = (userid) => async (dispatch) => {
  try {
    const res = await axios.post("/api/video/get-recm-videos", {
      userid: userid,
    });

    console.log(res.data);
  } catch (error) {}
};

export const updateVideoLikes = (userid, key) => async (dispatch) => {
  dispatch({
    type: UPDATE_VIDEO_LIKES,
    payload: { userid, key },
  });
};

export const updateVideoDisLikes = (userid, key) => async (dispatch) => {
  dispatch({
    type: UPDATE_VIDEO_DISLIKES,
    payload: { userid, key },
  });
};
