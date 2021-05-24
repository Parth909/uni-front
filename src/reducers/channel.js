import {
  SET_VIDEO_CHANNEL,
  FOLL_UNFOLLOW_CHANNEL,
  SET_CHANNEL_HOME_VIDEOS,
  SET_FEATURED_CHANNELS,
} from "../actions/types";

const initialState = {
  // not setting arrays or objects to null so that the methods in react-components might be valid
  _id: null,
  title: null,
  description: null,
  channel_pic_url: null,
  channel_pic_key: null,
  channel_banner_url: null,
  channel_banner_key: null,
  created_at: null,
  modified_at: null,
  owned_by: null,
  followers: [],
  categories: [],
  other_links: [],
  featured_channels: [],
  channel_videos: [],
};

export default function channel(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_VIDEO_CHANNEL:
      return { ...state, ...payload.channel };
    case FOLL_UNFOLLOW_CHANNEL:
      // following, unfollowed keywords
      if (payload.msg.includes("following")) {
        return { ...state, followers: [...state.followers, payload.userid] };
      }

      if (payload.msg.includes("unfollowed")) {
        return {
          ...state,
          followers:
            state.followers.length > 0
              ? state.followers.filter((userid) => userid !== payload.userid)
              : [],
        };
      }
    case SET_CHANNEL_HOME_VIDEOS:
      return { ...state, channel_videos: [...payload.channel_videos] };
    case SET_FEATURED_CHANNELS:
      return { ...state, featured_channels: [...payload.featured_channels] };
    default:
      return state;
  }
}
