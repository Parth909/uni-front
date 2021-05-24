import React from "react";
import moment from "moment";

const RecmVideoEle = ({
  thumbnail,
  channelPic,
  channelName,
  title,
  views,
  postTime,
}) => {
  return (
    <div className="recm-video-element mt-4">
      <div className="recm-video-thumbnail">
        <img src={thumbnail} alt="..." />
      </div>
      <div className="row recm-video-details mt-2">
        <div className="col-2 pt-1 text-center">
          <img
            src={channelPic}
            alt=".."
            className="recm-video-channel-pic"
            // style={{ width: "45px", height: "45px", borderRadius: "50%" }}
          />
        </div>
        <div className="col-10">
          <div className="recm-video-title pt-1 text-break">{title}</div>
          <div
            className="recm-video-chnl-name overflow-dots"
            title={`${channelName}`}
          >
            <span className="">{channelName} </span>
          </div>
          <div>
            <span className="recm-video-views">
              {views}
              {" views - "}
            </span>
            <span className="recm-video-posttime">
              {moment(postTime).fromNow()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecmVideoEle;
