import React from "react";
import { Route } from "react-router-dom";
import VideoHome from "../videohome/VideoHome";

const Single = React.lazy(() => import("./play/Single"));
const Playlist = React.lazy(() => import("./playlist/Playlist"));
const VideoUpload = React.lazy(() => import("./upload/VideoUpload"));

const videoRoutes = [
  { path: "/videos", component: (props) => <VideoHome {...props} /> },
  { path: "/video-upload", component: (props) => <VideoUpload {...props} /> },
  { path: "/video/:videoId", component: (props) => <Single {...props} /> },
  {
    path: "/video/playlist/:playlistId",
    component: (props) => <Playlist {...props} />,
  },
];

export default videoRoutes;
