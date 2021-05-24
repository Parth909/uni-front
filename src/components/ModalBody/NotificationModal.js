import React from "react";
import { connect } from "react-redux";
import { setUserTheme } from "../../actions/user";
import { Link } from "react-router-dom";
// icons
import channelIcon from "../../img/slack.png";
// import vidThumb from "../../img/square_profile_img.jpg";
import vidThumb from "../../img/wide-test.jpg";
// import vidThumb from "../../img/ratio169_2.jpg";
// import vidThumb from "../../img/ratio916.jpg";
import loadingGif from "../../img/loading100.gif";

const NotificationModal = ({ user, setUserTheme }) => {
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  const closeModalRef = React.useRef(null);

  React.useEffect(() => {
    setLogin(true);
    setLoading(false);
  }, [user]);

  const closeModal = () => {
    closeModalRef?.current?.click();
  };

  return loading === false ? (
    login === true ? (
      <div
        className="modal fade"
        id="notifyModal"
        tabIndex="-1"
        aria-labelledby="userModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content user-modal">
            <div className="modal-body p-1 notify-modal-body">
              <div id="notifyModalBody">
                <div className="d-block text-center notify-modal-head p-2 mx-1 rounded-lg sticky-top">
                  <span
                    className="text-monospace "
                    style={{ fontWeight: "600" }}
                  >
                    10 New Notifications
                  </span>
                </div>
                {[...Array(5)].map((e, i) => (
                  <div className="row" key={i}>
                    <div className="col-12 mt-1">
                      <div className="notify-modal-optns rounded-lg m-1">
                        <Link to="/" onClick={() => closeModal()}>
                          <div className="px-2 pt-2 d-flex justify-content-start">
                            <div
                              style={{
                                backgroundColor: "#000000",
                                borderRadius: "50%",
                                height: "25px",
                                width: "25px",
                              }}
                              className="mr-1"
                            >
                              <img
                                src={channelIcon}
                                style={{ height: "25px", width: "25px" }}
                                alt=".."
                              />
                            </div>
                            <span className="align-middle">
                              <span className="notify-m-video-uploader-info">
                                {" The 4K Adventurers uploaded - 1 Day Ago"}
                              </span>
                            </span>
                          </div>
                        </Link>
                        <hr className="m-0" />
                        <Link to="/" onClick={() => closeModal()}>
                          <div className="pointer">
                            <div className="d-inline-flex p-2">
                              {/* channel icon from back */}
                              <div
                                style={{
                                  height: "63px",
                                  width: "112px",
                                  backgroundColor: "#2d2d2d",
                                }}
                                className="mr-2 mt-1"
                              >
                                <img
                                  src={vidThumb}
                                  alt="Icon"
                                  style={{
                                    height: "63px",
                                    width: "112px",
                                    objectFit: "contain",
                                    objectPosition: "center",
                                  }}
                                />
                              </div>
                              <div className="notify-m-video-uploader-info text-break">
                                Researchers bypass Google, Azure, and Cloudflare
                                Reverse Proxy Security - HTTP/2 Smuggling (h2c)
                                . TG it was not a zero day attack
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="d-flex justify-content-end">
                <button
                  type="button"
                  className="btn smoothGrey-smoothWhite-text-1 blue-links"
                  ref={closeModalRef}
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div
        className="modal fade"
        id="notifyModal"
        tabIndex="-1"
        aria-labelledby="userModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content user-modal">
            <div className="modal-body">
              <div id="notifyModalBody">
                <div className="row">
                  <div className="col-12 pt-1 text-center">
                    <h5 className="user-modal-name">No notifications</h5>
                    <Link
                      to="/login"
                      className="blue-links pointer"
                      // data-dismiss="modal"
                      onClick={() => closeModal()}
                    >
                      <h5>Login</h5>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="d-none">
                <button
                  type="button"
                  className="btn smoothGrey-smoothWhite-text-1 blue-links"
                  data-dismiss="modal"
                  ref={closeModalRef}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  ) : (
    <div
      className="modal fade"
      id="notifyModal"
      tabIndex="-1"
      aria-labelledby="userModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content user-modal">
          <div className="modal-body">
            <div id="notifyModalBody">
              <div className="row">
                <div className="col-12 pt-1 text-center">
                  <img
                    style={{ height: "50px", weight: "50px" }}
                    src={loadingGif}
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { setUserTheme })(NotificationModal);
