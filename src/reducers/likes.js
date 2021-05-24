import {
  SET_USER_VID_LIKES,
  SET_USER_VID_DISLIKES,
  ADD_VID_LIKE,
  REMOVE_VID_LIKE,
} from "../actions/types";

const initialState = {
  vidlikes: [],
  viddislikes: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_USER_VID_LIKES:
      return { ...state, vidlikes: payload.vidlikes };
    case SET_USER_VID_DISLIKES:
      return { ...state, viddislikes: payload.viddislikes };
    default:
      return state;
  }
}
