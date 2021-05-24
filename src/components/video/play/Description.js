import React from "react";
import { connect } from "react-redux";
import { follUnfollChannel } from "../../../actions/channel";
import { Link } from "react-router-dom";

const Description = ({
  channelName,
  channelIcon,
  description,
  follUnfollChannel,
  userid,
  channelid,
  channel: { followers },
}) => {
  return (
    followers && (
      <div className="d-block">
        <div className="px-3 px-md-3">
          <div className="row justify-content-between align-items-center">
            <div className="col-xs-7 col-9 text-left overflow-dots">
              <Link to={`/user/${userid}/videos/view/chnl/${channelid}/home`}>
                <img
                  src={channelIcon}
                  className="single-vid-channel-pic pointer"
                />
              </Link>
              <span className="single-vid-channel-name ml-2 ml-md-3">
                {channelName}
              </span>
            </div>
            <div className="col-xs-3 col-3 text-right">
              {followers.includes(userid) ? (
                <button
                  className="btn btn-custom-blue-1 follow-channel-btn px-2"
                  onClick={() => follUnfollChannel(userid, channelid)}
                >
                  Following
                </button>
              ) : (
                <button
                  className="btn btn-custom-blue-1 follow-channel-btn px-2"
                  onClick={() => follUnfollChannel(userid, channelid)}
                >
                  Follow
                </button>
              )}
            </div>
          </div>
          <div className="row px-3 px-md-3">
            <div className="wrap-video-desc-cont">
              <input id="ch" type="checkbox" />
              <label className="py-1" htmlFor="ch"></label>
              <div className="single-video-desc">{description}</div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

const mapStateToProps = (state) => ({
  channel: state.channel,
});

export default connect(mapStateToProps, { follUnfollChannel })(Description);
