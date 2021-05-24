import React from "react";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";
import HOBL from "../../../layout/HOBL";

const YourChannels = React.lazy(() => import("./YourChannels"));
const FollowingChnls = React.lazy(() => import("./FollowingChnls"));
const FrequentChnls = React.lazy(() => import("./FrequentChnls"));

const VideoChannels = ({ user: { userTheme, _id } }) => {
  let { section } = useParams();
  const [sec, setSec] = React.useState(section);
  const [thm, setThm] = React.useState(null);

  React.useEffect(() => {
    console.log(section);
    setSec(section);
    setThm(userTheme);
  }, [section, userTheme]);

  return (
    _id && (
      <>
        <div className="container-fluid p-0 m-0">
          <div className="horizontal-menu pt-2">
            <Link to={`/user/${_id}/videos/view/yours`}>
              <div className="horizontal-menu-item my-2 pointer">
                <div
                  className={`v-vid-section-name border-right-grey ${
                    sec === "yours" ? "blue-highlight" : ""
                  }`}
                >
                  Your Channels
                </div>
              </div>
            </Link>
            <Link to={`/user/${_id}/videos/view/following`}>
              <div className="horizontal-menu-item my-2 pointer">
                <div
                  className={`v-vid-section-name border-right-grey ${
                    sec === "following" ? "blue-highlight" : ""
                  }`}
                >
                  Following
                </div>
              </div>
            </Link>
            {/* <Link to={`/user/${_id}/videos/view/frequent`}>
            <div className="horizontal-menu-item my-2 pointer">
              <div
                className={`v-vid-section-name ${
                  sec === "frequent" ? "blue-highlight" : ""
                }`}
              >
                Frequently watched
              </div>
            </div>
          </Link> */}
          </div>
        </div>
        <div
          className="container-fluid p-0 m-0 mt-2"
          style={{ overflow: "wrap" }}
        >
          {sec === "yours" && <YourChannels sec={sec} thm={thm} />}
          {sec === "following" && <FollowingChnls sec={sec} thm={thm} />}
          {/* {sec === "frequent" && <FrequentChnls sec={sec} thm={thm} />} */}
        </div>
      </>
    )
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default HOBL()(connect(mapStateToProps, {})(VideoChannels));
