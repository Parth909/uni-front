import axios from "axios";
import store from "../store";
import { updateVideoLikes, updateVideoDisLikes } from "./currentVideo";
import { SET_USER_VID_LIKES, SET_USER_VID_DISLIKES } from "./types";

export const setUserVidLikes = (userid) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/video/get-user-vid-likes/${userid}`);

    localStorage.setItem(
      "____vtube_vidlikes___",
      JSON.stringify(res.data.vidlikes)
    );

    dispatch({
      type: SET_USER_VID_LIKES,
      payload: { vidlikes: res.data.vidlikes },
    });
  } catch (error) {}
};

//____________

export const setUserVidDisLikes = (userid) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/video/get-user-vid-dislikes/${userid}`);

    localStorage.setItem(
      "____vtube_viddislikes___",
      JSON.stringify(res.data.viddislikes)
    );

    dispatch({
      type: SET_USER_VID_DISLIKES,
      payload: { viddislikes: res.data.viddislikes },
    });
  } catch (error) {}
};

// ####################
export const AddRmvVideoLike = (userid, videoid) => async (dispatch) => {
  const data = {
    userid: userid,
    videoid: videoid,
  };
  const res = await axios.patch("/api/video/add-rmv-vidlike", data);

  let key = res.data.success.split(" ")[0];

  const likes = await axios.get(`/api/video/get-user-vid-likes/${userid}`);

  const dislikes = await axios.get(
    `/api/video/get-user-vid-dislikes/${userid}`
  );

  dispatch({
    type: SET_USER_VID_LIKES,
    payload: { vidlikes: likes.data.vidlikes },
  });

  dispatch({
    type: SET_USER_VID_DISLIKES,
    payload: { viddislikes: dislikes.data.viddislikes },
  });

  store.dispatch(updateVideoLikes(userid, key));
};

export const AddRmvVideoDislike = (userid, videoid) => async (dispatch) => {
  const data = {
    userid: userid,
    videoid: videoid,
  };
  const res = await axios.patch("/api/video/add-rmv-viddislike", data);

  let key = res.data.success.split(" ")[0];

  const likes = await axios.get(`/api/video/get-user-vid-likes/${userid}`);

  const dislikes = await axios.get(
    `/api/video/get-user-vid-dislikes/${userid}`
  );

  dispatch({
    type: SET_USER_VID_LIKES,
    payload: { vidlikes: likes.data.vidlikes },
  });

  dispatch({
    type: SET_USER_VID_DISLIKES,
    payload: { viddislikes: dislikes.data.viddislikes },
  });

  store.dispatch(updateVideoDisLikes(userid, key));
};
