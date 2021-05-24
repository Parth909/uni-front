import {
  SET_CURRENT_VIDEO,
  SET_CURRENT_VIDEO_ERROR,
  INCR_VIDEO_COUNT,
  UPDATE_VIDEO_LIKES,
  UPDATE_VIDEO_DISLIKES,
} from "../actions/types";

const initialState = {
  // not setting arrays or objects to null so that the methods in react-components might be valid
  comments: [],
  comments_sortby: null,
  created_at: null,
  description: null,
  dislikes: [],
  likes: [], // userids
  modified_at: null,
  owner: {},
  shares: [],
  tags: [],
  thumb_key: null,
  thumb_url: null,
  title: null,
  uploaded_by: [],
  video_key: null, // temporary
  video_url: null, // temporary
  video_visibility: null,
  views: 0,
  _id: null,
  error: null,
  success: null,
};

export default function currentVideo(state = initialState, action) {
  // dispatched object will be in action
  const { type, payload } = action;

  switch (type) {
    case SET_CURRENT_VIDEO:
      return { ...state, ...payload.data, success: payload.success };
    case SET_CURRENT_VIDEO_ERROR:
      return { ...initialState, error: payload.error };
    case INCR_VIDEO_COUNT:
      return { ...state, views: payload.views };
    case UPDATE_VIDEO_LIKES:
      // for addition or removal userid should not be present in dislikes
      console.log(payload.key, payload.userid);

      if (payload.key === "added") {
        return {
          ...state,
          likes: [...state.likes, payload.userid],
          dislikes:
            state.dislikes.length > 0
              ? state.dislikes.filter((userid) => userid !== payload.userid)
              : [],
        };
      }
      if (payload.key === "removed") {
        return {
          ...state,
          likes:
            state.likes.length > 0
              ? state.likes.filter((userid) => userid !== payload.userid)
              : [],
          dislikes:
            state.dislikes.length > 0
              ? state.dislikes.filter((userid) => userid !== payload.userid)
              : [],
        };
      }
    case UPDATE_VIDEO_DISLIKES:
      // for addition or removal userid should not be present in likes
      if (payload.key === "added") {
        return {
          ...state,
          dislikes: [...state.dislikes, payload.userid],
          likes:
            state.likes.length > 0
              ? state.likes.filter((userid) => userid !== payload.userid)
              : [],
        };
      }
      if (payload.key === "removed") {
        return {
          ...state,
          dislikes:
            state.dislikes.length > 0
              ? state.dislikes.filter((userid) => userid !== payload.userid)
              : [],
          likes:
            state.likes.length > 0
              ? state.likes.filter((userid) => userid !== payload.userid)
              : [],
        };
      }
    default:
      return state;
  }
}
