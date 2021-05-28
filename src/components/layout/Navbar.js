import React from "react";
// import "../../components/css/dlayout.scss";
import Hamburger from "../icons/Hamburger";
import NavProfPic from "./utils/NavProfPic";
import NavItem from "./utils/NavItem";
import Alert from "../../utils/Alert";
import Notification from "../icons/Notification";
import Trending from "./../icons/Trending";
import ProfImg from "../../img/square_profile_img.jpg";
import { connect } from "react-redux";
import axios from "axios";

const Navbar = ({ toggle, setToggle, user: { userTheme } }) => {
  const [thm, setThm] = React.useState(null);

  React.useEffect(() => {
    setThm(userTheme);
  }, [userTheme]);

  // toggled=sidebar hidden otherwise visible
  const toggleSidebar = (e) => {
    e.preventDefault();
    setToggle(toggle === "toggled" ? "" : "toggled");
  };

  const returnAll = async () => {
    const data = await axios.get("/api/all");
    console.log(data.data);
  };

  return (
    <>
      <nav
        className="navbar sticky-top uni-dark text-white"
        style={{ zIndex: "1030" }}
        // don't chng this
      >
        <ul className="nav m-0 p-0">
          <li className="nav-item pt-2 mr-3" onClick={(e) => toggleSidebar(e)}>
            <Hamburger className="hamburger" thm={thm} />
          </li>

          <li className="nav-item mr-3 pt-2">
            <NavItem IconImg={Trending} num="2" thm={thm} />
          </li>
          <li
            className="nav-item mr-3 pt-2"
            data-toggle="modal"
            data-target="#notifyModal"
          >
            <NavItem IconImg={Notification} num="2" thm={thm} />
          </li>
        </ul>
        {/* Hide on smaller screens then md */}
        <span className="d-none d-md-inline mr-4 pr-4">
          {thm && thm === "dark" ? (
            <h2 className="text-white" onClick={(e) => returnAll()}>
              Vtube
            </h2>
          ) : (
            <h2 className="text-black-50 pointer" onClick={(e) => returnAll()}>
              Vtube
            </h2>
          )}
        </span>
        <span className="">
          <button
            type="button"
            className="btn"
            data-toggle="modal"
            data-target="#userModal"
          >
            <NavProfPic img={ProfImg} thm={thm} />
          </button>
        </span>
      </nav>
      <Alert />
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, {})(Navbar);
