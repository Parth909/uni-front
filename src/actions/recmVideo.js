import axios from "axios";
import { SET_RECM_VIDEO, SET_RECM_VIDEO_ERROR } from "./types";

export const setRecmVideos = (userid, videoid) => async (dispatch) => {
  try {
    let data = {
      userid: userid,
      current_video_id: videoid,
    };

    const res = await axios.post("/api/video/get-recm-videos", data);
    console.log(res.data);

    if (res.data.videos.length > 0) {
      dispatch({
        type: SET_RECM_VIDEO,
        payload: { videos: res.data.videos, success: "Recommendations loaded" },
      });
    }
  } catch (error) {
    dispatch({
      type: SET_RECM_VIDEO_ERROR,
      payload: { error: "Recommendations can't be loaded" },
    });
  }
};
