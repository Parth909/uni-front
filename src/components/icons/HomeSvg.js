import React from "react";
import white from "../../img/home_white.svg";
import black from "../../img/home_black.svg";

const HomeSvg = (props) => {
  return props?.thm === "dark" ? (
    <img src={white} {...props} alt=".." />
  ) : (
    <img src={black} {...props} alt=".." />
  );
};

export default HomeSvg;
