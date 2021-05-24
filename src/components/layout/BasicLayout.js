import React from "react";
import Navbar from "./Navbar";
import PushableSidebar from "./PushableSidebar";
// import "../css/dlayout.scss"; --pro
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import SuperTheme from "../SuperTheme";

// contains basic layout like Navbar, Sidebar, Body etc

const BasicLayout = ({ WComp, WCompProps }) => {
  // toggled=sidebar hidden otherwise visible
  const [toggle, setToggle] = React.useState("toggled");
  const loadingRef = React.useRef(null);

  return (
    <React.Fragment>
      <SuperTheme>
        <Navbar toggle={toggle} setToggle={setToggle} />
        <PushableSidebar
          toggle={toggle}
          setToggle={setToggle}
          WComp={WComp}
          WCompProps={WCompProps}
        />
      </SuperTheme>
    </React.Fragment>
  );
};

export default BasicLayout;
