import { SET_RECM_VIDEO, SET_RECM_VIDEO_ERROR } from "../actions/types";

const initialState = {
  videos: [],
  success: null,
  error: null,
};

export default function recmVideo(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_RECM_VIDEO:
      return {
        ...state,
        videos: payload.videos,
        success: payload.success,
        error: "",
      };
    case SET_RECM_VIDEO_ERROR:
      return { ...state, videos: [], success: "", error: payload.error };
    default:
      return state;
  }
}
