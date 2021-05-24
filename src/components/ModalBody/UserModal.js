import React from "react";
import { connect } from "react-redux";
import { setUserTheme } from "../../actions/user";
import { Link } from "react-router-dom";
// icons
import network from "../../img/network.svg";
import channels from "../../img/channels.svg";
import groups from "../../img/groups.svg";
import loginLogo from "../../img/login.svg";
import signup from "../../img/sign-up.svg";
import premium from "../../img/premium.svg";
import loadingGif from "../../img/loading100.gif";

const UserModal = ({ user, setUserTheme }) => {
  const [themeToSet, setThemeToSet] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  const closeModalRef = React.useRef(null);

  React.useEffect(() => {
    if (user.userTheme === "dark") setThemeToSet("light");
    if (user.userTheme === "light") setThemeToSet("dark");
    setLogin(true);
    setLoading(false);
  }, [user]);

  const changeUserTheme = (e) => {
    e.preventDefault();
    setUserTheme(themeToSet);
  };

  const closeModal = () => {
    closeModalRef?.current?.click();
  };

  return loading === false ? (
    login === true ? (
      <div
        className="modal fade"
        id="userModal"
        tabIndex="-1"
        aria-labelledby="userModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content user-modal">
            <div className="modal-body">
              <div id="userModalBody">
                <div className="row">
                  <div className="col-3 pt-1 text-center">
                    <img
                      src="https://yt3.ggpht.com/yti/ANoDKi6X4uxcbbI45Ry-sZerfwE_C-QH4OrL6sTMF3mn=s88-c-k-c0x00ffffff-no-rj-mo"
                      alt=".."
                      style={{
                        borderRadius: "50%",
                        height: "70px",
                        width: "70px",
                      }}
                    />
                  </div>
                  <div className="col-9 pt-1">
                    <h5 className="user-modal-name">Parth Bhoir</h5>
                    <h6 className="user-modal-username">parthbhoir#987a1fc</h6>
                    <a
                      href="https://google.com"
                      className="blue-links pointer"
                      data-dismiss="modal"
                    >
                      <h6>Manage Your Account</h6>
                    </a>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-md-6 text-center smoothGrey-smoothWhite-text-1 mt-3">
                    <div className="user-modal-optns p-2 rounded-lg">
                      <div className="custom-control custom-switch">
                        <input
                          type="checkbox"
                          className="custom-control-input pointer"
                          id="color-theme-switch"
                          onChange={changeUserTheme}
                          checked={user.userTheme === "dark" ? true : false}
                        />
                        <label
                          className="custom-control-label text-monospace font-weight-bold pointer"
                          htmlFor="color-theme-switch"
                          onClick={changeUserTheme}
                        >
                          Dark Mode
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 text-center smoothGrey-smoothWhite-text-1 mt-3">
                    <Link to="/" onClick={() => closeModal()}>
                      <div className="user-modal-optns p-2 rounded-lg pointer">
                        <span className="pr-2">
                          <img
                            src={network}
                            style={{ height: "22px", width: "22px" }}
                            alt=".."
                          />
                        </span>
                        <span
                          className="text-monospace "
                          style={{ fontWeight: "600" }}
                        >
                          Network
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div className="col-12 col-md-6 text-center smoothGrey-smoothWhite-text-1 mt-3">
                    <Link
                      to={`/user/${user._id}/videos/view/yours`}
                      onClick={() => closeModal()}
                    >
                      <div className="user-modal-optns p-2 rounded-lg pointer">
                        <span className="pr-2">
                          <img
                            src={channels}
                            alt=".."
                            className="pb-1"
                            style={{ height: "23px", width: "20px" }}
                          />
                        </span>
                        <span
                          className="text-monospace "
                          style={{ fontWeight: "600" }}
                        >
                          Channels
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div className="col-12 col-md-6 text-center smoothGrey-smoothWhite-text-1 mt-3">
                    <Link to="/" onClick={() => closeModal()}>
                      <div className="user-modal-optns p-2 rounded-lg pointer">
                        <span className="pr-2">
                          <img
                            src={groups}
                            alt=".."
                            className="pb-1"
                            style={{ height: "24px", width: "24px" }}
                          />
                        </span>
                        <span
                          className="text-monospace "
                          style={{ fontWeight: "600" }}
                        >
                          Your Groups
                        </span>
                      </div>
                    </Link>
                  </div>
                  {login === false ? (
                    <>
                      <div className="col-12 col-md-6 text-center smoothGrey-smoothWhite-text-1 mt-3">
                        <Link to="/" onClick={() => closeModal()}>
                          <div className="user-modal-optns p-2 rounded-lg pointer">
                            <span className="pr-2">
                              <img
                                src={loginLogo}
                                alt=".."
                                className="pb-1"
                                style={{ height: "24px", width: "24px" }}
                              />
                            </span>
                            <span
                              className="text-monospace "
                              style={{ fontWeight: "600" }}
                            >
                              Log In
                            </span>
                          </div>
                        </Link>
                      </div>
                      <div className="col-12 col-md-6 text-center smoothGrey-smoothWhite-text-1 mt-3">
                        <Link to="/" onClick={() => closeModal()}>
                          <div className="user-modal-optns p-2 rounded-lg pointer">
                            <span className="pr-2">
                              <img
                                src={signup}
                                alt=".."
                                className="pb-1"
                                style={{ height: "24px", width: "22px" }}
                              />
                            </span>
                            <span
                              className="text-monospace "
                              style={{ fontWeight: "600" }}
                            >
                              Sign Up
                            </span>
                          </div>
                        </Link>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="col-12 col-md-6 text-center smoothGrey-smoothWhite-text-1 mt-3">
                        <Link to="/" onClick={() => closeModal()}>
                          <div className="user-modal-optns p-2 rounded-lg pointer">
                            <span className="pr-2">
                              <img
                                src={groups}
                                alt=".."
                                className="pb-1"
                                style={{ height: "24px", width: "24px" }}
                              />
                            </span>
                            <span
                              className="text-monospace"
                              style={{ fontWeight: "600" }}
                            >
                              Log Out
                            </span>
                          </div>
                        </Link>
                      </div>
                      <div className="col-12 col-md-6 text-center smoothGrey-smoothWhite-text-1 mt-3">
                        <Link to="/" onClick={() => closeModal()}>
                          <div className="user-modal-optns p-2 rounded-lg pointer">
                            <span className="pr-2">
                              <img
                                src={premium}
                                alt=".."
                                className="pb-1"
                                style={{ height: "24px", width: "24px" }}
                              />
                            </span>
                            <span
                              className="text-monospace"
                              style={{ fontWeight: "600" }}
                            >
                              Cool...
                            </span>
                          </div>
                        </Link>
                      </div>
                    </>
                  )}
                </div>
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
        id="userModal"
        tabIndex="-1"
        aria-labelledby="userModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content user-modal">
            <div className="modal-body">
              <div id="userModalBody">
                <div className="row">
                  <div className="col-12 pt-1 text-center">
                    <h5 className="user-modal-name">
                      No User Found! Please Login
                    </h5>
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
      id="userModal"
      tabIndex="-1"
      aria-labelledby="userModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content user-modal">
          <div className="modal-body">
            <div id="userModalBody">
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

export default connect(mapStateToProps, { setUserTheme })(UserModal);
