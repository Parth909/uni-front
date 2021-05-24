import white from "../../img/videoOptns/down_arrow_white.svg";
import black from "../../img/videoOptns/down_arrow_black.svg";

const DownArrow = (props) => {
  return props?.thm === "dark" ? (
    <img src={white} {...props} alt=".." />
  ) : (
    <img src={black} {...props} alt=".." />
  );
};

export default DownArrow;
