import React from "react";
import "../css/login.scss";
import Icon from "../../img/slack.png";
import axios from "axios";
import { showSuccessMsg, showErrorMsg } from "../../helpers/alerts";
import { API } from "../../config";
import { Link } from "react-router-dom";

const Register = ({ se, setSE, errorMsgsRef, scrollToError }) => {
  const [formData, setFormData] = React.useState({
    firstname: "",
    midname: "",
    lastname: "",
    email: "",
    password: "",
    ip: "",
    buttonText: "Register",
  });

  const { success, error } = se;

  const {
    firstname,
    midname,
    lastname,
    email,
    password,
    ip,
    buttonText,
  } = formData;

  React.useEffect(() => {
    const setIp = () => {
      axios.get("https://api.ipify.org/?format=json").then((result) => {
        let userIp = result.data.ip;
        // console.log("ip -> ", userIp);
        setFormData({ ...formData, ip: userIp });
      });
    };
    setIp();
  }, []);

  const handleInput = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormData({ ...formData, buttonText: "Registering ..." });

    try {
      const response = await axios.post(`${API}/register`, {
        firstname,
        midname,
        lastname,
        email,
        password,
        ip,
      });

      if (response) {
        setFormData({
          ...formData,
          firstname: "",
          midname: "",
          lastname: "",
          email: "",
          password: "",
          confirmPassword: "",
          buttonText: "Submitted",
          ip: "",
        });
        setSE({ success: response.data.message }); // not using spread operator here as we don't want the *error* to be displayed during *success*
      }
    } catch (err) {
      setFormData({ ...formData, buttonText: "Register" });
      setSE({ error: err.response.data.error }); // not using spread operator here as we don't want the *success* to be displayed during *error*
    }
  };

  return (
    <div className="my-login-page">
      <section className="h-100">
        <div className="container h-100">
          <div className="row justify-content-md-center h-100">
            <div className="card-wrapper">
              {/* auto-scroll div */}
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
                  <h4 className="card-title">Register</h4>
                  <form method="POST" className="my-login-validation">
                    {/* each input in each form-group for nice design */}
                    <div className="form-group">
                      <label htmlFor="name">First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="firstname"
                        value={firstname}
                        required
                        onChange={(e) => handleInput(e)}
                        autoFocus
                        autoComplete="off"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="name">Middle Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="midname"
                        value={midname}
                        required
                        onChange={(e) => handleInput(e)}
                        autoComplete="off"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="name">Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="lastname"
                        value={lastname}
                        required
                        onChange={(e) => handleInput(e)}
                        autoComplete="off"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">E-Mail Address</label>
                      <input
                        id="email"
                        type="email"
                        className="form-control"
                        name="email"
                        value={email}
                        required
                        onChange={(e) => handleInput(e)}
                        autoComplete="off"
                      />
                      <div className="invalid-feedback">Email is invalid</div>
                    </div>

                    <div className="form-group mb-5">
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
                      Already have an account?{" "}
                      <Link to="/login" className="login-links">
                        Login
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

export default Register;
