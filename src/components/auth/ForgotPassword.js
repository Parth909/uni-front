import React from "react";
import Icon from "../../img/slack.png";
import "../css/login.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { API } from "../../config";
import { showSuccessMsg, showErrorMsg } from "../../helpers/alerts";

const ForgotPassword = ({ se, setSE, errorMsgsRef, scrollToError }) => {
  const [state, setState] = React.useState({
    email: "",
    buttonText: "Send Email",
  });

  const { email, buttonText } = state;
  const { success, error } = se;

  const handleInput = (e) => {
    e.preventDefault();
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${API}/forgot-password`, {
        email,
      });
      if (response) {
        console.log(response);
        setState({
          ...state,
        });
        setSE({
          success: `Email sent to ${email}. Click on the link to reset password`,
        });
      }
    } catch (err) {
      setState({
        ...state,
      });
      setSE({ error: err.response.data.error });
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
                  <h4 className="card-title">Forgot Password</h4>
                  <form method="POST" className="my-login-validation">
                    <div className="form-group mb-5">
                      <label htmlFor="email">E-Mail Address</label>
                      <input
                        id="email"
                        type="email"
                        className="form-control"
                        name="email"
                        value={email}
                        autoComplete="off"
                        onChange={(e) => handleInput(e)}
                        required
                        autoFocus
                      />
                      <div className="invalid-feedback">Email is invalid</div>
                    </div>
                    <div className="form-group m-0">
                      <button
                        type="submit"
                        className="btn btn-primary btn-block"
                        onClick={(e) => handleSubmit(e)}
                      >
                        {buttonText}
                      </button>
                    </div>
                    <div className="mt-4 text-center">
                      Don't have an account?{" "}
                      <Link to="/register" className="login-links">
                        Register
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
              <div className="footer">Copyright &copy; 2021 &mdash; Unifiq</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForgotPassword;
