import React, { useState, useRef } from "react";
import HOBL from "../../layout/HOBL";
import useUnload from "../../../hooks/useUnload";
// sections
import ChooseVideo from "./ChooseVideo";
import VidDetails from "./VidDetails";
import VidState from "./VidState";
import MoreInfo from "./MoreInfo";

const VidUpload = () => {
  // Dropzone States
  const fileInputRef = useRef();
  const modalImageRef = useRef();
  const modalRef = useRef();
  const progressRef = useRef();
  const uploadRef = useRef();
  const uploadModalRef = useRef();
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [validFiles, setValidFiles] = useState([]);
  const [unsupportedFiles, setUnsupportedFiles] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  // -----------------D S end

  const [upSection, setUpSection] = React.useState({
    upload: {
      complete: false,
      seen: true,
    },
    details: {
      complete: false,
      seen: false,
    },
    video_state: {
      complete: false,
      seen: false,
    },
    more_info: {
      complete: false,
      seen: false,
    },
  });
  // upload, details, video_state, more_info
  const [secPg, setSecPg] = React.useState("upload");

  const { upload, details, video_state, more_info } = upSection;

  useUnload((e) => {
    e.preventDefault();
    e.returnValue = "";
  });

  const setSeen = (e, name, obj) => {
    e.preventDefault();
    setUpSection({ ...upSection, [name]: { ...obj, seen: true } });
    setSecPg(name);
  };

  return (
    <div>
      <div className="row">
        <div className="col-12">
          <ol className="track-vid-upload-progress">
            <li
              className={`vid-upload-step ${
                upload.complete
                  ? "vid-step-done"
                  : upload.seen
                  ? "vid-step-incomplete"
                  : "vid-step-todo"
              } pointer`}
              onClick={(e) => setSeen(e, "upload", upload)}
            >
              <b className="vid-upload-stepno">1</b>
              <span className="video-step-title">Upload</span>
            </li>
            <li
              className={`vid-upload-step ${
                details.complete
                  ? "vid-step-done"
                  : details.seen
                  ? "vid-step-incomplete"
                  : "vid-step-todo"
              } pointer`}
              onClick={(e) => setSeen(e, "details", details)}
            >
              <b className="vid-upload-stepno">2</b>
              <span className="video-step-title">Details</span>
            </li>
            <li
              className={`vid-upload-step ${
                video_state.complete
                  ? "vid-step-done"
                  : video_state.seen
                  ? "vid-step-incomplete"
                  : "vid-step-todo"
              } pointer`}
              onClick={(e) => setSeen(e, "video_state", video_state)}
            >
              <b className="vid-upload-stepno">3</b>
              <span className="video-step-title">Video State</span>
            </li>
            <li
              className={`vid-upload-step ${
                more_info.complete
                  ? "vid-step-done"
                  : more_info.seen
                  ? "vid-step-incomplete"
                  : "vid-step-todo"
              } pointer`}
              onClick={(e) => setSeen(e, "more_info", more_info)}
            >
              <b className="vid-upload-stepno">4</b>
              <span className="video-step-title">More Info</span>
            </li>
          </ol>
        </div>
      </div>
      <div className="upload-video-section">
        {secPg === "upload" && (
          <ChooseVideo
            states={{
              fileInputRef,
              modalImageRef,
              modalRef,
              progressRef,
              uploadRef,
              uploadModalRef,
              selectedFiles,
              setSelectedFiles,
              validFiles,
              setValidFiles,
              unsupportedFiles,
              setUnsupportedFiles,
              errorMessage,
              setErrorMessage,
            }}
          />
        )}
        {secPg === "details" && <VidDetails />}
        {secPg === "video_state" && <VidState />}
        {secPg === "more_info" && <MoreInfo />}
      </div>
    </div>
  );
};

export default HOBL()(VidUpload);
