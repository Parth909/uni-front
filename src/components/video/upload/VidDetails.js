import React from "react";
import AddAny from "../../icons/AddAny";
import thumbnail from "../../../samplesimgs/channelpic.jpg";

const VidDetails = () => {
  const [formState, setFormState] = React.useState({
    rawVideoTags: "",
    videoTags: [],
    vidThumbnail: null,
  });
  const [ts, setTS] = React.useState(0);
  const videoNameRef = React.useRef(null);
  const videoDescRef = React.useRef(null);

  const { videoTags, rawVideoTags, vidThumbnail } = formState;
  const setVideoTags = (e) => {
    e.preventDefault();
    console.log(e);
    let vTags = e.target.innerText.split(",");
    setFormState({
      ...formState,
      rawVideoTags: e.target.value,
      videoTags: vTags.map((tag) => tag.trim()),
    });
  };

  const submitVideoDetails = (e) => {
    console.log(videoNameRef.current);
    console.log(videoNameRef.current?.innerText);
  };

  const setthestate = (i) => {
    console.log(i);
    setTS(i);
  };

  // React.useEffect(() => {
  //   console.log(formState);
  // }, [formState]);

  return (
    <div>
      <div className="upload-video-content upload-video-details">
        <p className="video-upload-head p-2 m-2">Video Details</p>
        <div className="row m-2 p-md-0 m-md-0">
          <div className="col-12 col-md-10 offset-md-1 col-xl-8 offset-xl-2">
            <div className="row">
              <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 mt-4">
                <div className="form-float-vid-upload">
                  <div
                    className="form-control-div"
                    contentEditable="true"
                    suppressContentEditableWarning={true}
                    aria-multiline="true"
                    id="video-upload-name"
                    style={{ border: "1px solid black" }}
                    ref={videoNameRef}
                  >
                    {/* video name */}
                    Video Title
                  </div>
                  <label
                    htmlFor="video-upload-name"
                    className="form-control-placeholder-div"
                  >
                    Title <span className="word-count">(0/100)</span>
                  </label>
                </div>
              </div>
              {/* <pre>{videoNameRef.current?.innerText}</pre> */}
              <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 mt-4">
                <div className="form-float-vid-upload">
                  <div
                    className="form-control-div"
                    role="textbox"
                    contentEditable="true"
                    suppressContentEditableWarning={true}
                    aria-multiline="true"
                    id="video-upload-desc"
                    style={{ border: "1px solid black" }}
                    ref={videoDescRef}
                  >
                    {/* video description */}
                  </div>
                  <label
                    htmlFor="video-upload-desc"
                    className="form-control-placeholder-div"
                  >
                    Description <span className="word-count">(0/1000)</span>
                  </label>
                </div>
              </div>
              <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 mt-4">
                <div className="form-float-vid-upload">
                  <div
                    className="form-control-div"
                    contentEditable="true"
                    suppressContentEditableWarning={true}
                    aria-multiline="true"
                    style={{ border: "1px solid black" }}
                    onInput={(e) => setVideoTags(e)}
                  >
                    {rawVideoTags}
                  </div>
                  <label className="form-control-placeholder-div">
                    Video Tags{" "}
                    <span className="word-count">(comma-seperated)</span>
                  </label>
                </div>
                <div
                  style={{ overflowWrap: "break-word", wordBreak: "normal" }}
                >
                  {videoTags.length > 0 &&
                    videoTags.map(
                      (tag, i) =>
                        tag.trim().length > 0 && (
                          <span
                            key={i}
                            className="d-inline mr-2 rounded-lg upload-video-tags-t"
                            title={tag}
                          >
                            {tag}
                          </span>
                        )
                    )}
                </div>
              </div>
              <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                <div className="suggested-video-thumbnail-head">Thumbnail</div>
                <div className="row">
                  {[...Array(4)].map((thumb, i) => (
                    <div
                      key={i}
                      className={`col-6 col-md-3 pointer suggested-vid-thumb-box ${
                        ts !== null && ts === i ? "selected" : ""
                      }`}
                      onClick={(e) => setthestate(i)}
                    >
                      <div className="suggested-up-video-thumbnail " key={i}>
                        <div>
                          <img src={thumbnail} alt="..." />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="d-block mt-4">
                  <button className="btn btn-choose-custom-thumb btn-block">
                    <AddAny thm={"light"} className="custom-vid-thumb-icon" />{" "}
                    <span>Custom Thumbnail</span>
                  </button>
                </div>
              </div>
              <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 mt-4">
                <div className="text-center">
                  <button
                    className="btn btn-lg upload-video-btn"
                    onClick={(e) => submitVideoDetails()}
                  >
                    Next Step
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VidDetails;
