import moment from "moment";
import React from "react";

const HomeVideoEle = ({
  thumbnail,
  channelPic,
  channelName,
  title,
  views,
  postTime,
}) => {
  return (
    <div className="home-video-element mt-4">
      <div className="h-video-thumbnail">
        <img src={thumbnail} alt=".." />
      </div>
      <div className="row h-video-details mt-2">
        <div className="col-2 pt-1">
          <img
            src={channelPic}
            alt=".."
            className="h-video-channel-pic"
            // style={{ width: "45px", height: "45px", borderRadius: "50%" }}
          />
        </div>
        <div className="col-10">
          <div className="h-video-title pt-1 text-break">{title}</div>
          <div
            className="h-video-chnl-name overflow-dots"
            title={`${channelName}`}
          >
            <span className="">{channelName} </span>
            {/* {" ― #"}
            {Rank} */}
          </div>
          <div>
            <span className="h-video-views">
              {views === 1 ? `${views} view` : `${views} views`}
              {" - "}
            </span>
            <span className="h-video-posttime">
              {moment(postTime).fromNow()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeVideoEle;
