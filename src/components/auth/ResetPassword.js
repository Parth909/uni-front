import React from "react";
import Icon from "../../img/slack.png";
import axios from "axios";
import { showSuccessMsg, showErrorMsg } from "../../helpers/alerts";
import { API } from "../../config";
import { Link } from "react-router-dom";
import "../css/login.scss";

const ResetPassword = ({ match, se, setSE, errorMsgsRef, scrollToError }) => {
  const [state, setState] = React.useState({
    password: "",
    confirmPassword: "",
    buttonText: "Reset Password",
    changed: false,
  });

  const { password, confirmPassword, buttonText, changed } = state;
  const { success, error } = se;

  const handleInput = (e) => {
    e.preventDefault();
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setState({ ...state, buttonText: "Resetting ..." });

    // if (password === confirmPassword) console.log("request sent to backend");
    // else console.log("Request not sent bcz password's don't match");

    if (password === confirmPassword) {
      try {
        console.log("request sent to backend");
        const response = await axios.post(`${API}/reset-password`, {
          password,
          token: match.params.token,
        });

        if (response) {
          setState({
            ...state,
            changed: true,
            buttonText: "Login",
          });
          setSE({ success: response.data.message }); // not using spread operator here as we don't want the *error* to be displayed during *success*
        }
      } catch (error) {
        setState({
          ...state,
          buttonText: "Resetting Failed",
        });
        setSE({ error: error.response.data.error }); // not using spread operator here as we don't want the *success* to be displayed during *error*
      }
    } else {
      setState({ ...state, buttonText: "Reset" });
      console.log("Request not sent bcz password's don't match");
      setSE({ error: "The passwords don't match !" });
    }
  };

  return (
    <div className="my-login-page">
      <section className="h-100">
        <div className="container h-100">
          <div className="row justify-content-md-center h-100">
            <div className="card-wrapper">
              <div className="p-0 m-0 auto-scroll" ref={errorMsgsRef}>
                {(error || success) && scrollToError()}
                <div className="brand">
                  <img src={Icon} alt="logo" />
                </div>
                {success && showSuccessMsg(success)}
                {error && showErrorMsg(error)}
              </div>

              <div className="card fat">
                <div className="card-body">
                  <h4 className="card-title">Reset Password </h4>
                  <form method="POST" className="my-login-validation">
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input
                        id="password"
                        type="password"
                        className="form-control"
                        name="password"
                        value={password}
                        required
                        onChange={(e) => handleInput(e)}
                        autoComplete="off"
                      />
                    </div>

                    <div className="form-group mb-5">
                      <label htmlFor="confirm-password">Confirm Password</label>
                      <input
                        id="confirm-password"
                        type="password"
                        className="form-control"
                        autoComplete="off"
                        name="confirmPassword"
                        value={confirmPassword}
                        required
                        onChange={(e) => handleInput(e)}
                      />
                    </div>
                    <div className="form-group m-0">
                      {changed === true ? (
                        <Link to="/login" className="btn btn-primary btn-block">
                          {buttonText}
                        </Link>
                      ) : (
                        <button
                          type="submit"
                          className="btn btn-primary btn-block"
                          onClick={(e) => handleSubmit(e)}
                        >
                          {buttonText}
                        </button>
                      )}
                    </div>
                    <div className="mt-4 text-center">
                      Link Expired?{" "}
                      <Link to="/forgot-password" className="login-links">
                        Try again
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResetPassword;
