import React from "react";
import Icon from "../../img/slack.png";
import "../css/login.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { API } from "../../config";
import { showSuccessMsg, showErrorMsg } from "../../helpers/alerts";

const Login = ({ se, setSE, errorMsgsRef, scrollToError }) => {
  const [state, setState] = React.useState({
    email: "",
    password: "",
    buttonText: "Login",
  });

  const { email, password, buttonText } = state;

  const { success, error } = se;

  const handleInput = (e) => {
    e.preventDefault();
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setState({ ...state, buttonText: "Logging In ..." });
    try {
      const response = await axios.post(`${API}/login`, {
        email,
        password,
      });
      if (response) {
        console.log(response);
        setState({
          ...state,
          buttonText: "Logged In",
        });
        setSE({ success: response.data.message }); // not using spread operator here as we don't want the *error* to be displayed during *success*
      }
    } catch (err) {
      setState({
        ...state,
        error: err.response.data.error,
        buttonText: "Login Failed , Try again",
      });
      setSE({ error: err.response.data.error }); // not using spread operator here as we don't want the *success* to be displayed during *error*
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
                  <h4 className="card-title">Login</h4>
                  <form method="POST" className="my-login-validation">
                    <div className="form-group">
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

                    <div className="form-group">
                      <label htmlFor="password">
                        Password
                        <Link
                          to="/forgot-password"
                          className="float-right login-links"
                        >
                          Forgot Password?
                        </Link>
                      </label>
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
                      <div className="invalid-feedback">
                        Password is required
                      </div>
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
                        Create One
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

export default Login;
