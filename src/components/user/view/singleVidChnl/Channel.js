import React from "react";
import { connect } from "react-redux";
import { useParams, Link } from "react-router-dom";
import HOBL from "../../../layout/HOBL";
import fourtothree from "../../../../samplesimgs/4-3.jpg";

// sections
import ChannelHome from "./ChannelHome";
import ChannelPlaylists from "./ChannelPlaylists";
import ChannelFeatured from "./ChannelFeatured";
import ChannelAbout from "./ChannelAbout";

// actions
import { setVideoChannel } from "../../../../actions/channel";

const Channel = ({ user: { userTheme }, channel, setVideoChannel }) => {
  const { userId, channelId, section } = useParams();
  const [sec, setSec] = React.useState("home");
  const [thm, setThm] = React.useState(null);

  React.useEffect(() => {
    setThm(userTheme);
  }, [channelId, userId, userTheme]);

  React.useEffect(() => {
    setSec(section);
  }, [section]);

  React.useEffect(() => {
    if (channelId) {
      setVideoChannel(channelId);
    }
  }, [channelId]);

  // home, playlists, posts, featured, network
  return (
    channel._id && (
      <div className="container-fluid p-0 m-0">
        <div className="row mt-2">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="vid-channel-cover-prof">
              <div className="vid-channel-cover-prof-wrapper">
                <div className="vid-ch-cover-img">
                  <img src={channel.channel_banner_url} />
                </div>
                <div className="vid-ch-img d-flex mx-auto">
                  <img src={channel.channel_pic_url} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-8">
            <div className="vid-chnl-pg-chnl-info">
              <div className="vid-chnl-pg-chnl-name text-ovfl-ellipsis">
                {channel.title}
              </div>
              <div className="vid-chnl-pg-chnl-followers text-ovfl-ellipsis">
                {channel.followers.length === 1
                  ? `${channel.followers.length} follower`
                  : `${channel.followers.length} followers`}
              </div>
              <div className="vid-chnl-pg-chnl-desc text-ovfl-ellipsis">
                {channel.description}
              </div>
              <div className="vid-chnl-pg-chnl-categories text-ovfl-ellipsis">
                {channel.categories.length > 0 &&
                  channel.categories.map((cat) => (
                    <span>{`#${cat.title}`} </span>
                  ))}
              </div>
              <div className="vid-chnl-pg-chnl-categories-link">
                <Link
                  to={`/user/${userId}/videos/view/chnl/${channelId}/about`}
                >
                  More Info
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="horizontal-menu pt-2">
            <Link to={`/user/${userId}/videos/view/chnl/${channelId}/home`}>
              <div className="horizontal-menu-item my-2 pointer">
                <div
                  className={` v-vid-section-name border-right-grey ${
                    sec === "home" ? "blue-highlight" : ""
                  }`}
                >
                  Home
                </div>
              </div>
            </Link>
            <Link
              to={`/user/${userId}/videos/view/chnl/${channelId}/playlists`}
            >
              <div className="horizontal-menu-item my-2 pointer">
                <div
                  className={` v-vid-section-name border-right-grey ${
                    sec === "playlists" ? "blue-highlight" : ""
                  }`}
                >
                  Playlists
                </div>
              </div>
            </Link>
            <Link to={`/user/${userId}/videos/view/chnl/${channelId}/posts`}>
              <div className="horizontal-menu-item my-2 pointer">
                <div
                  className={` v-vid-section-name border-right-grey ${
                    sec === "posts" ? "blue-highlight" : ""
                  }`}
                >
                  Posts(*)
                </div>
              </div>
            </Link>
            <Link to={`/user/${userId}/videos/view/chnl/${channelId}/featured`}>
              <div className="horizontal-menu-item my-2 pointer">
                <div
                  className={`v-vid-section-name border-right-grey ${
                    sec === "featured" ? "blue-highlight" : ""
                  }`}
                >
                  Featured
                </div>
              </div>
            </Link>
            <Link to={`/user/${userId}/videos/view/chnl/${channelId}/network`}>
              <div className="horizontal-menu-item my-2 pointer">
                <div
                  className={`v-vid-section-name border-right-grey ${
                    sec === "network" ? "blue-highlight" : ""
                  }`}
                >
                  Network(*)
                </div>
              </div>
            </Link>
            <Link to={`/user/${userId}/videos/view/chnl/${channelId}/about`}>
              <div className="horizontal-menu-item my-2 pointer">
                <div
                  className={`v-vid-section-name  ${
                    sec === "about" ? "blue-highlight" : ""
                  }`}
                >
                  About
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div>
          <div className="vid-channel-section">
            {sec === "home" && <ChannelHome thm={thm} />}
            {sec === "playlists" && <ChannelPlaylists thm={thm} />}
            {sec === "featured" && <ChannelFeatured thm={thm} />}
            {sec === "about" && <ChannelAbout thm={thm} />}
          </div>
        </div>
      </div>
    )
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
  channel: state.channel,
});

export default HOBL()(connect(mapStateToProps, { setVideoChannel })(Channel));
