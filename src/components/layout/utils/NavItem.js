import React from "react";

const NavItem = ({ IconImg, num, thm }) => {
  return (
    <div className="nav-icon pb-1">
      <IconImg style={{ width: "100%", height: "100%" }} thm={thm} />
      <div className="nav-txt">{num}</div>
    </div>
  );
};

export default NavItem;
