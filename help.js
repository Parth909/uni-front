import React from "react";
const help = () => {
  return (
    <div class="form-group">
      <label for="password">
        Password
        <a href="forgot.html" class="float-right">
          Forgot Password?
        </a>
      </label>
      <div style={{ position: "relative" }} id="eye-password-0">
        <input
          id="password"
          type="password"
          class="form-control"
          name="password"
          required=""
          data-eye=""
          style="padding-right: 60px;"
        />
        <div class="invalid-feedback">Password is required</div>
        <input type="hidden" id="passeye-0" />
        <div
          class="btn btn-primary btn-sm"
          id="passeye-toggle-0"
          style={{
            position: "absolute",
            right: "10px",
            top: "7px",
            padding: "2px 7px",
            fontSize: "12px",
            cursor: "pointer",
          }}
        />
        Show
      </div>
      <div>
        <div class="invalid-feedback">Password is required</div>
      </div>
    </div>
  );
};

// ---------------------------------------------------------------------------------

import React from "react";
import { Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import RegisterActivate from "./RegisterActivate";
import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword";

const AuthRoutes = (props) => {
  const [se, setSE] = React.useState({
    success: "",
    error: "",
  });

  // err - scroll
  const errorMsgsRef = React.useRef(null);

  const scrollToError = () => {
    errorMsgsRef.current?.scrollIntoView({
      behaviour: "smooth",
      block: "start",
    });
    removeUsrMsgs();
  };

  const removeUsrMsgs = () => {
    setTimeout(() => {
      setSE({ success: "", error: "" });
    }, 4000);
  };
  // err - scroll -

  return (
    <React.Fragment>
      <Route
        exact
        path="/login"
        render={(props) => (
          <Login
            {...props}
            se={se}
            setSE={setSE}
            errorMsgsRef={errorMsgsRef}
            scrollToError={scrollToError}
          />
        )}
      />

      <Route
        exact
        path="/register"
        render={(props) => (
          <Register
            {...props}
            se={se}
            setSE={setSE}
            errorMsgsRef={errorMsgsRef}
            scrollToError={scrollToError}
          />
        )}
      />
      <Route
        exact
        path="/register/activate/:token"
        render={(props) => (
          <RegisterActivate
            {...props}
            se={se}
            setSE={setSE}
            errorMsgsRef={errorMsgsRef}
            scrollToError={scrollToError}
          />
        )}
      />
      <Route
        exact
        path="/forgot-password"
        render={(props) => (
          <ForgotPassword
            {...props}
            se={se}
            setSE={setSE}
            errorMsgsRef={errorMsgsRef}
            scrollToError={scrollToError}
          />
        )}
      />
      <Route
        exact
        path="/reset-password/:token"
        render={(props) => (
          <ResetPassword
            {...props}
            se={se}
            setSE={setSE}
            errorMsgsRef={errorMsgsRef}
            scrollToError={scrollToError}
          />
        )}
      />
    </React.Fragment>
  );
};

export default AuthRoutes;

// ----------------------------------------------------
import React from "react";
import { Route } from "react-router-dom";

const Single = React.lazy(() => import("./play/Single"));
const Playlist = React.lazy(() => import("./playlist/Playlist"));
const Upload = React.lazy(() => import("./upload/Upload"));

const VideoRoutes = () => {
  return (
    <>
      <Route
        exact
        path="/video/playlist/:playlistId"
        render={(props) => <Playlist {...props} />}
      />
      <Route
        exact
        path="/video/upload"
        component={(props) => <Upload {...props} />}
      />
      <Route
        exact
        path="/video/:videoId"
        component={(props) => <Single {...props} />}
      />
    </>
  );
};

export default VideoRoutes;

// ------------------------------------ videohome.scss --------------------------------------------------------

// [data-theme="light"] .video-stats-card {
//   // hide scrollbar when not needed and don't leave empty space there when hidden
//   height: auto;
//   max-height: 78vh;
//   overflow-x: hidden;
//   overflow-y: auto;

//   .video-stats-header {
//     background-color: $light-black-light-grey-sh-7;
//   }
//   .video-stats-name {
//     font-size: 3vmin;
//   }
//   .video-stats-tag {
//     font-size: 2.4vmin;
//     background-color: white;
//   }
//   .video-stats-LHS {
//     font-size: 2.4vmin;
//     font-weight: 500;
//   }
//   .video-stats-RHS {
//     font-size: 2.4vmin;
//     font-weight: 500;
//     color: #f00000;
//   }
// }

// --------------------------------------- Dropzone.js ------------------------------------------------

// import React, { useRef, useState, useEffect } from "react";
// import axios from "axios";

// const Dropzone = () => {
//   const fileInputRef = useRef();
//   const modalImageRef = useRef();
//   const modalRef = useRef();
//   const progressRef = useRef();
//   const uploadRef = useRef();
//   const uploadModalRef = useRef();
//   const [selectedFiles, setSelectedFiles] = useState([]);
//   const [validFiles, setValidFiles] = useState([]);
//   const [unsupportedFiles, setUnsupportedFiles] = useState([]);
//   const [errorMessage, setErrorMessage] = useState("");

//   useEffect(() => {
//     // simply setting the validFiles state
//     let filteredArr = selectedFiles.reduce((acc, current) => {
//       const x = acc.find((item) => item.name === current.name);
//       if (!x) {
//         return acc.concat([current]);
//       } else {
//         return acc;
//       }
//     }, []);
//     // valid files also contain everything - used to map around & display data
//     setValidFiles([...filteredArr]);
//   }, [selectedFiles]);

//   React.useEffect(() => {
//     console.log("validfiles", validFiles);
//   }, [validFiles]);

//   const preventDefault = (e) => {
//     e.preventDefault();
//     // e.stopPropagation();
//   };

//   const dragOver = (e) => {
//     preventDefault(e);
//   };

//   const dragEnter = (e) => {
//     preventDefault(e);
//   };

//   const dragLeave = (e) => {
//     preventDefault(e);
//   };

//   const fileDrop = (e) => {
//     preventDefault(e);
//     const files = e.dataTransfer.files;
//     if (files.length) {
//       handleFiles(files);
//     }
//   };

//   const filesSelected = () => {
//     if (fileInputRef.current.files.length) {
//       handleFiles(fileInputRef.current.files);
//     }
//   };

//   const fileInputClicked = () => {
//     fileInputRef.current.click();
//   };

//   const handleFiles = (files) => {
//     for (let i = 0; i < files.length; i++) {
//       if (validateFile(files[i])) {
//         setSelectedFiles((prevArray) => [...prevArray, files[i]]);
//       } else {
//         // adding invalid property inside the file obj
//         files[i]["invalid"] = true;
//         setSelectedFiles((prevArray) => [...prevArray, files[i]]);
//         setErrorMessage("File type not permitted");
//         setUnsupportedFiles((prevArray) => [...prevArray, files[i]]);
//       }
//     }
//   };

//   const validateFile = (file) => {
//     console.log(file);
//     const validTypes = [
//       "image/jpeg",
//       "image/jpg",
//       "image/png",
//       "image/gif",
//       "image/x-icon",
//     ];
//     if (validTypes.indexOf(file.type) === -1) {
//       return false;
//     }

//     return true;
//   };

//   const fileSize = (size) => {
//     if (size === 0) {
//       return "0 Bytes";
//     }
//     const k = 1024;
//     const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
//     const i = Math.floor(Math.log(size) / Math.log(k));
//     return parseFloat((size / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
//   };

//   const fileType = (fileName) => {
//     return (
//       fileName.substring(fileName.lastIndexOf(".") + 1, fileName.length) ||
//       fileName
//     );
//   };

//   const removeFile = (name) => {
//     const index = validFiles.findIndex((e) => e.name === name);
//     const index2 = selectedFiles.findIndex((e) => e.name === name);
//     const index3 = unsupportedFiles.findIndex((e) => e.name === name);
//     validFiles.splice(index, 1);
//     selectedFiles.splice(index2, 1);
//     setValidFiles([...validFiles]);
//     setSelectedFiles([...selectedFiles]);
//     if (index3 !== -1) {
//       // if "file to be removed" present in "unsupported files" remove it from "unsupported files"
//       unsupportedFiles.splice(index3, 1);
//       setUnsupportedFiles([...unsupportedFiles]);
//     }
//   };

//   const openImageModal = (file) => {
//     const reader = new FileReader();
//     modalRef.current.style.display = "block";
//     reader.readAsDataURL(file);
//     reader.onload = function (e) {
//       modalImageRef.current.style.backgroundImage = `url(${e.target.result})`;
//     };
//   };

//   const closeModal = () => {
//     modalRef.current.style.display = "none";
//     modalImageRef.current.style.backgroundImage = "none";
//   };

//   // to be modified
//   const uploadFiles = async () => {
//     uploadModalRef.current.style.display = "block";
//     uploadRef.current.innerHTML = "File(s) Uploading...";
//     for (let i = 0; i < validFiles.length; i++) {
//       const formData = new FormData();
//       formData.append("image", validFiles[i]);
//       formData.append("key", "");

//       axios
//         .post("https://api.imgbb.com/1/upload", formData, {
//           onUploadProgress: (progressEvent) => {
//             const uploadPercentage = Math.floor(
//               (progressEvent.loaded / progressEvent.total) * 100
//             );
//             progressRef.current.innerHTML = `${uploadPercentage}%`;
//             progressRef.current.style.width = `${uploadPercentage}%`;

//             if (uploadPercentage === 100) {
//               uploadRef.current.innerHTML = "File(s) Uploaded";
//               validFiles.length = 0;
//               setValidFiles([...validFiles]);
//               setSelectedFiles([...validFiles]);
//               setUnsupportedFiles([...validFiles]);
//             }
//           },
//         })
//         .catch(() => {
//           uploadRef.current.innerHTML = `<span class="error">Error Uploading File(s)</span>`;
//           progressRef.current.style.backgroundColor = "red";
//         });
//     }
//   };
//   // to be modified end

//   const closeUploadModal = () => {
//     uploadModalRef.current.style.display = "none";
//   };

//   return (
//     <>
//       <div className="container-fluid dropzone-container">
//         {unsupportedFiles.length ? (
//           <p className="rm-unsupported-vid">
//             Please remove all unsupported files.
//           </p>
//         ) : (
//           ""
//         )}
//         <div
//           className="drop-container"
//           onDragOver={dragOver}
//           onDragEnter={dragEnter}
//           onDragLeave={dragLeave}
//           onDrop={fileDrop}
//           onClick={fileInputClicked}
//         >
//           <div className="drop-message">
//             <div className="upload-icon"></div>
//             Drag & Drop files here or click here to select file(s)
//           </div>
//           <input
//             ref={fileInputRef}
//             className="file-input"
//             type="file"
//             multiple
//             onChange={filesSelected}
//           />
//         </div>
//         <div>
//           {validFiles.map((data, i) => (
//             <div key={i}>
//               <div className="file-status-bar">
//                 <div
//                   // onClick={
//                   //   !data.invalid
//                   //     ? () => openImageModal(data)
//                   //     : () => removeFile(data.name)
//                   // }
//                   onClick={
//                     data.invalid
//                       ? (e) => removeFile(data.name)
//                       : (e) => preventDefault(e)
//                   }
//                 >
//                   {/* <div className="file-type-logo"></div> */}

//                   <span
//                     className={`file-name ${data.invalid ? "file-error" : ""}`}
//                   >
//                     <span className="file-type">{fileType(data.name)}</span>
//                     {data.name}
//                     <span className="file-size">
//                       ({fileSize(data.size)})
//                     </span>{" "}
//                     {data.invalid && (
//                       <span className="file-error-message">
//                         ({errorMessage})
//                       </span>
//                     )}
//                   </span>
//                 </div>
//                 <div
//                   className="file-remove"
//                   onClick={() => removeFile(data.name)}
//                 >
//                   X
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         {unsupportedFiles.length === 0 && validFiles.length ? (
//           <div className="text-center">
//             <button
//               className="btn btn-lg upload-video-btn"
//               onClick={() => uploadFiles()}
//             >
//               Upload Video
//             </button>
//           </div>
//         ) : (
//           ""
//         )}
//       </div>
//       <div className="tatti-modal" ref={modalRef}>
//         <div className="overlay"></div>
//         <span className="close" onClick={() => closeModal()}>
//           X
//         </span>
//         <div className="modal-image" ref={modalImageRef}></div>
//       </div>

//       <div className="upload-modal" ref={uploadModalRef}>
//         <div className="overlay"></div>
//         <div className="close" onClick={() => closeUploadModal()}>
//           X
//         </div>
//         <div className="progress-container">
//           <span ref={uploadRef}></span>
//           <div className="progress">
//             <div className="progress-bar" ref={progressRef}></div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Dropzone;

// ------------------------------------------- TEXT BOX DIV ----------------------------------------------------<div className="form-group-div">
//                       <div className="form-float">
// <div
//                       className="form-control-div"
//                       role="textbox"
//                       contenteditable="true"
//                       aria-multiline="true"
//                       style={{ border: "1px solid black" }}
//                     ></div>
//                     <label
//                       htmlFor="video-upload-name"
//                       className="form-control-placeholder-div"
//                       onClick={(e) => focusSibling(e)}
//                     >
//                       Video name
//                     </label>
//                   </div>
//                       </div>

// form-float-css
// form-placeholder-float

// .form-float {
//   .form-group-div {
//     position: relative;
//     margin-bottom: 1.5rem;
//   }

//   .form-control-placeholder-div {
//     position: absolute;
//     top: 0;
//     padding: 7px 0 0 13px;
//     transition: all 200ms;
//     transform: translate3d(0, -100%, 0);
//     opacity: 0.5;
//   }

//   .form-control-placeholder-div {
//     z-index: 0;
//   }

//   .form-control-div {
//     background-color: transparent;
//     z-index: 20;
//     padding: 0.375rem 0.75rem;
//     min-height: calc(3em + 1.5rem + 4px);
//     font-size: 1rem;
//     font-weight: 400;
//     border-radius: 0.25rem;
//   }
//   .form-control-placeholder-div:focus,
//   .form-control-div:focus + .form-control-placeholder-div,
//   .form-control-div:valid + .form-control-placeholder-div,
//   .form-control-div:not(:empty) + .form-control-placeholder-div {
//     font-size: 100%;
//     transform: translate3d(0, -110%, 0);
//     opacity: 1;
//   }
// }

// import React from "react";
// import HOBL from "../../layout/HOBL";
// import { useParams } from "react-router-dom";
// import videojs from "video.js";
// // import offset from "videojs-offset"; - works partially

// const Player = ({ playerOptns, videoData }) => {
//   const [player, setPlayer] = React.useState();
//   const 
  
//   const playerRef = React.useRef(null);
//   let player;
//   const memoizedPlayerOptions = React.useMemo(() => {
//     let pos = {
//       autoplay: true,
//       muted: true,
//       controls: true,
//       poster: videoData.thumb_url,
//       loop: false,
//       playbackRates: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 2.5, 3],
//       height: "100",
//       userActions: {
//         hotkeys: true,
//       },
//       aspectRatio: "16:9",
//     };
//     return pos;
//   }, []);

//   React.useLayoutEffect(() => {
//     // videojs.registerPlugin("offset", offset);

//     player = videojs(playerRef?.current, memoizedPlayerOptions, () => {
//       player.src(videoData.video_url);
//       console.log("Player is ready");
//     });
//     // if (player.watermark) player.watermark();

//     return () => {
//       if (player) {
//         player.dispose();
//       }
//     };
//   }, [memoizedPlayerOptions]);

//   return (
//     <>
//       <video
//         ref={playerRef}
//         id="videoPlayer"
//         className="video-js vjs-big-play-centered"
//         controls
//       >
//         <p className="vjs-no-js">
//           To view this video please enable JavaScript, and consider upgrading to
//           a web browser that
//           <a
//             href="https://videojs.com/html5-video-support/"
//             target="_blank"
//             rel="noreferrer"
//           >
//             supports HTML5 video
//           </a>
//         </p>
//       </video>
//     </>
//   );
// };

// export default Player;

// // sample imgs
// import iceland from "../../../img/iceland.PNG";
// // import thumb from "../../img/ration169.jpg";
// // import thumb from "../../img/wide-test.jpg";
// // import thumb from "../../img/ratio169_2.jpg";
// import thumb from "../../../img/ratio916.jpg";

import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Hamburger from "../../icons/Hamburger";
import moment from "moment";
import { sortVideoComments } from "../../../actions/currentVideo";

function useForceUpdate() {
  const [value, setValue] = useState(0); // integer state

  return () => setValue((value) => value + 1); // update the state to force render
}

const Comments = ({
  thm,
  comsVis,
  setComsVis,
  comments,
  sortVideoComments,
}) => {
  const showMoreComs = (e) => {
    e.preventDefault();
    setComsVis((vis) => !vis);
  };
  const forceUpdate = useForceUpdate();

  React.useEffect(() => {}, [comments]);

  // const sortComments = (type) => {
  //   type = type.toLowerCase();
  //   switch (type) {
  //     case "latest":
  //       let newComments = comments.sort((a, b) => {
  //         return moment(b.created_at).diff(a.created_at);
  //       });
  //       setComments(newComments);
  //       forceUpdate();
  //       break;
  //     case "oldest":
  //       let oldComments = comments.sort((a, b) => {
  //         return moment(a.created_at).diff(b.created_at);
  //       });
  //       setComments(oldComments);
  //       forceUpdate();
  //       break;
  //     default:
  //       setComments(comms);
  //   }
  // };

  return (
    comments && (
      <div className="d-block">
        <div className="">
          <div className="switch-comments-recs">
            <div className="row justify-content-between px-3 pl-4 px-sm-4">
              <div className="d-inline comments-len">
                {comments.length === 1
                  ? `${comments.length} Comment`
                  : `${comments.length} Comments`}
              </div>
              <div className="d-inline sort-comments">
                <div className="btn-group dropup">
                  <div
                    className="dropdown-toggle"
                    type="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <button className="btn sort-comments-btn py-1 mx-1">
                      <Hamburger thm={thm} /> <span className="ml-2">Sort</span>
                    </button>
                  </div>
                  <div
                    className="dropdown-menu single-video-optns-dropdn"
                    style={{ zIndex: "1030" }}
                  >
                    <div
                      className="dropdown-item pointer"
                      onClick={() => sortVideoComments("latest", forceUpdate)}
                    >
                      <div className="d-inline pl-3 single-video-more-opt-name">
                        Latest
                      </div>
                    </div>
                    <hr className="v-optns-hr p-0 m-0" />
                    <div
                      className="dropdown-item pointer"
                      onClick={() => sortVideoComments("oldest", forceUpdate)}
                    >
                      <div className="d-inline pl-3 single-video-more-opt-name">
                        Oldest
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="row p-0 m-0 px-3">
              {/* Automatically sorted according to top comments */}
              <div className="comment-row d-block">
                {comments.length > 0 && comsVis === false ? (
                  <>
                    <div className="d-block p-0 m-0 comment-user-comment">
                      {comments[0].comment_description}
                    </div>
                    <hr className="m-2" />
                  </>
                ) : (
                  comments.map((comm, i) => (
                    <div key={`${comm._id}${i}`}>
                      <div className="d-block p-0 m-0 comment-user-comment">
                        {comm.comment_description}
                      </div>
                      <hr className="m-2" />
                    </div>
                  ))
                )}
              </div>
              <button
                className="btn btn-block sort-comments-btn"
                onClick={(e) => showMoreComs(e)}
              >
                {comsVis ? "Show Less Comments" : "Show More Comments"}
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

const mapStateToProps = (state) => ({
  comments: state.currentVideo.comments,
});

export default connect(mapStateToProps, { sortVideoComments })(Comments);
