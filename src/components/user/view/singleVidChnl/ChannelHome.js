import React from "react";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";
import moment from "moment";
import astro from "../../../../img/astro.gif";

// actions
import { setChannelHomeVideos } from "../../../../actions/channel";

const ChannelHome = ({ channel_videos, setChannelHomeVideos }) => {
  const { channelId } = useParams();

  React.useEffect(() => {
    if (channelId) {
      setChannelHomeVideos(channelId);
    }
  }, [channelId]);

  return channel_videos && channel_videos.length > 0 ? (
    <div className="row home-video-grid">
      {channel_videos.map((channel, i) => (
        <div className="col-xl-3 col-lg-4 col-md-6 col-12" key={channel._id}>
          {/* anchors required for movies */}
          <a href={`/video/${channel._id}`}>
            <div className="home-video-element mt-4">
              <div className="h-video-thumbnail">
                <img src={channel.thumb_url} alt=".." />
              </div>
              <div className="row h-video-details mt-2">
                <div className="col-12">
                  <div className="h-video-title pt-1 text-break">
                    {channel.title}
                  </div>

                  <div>
                    <span className="h-video-views">
                      {`${channel.views} views`}
                      {" - "}
                    </span>
                    <span className="h-video-posttime">
                      {moment(channel.created_at).fromNow()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  ) : (
    <div className="d-block text-center">
      <img
        src={astro}
        style={{ height: "300px", width: "auto", borderRadius: "40%" }}
      />
      <h3>Uh-oh ! No Videos uploaded yet</h3>
    </div>
  );
};

const mapStateToProps = (state) => ({
  channel_videos: state.channel.channel_videos,
});

export default connect(mapStateToProps, { setChannelHomeVideos })(ChannelHome);

// import thumb from "../../img/ration169.jpg";
// import thumb from "../../img/wide-test.jpg";
// import thumb from "../../img/ratio169_2.jpg";
// import thumb from "../../../../samplesimgs/4-3.jpg";
