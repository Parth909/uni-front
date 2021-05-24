import React from "react";

const VidState = () => {
  const [vidVis, setVidVis] = React.useState("public");
  const [custVis, setCustVis] = React.useState([]);

  const setCustomVisibilty = (e, name) => {
    if (!custVis.includes(name)) {
      setCustVis([...custVis, name]);
    } else {
      let idx = custVis.indexOf(name);
      if (idx > -1) setCustVis([...custVis.filter((ele) => ele !== name)]);
    }
  };

  React.useEffect(() => {
    console.log(custVis);
  }, [custVis]);

  return (
    <div>
      <div className="upload-video-content upload-video-state">
        <p className="video-upload-head p-2 m-2">Video State</p>
        <div className="row m-2 p-md-0 m-md-0">
          <div className="col-12 col-md-10 offset-md-1 col-xl-8 offset-xl-2">
            <div className="row">
              <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 mt-4">
                {/* visibilty */}
                <div className="customRadio">
                  <div className="justify-content-start">
                    <div>
                      <div className="video-visibilty-head">
                        Video Visibilty
                      </div>
                      <div>
                        {" "}
                        <input
                          className="pointer"
                          type="radio"
                          name="video_vis"
                          id="visibility_private"
                          onChange={(e) => setVidVis("public")}
                          checked={vidVis === "public"}
                        />{" "}
                        <label htmlFor="visibility_private" className="pointer">
                          <span className="video-visibilty-state">Public</span>{" "}
                          <span>(Anyone can watch the video)</span>
                        </label>{" "}
                      </div>
                      <div>
                        {" "}
                        <input
                          className="pointer"
                          type="radio"
                          name="video_vis"
                          id="visibility_public"
                          onChange={(e) => setVidVis("private")}
                          checked={vidVis === "private"}
                        />{" "}
                        <label htmlFor="visibility_public" className="pointer">
                          <span className="video-visibilty-state">Private</span>{" "}
                          <span>(Will remain private until made public)</span>
                        </label>{" "}
                      </div>
                      <div>
                        {" "}
                        <input
                          className="pointer"
                          type="radio"
                          name="video_vis"
                          id="visibility_custom"
                          onChange={(e) => setVidVis("custom")}
                          checked={vidVis === "custom"}
                        />{" "}
                        <label htmlFor="visibility_custom" className="pointer">
                          <span className="video-visibilty-state">
                            Custom(*)
                          </span>{" "}
                          <span>(Do Custom configuration below)</span>
                        </label>{" "}
                      </div>
                    </div>
                  </div>
                </div>
                {/*  */}
              </div>
            </div>
            <div className="row">
              <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 mt-4">
                {/* custom */}
                <div className="customRadio">
                  <div className="justify-content-start">
                    <div>
                      <div className="video-visibilty-head">Custom</div>
                      <div>
                        {" "}
                        <input
                          className="pointer"
                          type="checkbox"
                          id="followers_only"
                          onChange={(e) =>
                            setCustomVisibilty(e, "followers_only")
                          }
                          checked={custVis.includes("followers_only")}
                        />{" "}
                        <label htmlFor="followers_only" className="pointer">
                          <span className="video-visibilty-state">
                            Followers Only
                          </span>{" "}
                          <span>(Only your channel followers can watch )</span>
                        </label>{" "}
                      </div>
                      <div>
                        {" "}
                        <input
                          className="pointer"
                          type="checkbox"
                          id="specific_channels"
                          onChange={(e) =>
                            setCustomVisibilty(e, "specific_channels")
                          }
                          checked={custVis.includes("specific_channels")}
                        />{" "}
                        <label htmlFor="specific_channels" className="pointer">
                          <span className="video-visibilty-state">
                            Specific Channels
                          </span>{" "}
                          <span>(Including yours)</span>
                        </label>{" "}
                      </div>
                    </div>
                  </div>
                </div>
                {/*  */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VidState;
