import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Hamburger from "../../icons/Hamburger";
import moment from "moment";

const Comments = ({ thm, comsVis, setComsVis, comms }) => {
  const [comments, setComments] = React.useState([]);
  const showMoreComs = (e) => {
    e.preventDefault();
    setComsVis((vis) => !vis);
  };

  React.useEffect(() => {
    setComments([...comms]);
  }, [comms]);

  const sortComments = (type) => {
    type = type.toLowerCase();
    switch (type) {
      case "latest":
        let newComments = [...comms].sort((a, b) => {
          return moment(b.created_at).diff(a.created_at);
        });
        setComments(newComments);
        break;
      case "oldest":
        let oldComments = [...comms].sort((a, b) => {
          return moment(a.created_at).diff(b.created_at);
        });
        setComments(oldComments);
        break;
      default:
        setComments(comms);
    }
  };

  return (
    comments.length > 0 && (
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
                      onClick={() => sortComments("latest")}
                    >
                      <div className="d-inline pl-3 single-video-more-opt-name">
                        Latest
                      </div>
                    </div>
                    <hr className="v-optns-hr p-0 m-0" />
                    <div
                      className="dropdown-item pointer"
                      onClick={() => sortComments("oldest")}
                    >
                      <div className="d-inline pl-3 single-video-more-opt-name">
                        Oldest
                      </div>
                    </div>
                    {/* <hr className="v-optns-hr p-0 m-0" />
                  <Link className="dropdown-item" to="/videos">
                    <div className="d-inline pl-3 single-video-more-opt-name">
                      Popular
                    </div>
                  </Link> */}
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
                    <div className="d-block p-0 m-0" key={comments[0]._id}>
                      <img
                        src={comments[0].comment_owner.profile_img_url}
                        alt=".."
                        className="comment-user-pic"
                      />
                      <span className="ml-2 comment-user-name">
                        {`${comments[0].comment_owner.first_name} ${comments[0].comment_owner.last_name}`}{" "}
                        - {moment(comments[0].created_at).fromNow()}
                      </span>
                    </div>
                    <div className="d-block p-0 m-0 comment-user-comment">
                      {comments[0].comment_description}
                    </div>
                    <hr className="m-2" />
                  </>
                ) : (
                  comments.map((comm, i) => (
                    <div key={`${comm._id}${i}`}>
                      <div className="d-block p-0 m-0">
                        <img
                          src={comm.comment_owner.profile_img_url}
                          alt=".."
                          className="comment-user-pic"
                        />
                        <span className="ml-2 comment-user-name">
                          {`${comm.comment_owner.first_name} ${comm.comment_owner.last_name}`}{" "}
                          - {moment(comm.created_at).fromNow()}
                        </span>
                      </div>
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
  comms: state.currentVideo.comments,
});
export default connect(mapStateToProps, {})(Comments);
