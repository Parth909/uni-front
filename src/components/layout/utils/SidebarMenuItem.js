import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const SidebarMenuItem = ({ IconImg, name, user: { userTheme }, route }) => {
  const [thm, setThm] = React.useState(null);

  React.useEffect(() => {
    setThm(userTheme);
  }, [userTheme]);

  return IconImg && name ? (
    <Link to={route}>
      <div>
        <span href="#" className="list-group-item unifiq-side-item px-3 py-2">
          <div className="row">
            <div
              className="col-3"
              style={{ verticalAlign: "middle !important" }}
            >
              <IconImg
                style={{ height: "18px !important", width: "18px" }}
                thm={thm}
              />
            </div>
            <div
              className="col-9 sidebar-name"
              style={{ verticalAlign: "middle" }}
            >
              {name}
            </div>
          </div>
          <span style={{ verticalAlign: "middle" }}>{"  "}</span>
        </span>
      </div>
    </Link>
  ) : (
    <Link to={route}>
      <div>
        <span
          href="#"
          className="list-group-item unifiq-side-item  side-grp-name px-3 py-2"
        >
          <div className="row">
            <div className="col-12 sidebar-name">{name}</div>
          </div>
          <span style={{ verticalAlign: "middle" }}>{"  "}</span>
        </span>
      </div>
    </Link>
  );
};
const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, {})(SidebarMenuItem);
