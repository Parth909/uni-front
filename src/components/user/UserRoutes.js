import React from "react";

const VideoChannels = React.lazy(() =>
  import("./view/videoChannel/VideoChannels")
);

const Channel = React.lazy(() => import("./view/singleVidChnl/Channel"));

const userRoutes = [
  {
    exact: true,
    path: "/user/:userId/videos/view/:section",
    component: (props) => <VideoChannels {...props} />,
  },
  {
    exact: true,
    path: "/user/:userId/videos/view/chnl/:channelId/:section",
    component: (props) => <Channel {...props} />,
  },
  // use *component* don't use *render*
];

export default userRoutes;
