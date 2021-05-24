import React from "react";
import { connect } from "react-redux";
import RecmVideoEle from "./RecmVideoEle";
import { setRecmVideos } from "../../../actions/recmVideo";
import { Link } from "react-router-dom";

const Recms = ({ userid, current_video_id, recms, setRecmVideos }) => {
  React.useEffect(() => {
    setRecmVideos(userid, current_video_id);
  }, [current_video_id]);

  return (
    <>
      <div className="row mt-1">
        {recms.videos.map((video, i) => (
          <div key={i} className="mx-auto">
            <a href={`/video/${video._id}`}>
              <RecmVideoEle
                thumbnail={video.thumb_url}
                channelPic={video.owner.channel_pic_url}
                channelName={video.owner.title}
                title={video.title}
                views={video.views}
                postTime={video.created_at}
              />
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  recms: state.recmVideo,
});

export default connect(mapStateToProps, { setRecmVideos })(Recms);
