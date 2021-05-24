import React from "react";
import { Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import RegisterActivate from "./RegisterActivate";
import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword";

const AuthRoutes = (props) => {
  const [se, setSE] = React.useState({
    success: "",
    error: "",
  });

  // err - scroll
  const errorMsgsRef = React.useRef(null);

  const scrollToError = () => {
    errorMsgsRef.current?.scrollIntoView({
      behaviour: "smooth",
      block: "start",
    });
    removeUsrMsgs();
  };

  const removeUsrMsgs = () => {
    setTimeout(() => {
      setSE({ success: "", error: "" });
    }, 4000);
  };
  // err - scroll -

  return (
    <React.Fragment>
      <Route
        exact
        path="/login"
        render={(props) => (
          <Login
            {...props}
            se={se}
            setSE={setSE}
            errorMsgsRef={errorMsgsRef}
            scrollToError={scrollToError}
          />
        )}
      />

      <Route
        exact
        path="/register"
        render={(props) => (
          <Register
            {...props}
            se={se}
            setSE={setSE}
            errorMsgsRef={errorMsgsRef}
            scrollToError={scrollToError}
          />
        )}
      />
      <Route
        exact
        path="/register/activate/:token"
        render={(props) => (
          <RegisterActivate
            {...props}
            se={se}
            setSE={setSE}
            errorMsgsRef={errorMsgsRef}
            scrollToError={scrollToError}
          />
        )}
      />
      <Route
        exact
        path="/forgot-password"
        render={(props) => (
          <ForgotPassword
            {...props}
            se={se}
            setSE={setSE}
            errorMsgsRef={errorMsgsRef}
            scrollToError={scrollToError}
          />
        )}
      />
      <Route
        exact
        path="/reset-password/:token"
        render={(props) => (
          <ResetPassword
            {...props}
            se={se}
            setSE={setSE}
            errorMsgsRef={errorMsgsRef}
            scrollToError={scrollToError}
          />
        )}
      />
    </React.Fragment>
  );
};

export default AuthRoutes;
