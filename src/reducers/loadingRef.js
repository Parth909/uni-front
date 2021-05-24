import { SET_LOADING_REF } from "../actions/types";

const initialState = {
  ref: null,
};

export default function loadingRef(state = initialState, action) {
  const { type, ref } = action;

  switch (type) {
    case SET_LOADING_REF:
      return { ref };
    default:
      return state;
  }
}
