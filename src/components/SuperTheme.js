import React from "react";
import { connect } from "react-redux";

const LightTheme = React.lazy(() => import("./LightTheme"));
const DarkTheme = React.lazy(() => import("./DarkTheme"));

const SuperTheme = ({ user: { userTheme }, children }) => {
  const [thm, setThm] = React.useState(null);

  React.useEffect(() => {
    setThm(userTheme);
  }, [userTheme]);

  return (
    <React.Fragment>
      <React.Suspense fallback={<></>}>
        {thm && thm === "light" && <LightTheme />}
        {thm && thm === "dark" && <DarkTheme />}
      </React.Suspense>
      {children}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, {})(SuperTheme);
