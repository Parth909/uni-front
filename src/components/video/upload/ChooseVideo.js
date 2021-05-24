import React from "react";

import upImg from "../../../img/upload_vid_pg_white.svg";
import Dropzone from "./Dropzone";

const ChooseVideo = ({ states }) => {
  return (
    <div>
      <div className="upload-video-content">
        <p className="video-upload-head p-2 m-2">Upload Video</p>
        <div className="row">
          <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
            <Dropzone {...states} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseVideo;
