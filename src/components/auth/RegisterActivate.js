import React from "react";
import Icon from "../../img/slack.png";
import axios from "axios";
import { showSuccessMsg, showErrorMsg } from "../../helpers/alerts";
import { API } from "../../config";
import { Link } from "react-router-dom";
import "../css/login.scss";

const RegisterActivate = ({
  match,
  se,
  setSE,
  errorMsgsRef,
  scrollToError,
}) => {
  const [state, setState] = React.useState({
    disabled: false,
    buttonText: "Activate Account",
  });

  const { buttonText } = state;
  const { success, error } = se;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setState({ ...state, buttonText: "Activating ..." });

    try {
      const response = await axios.post(`${API}/register/activate`, {
        token: match.params.token,
      });

      if (response) {
        setState({
          ...state,
          buttonText: "Login",
        });
        setSE({ success: response.data.message }); // not using spread operator here as we don't want the *error* to be displayed during *success*
      }
    } catch (error) {
      setState({
        ...state,
        buttonText: "Activation Failed",
      });
      setSE({ error: error.response.data.error }); // not using spread operator here as we don't want the *success* to be displayed during *error*
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

              {/* <div className="text-white">{JSON.stringify(formData)}</div> */}
              <div className="card fat">
                <div className="card-body">
                  <h4 className="card-title">Activate </h4>
                  <form method="POST" className="my-login-validation">
                    <div className="form-group m-0">
                      {buttonText === "Login" ? (
                        <Link to="/login" className="blue-links">
                          <button
                            type="submit"
                            className="btn btn-primary btn-block"
                          >
                            {buttonText}
                          </button>
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
                      Activation Failed?{" "}
                      <Link to="/register" className="login-links">
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

export default RegisterActivate;
