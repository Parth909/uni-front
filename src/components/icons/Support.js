import white from "../../img/videoOptns/support_white.svg";
import black from "../../img/videoOptns/support_black.svg";

const Support = (props) => {
  return props?.thm === "dark" ? (
    <img src={white} {...props} alt=".." />
  ) : (
    <img src={black} {...props} alt=".." />
  );
};
export default Support;
