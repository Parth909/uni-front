import React from "react";
import { connect } from "react-redux";
import HOBL from "../../layout/HOBL";
import { useParams, Link } from "react-router-dom";
import Player from "../player/Player";
import useTagColorGen from "../../../hooks/useTagColorGen";
import Description from "./Description";
import Comments from "./Comments";
import Recms from "./Recms";
import moment from "moment";
// Sample Images
import growth from "../../../samplesimgs/growth.jpg";
import chlpic from "../../../samplesimgs/channelpic.jpg";

// Icons
import Like from "../../icons/Like";
import Dislike from "../../icons/Dislike";
import Liked from "../../icons/Liked";
import Disliked from "../../icons/Disliked";
import Hellip from "../../icons/Hellipsis";
import Share from "../../icons/Share";
import AddPlaylist from "../../icons/AddPlaylist";
import Support from "../../icons/Support";
import Report from "../../icons/Report";

// actions
import { incrVideoViews, setCurrentVideo } from "../../../actions/currentVideo";
import { blindUserUpdate } from "../../../actions/user";
import {
  setUserVidLikes,
  setUserVidDisLikes,
  AddRmvVideoLike,
  AddRmvVideoDislike,
} from "../../../actions/likes";
import { setVideoChannel } from "../../../actions/channel";
import { setAlert } from "../../../actions/alert";

// utils
import humanize from "../../../utils/humanize";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Single = ({
  user: { userTheme, _id },
  setCurrentVideo,
  blindUserUpdate,
  incrVideoViews,
  AddRmvVideoLike,
  AddRmvVideoDislike,
  setUserVidLikes,
  setUserVidDisLikes,
  video,
  likes: { vidlikes, viddislikes },
  setAlert,
  setVideoChannel,
}) => {
  let { videoId } = useParams();
  const colors = useTagColorGen();
  const [vStatsVis, setVStatsVis] = React.useState("Hide");
  const [comsVis, setComsVis] = React.useState(false);
  const [thm, setThm] = React.useState(null);
  const [videoData, setVideoData] = React.useState(null);
  const [url, setUrl] = React.useState({
    text: null,
    copied: false,
  });
  const [playerData, setPlayerData] = React.useState(null);

  const toggleVStats = (e) => {
    e.preventDefault();
    if (vStatsVis === "Show") setVStatsVis("Hide");
    if (vStatsVis === "Hide") setVStatsVis("Show");
  };

  React.useEffect(() => {
    setUrl({ ...url, text: window.location.href });
    setPlayerData({ video_url: video.video_url, thumb_url: video.thumb_url });
    setVideoData(video);
  }, [video]);

  React.useEffect(() => {
    if (_id === null) return;
    setUserVidLikes(_id);
    setUserVidDisLikes(_id);
  }, [_id]);

  React.useEffect(() => {
    if (video.owner._id) {
      setVideoChannel(video.owner._id);
    }
  }, [video.owner._id]);

  React.useEffect(() => {
    // on change in videoId => scroll to top fetch recms, and the actual video, & other data
    blindUserUpdate();
    setCurrentVideo(videoId);
    incrVideoViews(videoId);

    console.log("__________videoid________", videoId);
    setThm(userTheme);
  }, [userTheme, videoId]);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [videoId]);

  return (
    _id &&
    videoData &&
    colors.length > 0 && (
      <div>
        {/* Safari & Chrome support Autoplay if the video is Muted */}
        <div className="row">
          <div className="col-12 col-lg-8 mt-2 pl-lg-3 pr-lg-0 px-0">
            {videoData.video_url && <Player videoData={playerData} />}
            <div className="single-video-info mt-2 px-lg-4 px-2">
              <div className="single-video-title mt-1 ">{videoData.title}</div>
              <div className="mt-2 row ">
                <div className="col-12 col-md-6 text-left single-video-views">
                  {videoData.views === 1
                    ? `${videoData.views} view`
                    : `${videoData.views} views`}
                </div>
                <div className="col-12 col-md-6 text-left text-md-right single-video-upload px-md-4">
                  Uploaded On -{" "}
                  {moment(videoData.created_at).format("MMM D, YYYY")}
                </div>
              </div>
              <div className="single-video-optns mt-1 p-0">
                <div className="row">
                  <div className="col-4 col-md-3 text-center">
                    {vidlikes.includes(videoId) ? (
                      <div
                        className="d-inline pointer"
                        onClick={() => AddRmvVideoLike(_id, videoId)}
                      >
                        <div className="d-inline px-1">
                          <Liked thm={thm} className="single-video-opt-icon" />
                        </div>
                        <div className="d-inline px-1 single-video-opt-name">
                          {humanize(videoData.likes.length)}
                        </div>
                      </div>
                    ) : (
                      <div
                        className="d-inline pointer"
                        onClick={() => AddRmvVideoLike(_id, videoId)}
                      >
                        <div className="d-inline px-1">
                          <Like thm={thm} className="single-video-opt-icon" />
                        </div>
                        <div className="d-inline px-1 single-video-opt-name">
                          {humanize(videoData.likes.length)}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="col-4 col-md-3 text-center">
                    {viddislikes.includes(videoId) ? (
                      <div
                        className="d-inline pointer"
                        onClick={() => AddRmvVideoDislike(_id, videoId)}
                      >
                        <div className="d-inline px-1">
                          <Disliked
                            thm={thm}
                            className="single-video-opt-icon"
                          />
                        </div>
                        <div className="d-inline px-1 single-video-opt-name">
                          {humanize(videoData.dislikes.length)}
                        </div>
                      </div>
                    ) : (
                      <div
                        className="d-inline pointer"
                        onClick={() => AddRmvVideoDislike(_id, videoId)}
                      >
                        <div className="d-inline px-1">
                          <Dislike
                            thm={thm}
                            className="single-video-opt-icon"
                          />
                        </div>
                        <div className="d-inline px-1 single-video-opt-name">
                          {humanize(videoData.dislikes.length)}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="d-none d-md-block col-md-3 text-center">
                    <CopyToClipboard
                      text={url.text}
                      onCopy={() => setUrl({ ...url, copied: true })}
                    >
                      <div
                        className="d-inline pointer"
                        onClick={() =>
                          setAlert("Link copied to clipboard", "uni-blue", 5000)
                        }
                      >
                        <div className="d-inline px-1">
                          <Share thm={thm} className="single-video-opt-icon" />
                        </div>
                        <div className="d-inline px-1 single-video-opt-name">
                          Share
                        </div>
                      </div>
                    </CopyToClipboard>
                  </div>

                  <div className="col-4 col-md-3 text-center">
                    <div className="btn-group dropleft">
                      <div
                        className="dropdown-toggle"
                        type="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <Hellip thm={thm} className="single-video-opt-icon" />
                      </div>
                      <div
                        className="dropdown-menu single-video-optns-dropdn"
                        style={{ zIndex: "1030" }}
                      >
                        <Link
                          className="dropdown-item d-block d-md-none"
                          to="/videos"
                        >
                          <div className="d-inline">
                            <Share
                              thm={thm}
                              className="single-video-more-opt-icon"
                            />
                          </div>
                          <div className="d-inline pl-3 single-video-more-opt-name">
                            Share
                          </div>
                        </Link>
                        <hr className="v-optns-hr p-0 m-0 d-block d-md-none" />

                        <span
                          className="dropdown-item pointer"
                          onClick={() =>
                            setAlert("Feature Coming Soon", "uni-blue")
                          }
                        >
                          <div className="d-inline">
                            <Support
                              thm={thm}
                              className="single-video-more-opt-icon"
                            />
                          </div>
                          <div className="d-inline pl-3 single-video-more-opt-name">
                            Support
                          </div>
                        </span>
                        <hr className="v-optns-hr p-0 m-0" />
                        <span
                          className="dropdown-item pointer"
                          onClick={() =>
                            setAlert("Feature Coming Soon", "uni-blue")
                          }
                        >
                          <div className="d-inline">
                            <AddPlaylist
                              thm={thm}
                              className="single-video-more-opt-icon"
                            />
                          </div>
                          <div className="d-inline pl-3 single-video-more-opt-name">
                            Playlist
                          </div>
                        </span>
                        <hr className="v-optns-hr p-0 m-0" />
                        <span
                          className="dropdown-item pointer"
                          onClick={() =>
                            setAlert("Feature Coming Soon", "uni-blue")
                          }
                        >
                          <div className="d-inline">
                            <Report
                              thm={thm}
                              className="single-video-more-opt-icon"
                            />
                          </div>
                          <div className="d-inline pl-3 single-video-more-opt-name">
                            Report
                          </div>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* channel desc and name */}
            <hr />
            <div>
              <div className="channel-desc-name d-block">
                <Description
                  userid={_id}
                  channelid={videoData.owner._id}
                  channelName={videoData.owner.title}
                  channelIcon={videoData.owner.channel_pic_url}
                  followers={videoData.owner.followers}
                  description={videoData.description}
                />
              </div>
              <br />
              <hr />
              <div className="comments-section">
                <Comments thm={thm} comsVis={comsVis} setComsVis={setComsVis} />
              </div>
            </div>
          </div>
          <div className="col-lg-4 mt-4 px-lg-3 px-1">
            <div className="video-stats">
              <div className="card video-stats-card rounded-lg">
                <div className="card-header video-stats-header text-monospace sticky-top sticky-left p-2">
                  <div className="p-0 mx-1 video-stats-name d-flex justify-content-between">
                    Video Stats & Info - {/*  */}
                    <div
                      type="button"
                      className=" py-0 px-1 rounded-lg vid-optns-show-hide-btn"
                      onClick={(e) => toggleVStats(e)}
                    >
                      {vStatsVis === "Hide" ? "Show" : "Hide"}
                    </div>
                  </div>
                  <span className="video-stats-update-date px-2 rounded-lg">
                    Updated on 2/4/21 [Monthly]
                  </span>
                </div>
                <div
                  className={`card-body rounded-lg ${
                    vStatsVis === "Hide" ? "d-none" : ""
                  }`}
                >
                  <div className="d-block pointer mb-2">
                    <span className="video-stats-LHS">Tags : </span>
                    <div>
                      {/* whitespace: nowrap to prevent word-breaking */}
                      {videoData.tags.length > 0 &&
                        videoData.tags.map((tag, i) => (
                          <Link to="/" key={i}>
                            <div
                              key={i}
                              className={`d-inline px-2 mr-2 rounded-lg video-stats-tag`}
                              style={{
                                ...colors[i % colors.length],
                                whiteSpace: "nowrap",
                                color: `${colors[i % colors.length].color}`,
                              }}
                              title={tag.name}
                            >
                              {tag.name}
                            </div>
                          </Link>
                        ))}
                    </div>
                  </div>
                  <div
                    className="d-block pointer mb-2"
                    title="Video Rank is Top 0.1911% this month"
                  >
                    <span className="video-stats-LHS">Video Rank : </span>
                    <span className="video-stats-RHS">
                      {" "}
                      Top 0.1911 % this month
                    </span>
                  </div>
                  <div
                    className="d-block pointer mb-2"
                    title="Growth is 20% this month"
                  >
                    <div>
                      <span className="video-stats-LHS"> Growth Rate : </span>
                      <span className="video-stats-RHS"> 20.9999 %</span>
                    </div>

                    <div className="d-block">
                      <img src={growth} alt=".." />
                    </div>
                  </div>
                  <div
                    className="d-block pointer mb-1"
                    title="Growth is 20% this month"
                  >
                    <div>
                      <span className="video-stats-LHS"> Views : </span>
                      <span className="video-stats-RHS">
                        {" "}
                        20.7989 % Increase
                      </span>
                    </div>

                    <div className="d-block">
                      <img src={growth} style={{ height: "auto" }} alt=".." />
                    </div>
                  </div>
                  <div
                    className="d-block pointer mb-1"
                    title="Growth is 20% this month"
                  >
                    <div>
                      <span className="video-stats-LHS"> Likes : </span>
                      <span className="video-stats-RHS">
                        {" "}
                        41.1199 % Increase
                      </span>
                    </div>

                    <div className="d-block">
                      <img src={growth} alt=".." />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="vid-recommendations">
              <Recms
                current_video_id={videoId}
                userid="950ec502-9a36-418a-8db4-f71725c1f52c"
              />
            </div>
          </div>
        </div>
        <hr />

        <div className="row mt-4">
          {/* <div>
            <div className="col-12 col-lg-8 px-lg-4">
              <div className="channel-desc-name d-block">
                <Description
                  channelName="Gravity Music & Secession Studios "
                  channelIcon={chlpic}
                  followers="20M"
                  description={desc}
                />
              </div>
              <br />
              <hr />
              <div className="comments-section">
                <Comments />
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="vid-recms-section"></div>
            </div>
          </div> */}
        </div>
      </div>
    )
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
  video: state.currentVideo,
  likes: state.likes,
});

export default HOBL()(
  connect(mapStateToProps, {
    setCurrentVideo,
    blindUserUpdate,
    incrVideoViews,
    AddRmvVideoLike,
    AddRmvVideoDislike,
    setUserVidLikes,
    setUserVidDisLikes,
    setAlert,
    setVideoChannel,
  })(Single)
);
