import React from "react";
import HOBL from "../layout/HOBL";
import HomeVideoEle from "./HomeVideoEle";
import { connect } from "react-redux";
import iceland from "../../img/iceland.PNG";
// import thumb from "../../img/ration169.jpg";
// import thumb from "../../img/wide-test.jpg";
// import thumb from "../../img/ratio169_2.jpg";
import thumb from "../../img/ratio916.jpg";
import { Link } from "react-router-dom";
import axios from "axios";

// actions
import { setUserData } from "../../actions/user";
import { setUserVidLikes } from "../../actions/likes";

const VideoHome = ({ setUserData, setUserVidLikes }) => {
  const [videoli, setVideoli] = React.useState([]);

  React.useEffect(() => {
    setUserData("4c948705-6036-4135-ba9f-0f5843ba3f92");
    loadvideos();
    setUserVidLikes("4c948705-6036-4135-ba9f-0f5843ba3f92");
  }, []);

  const loadvideos = async () => {
    const data = {
      userid: "4c948705-6036-4135-ba9f-0f5843ba3f92",
    };
    const videolist = await axios.post("/api/video/get-user-videos", data);
    setVideoli(videolist.data);
  };

  return (
    videoli && (
      <div className="row home-video-grid">
        {videoli.map((video, i) => (
          <div className="col-xl-3 col-lg-4 col-md-6 col-12" key={i}>
            <Link to={`/video/${video._id}`}>
              <HomeVideoEle
                thumbnail={video.thumb_url}
                channelPic={video.channel_pic_url}
                channelName={video.channel_title}
                title={video.title}
                views={video.views}
                postTime={video.created_at}
              />
            </Link>
          </div>
        ))}
      </div>
    )
  );
};

export default HOBL()(
  connect(null, { setUserData, setUserVidLikes })(VideoHome)
);
