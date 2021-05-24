import white from "../../img/follow_white.svg";
import black from "../../img/follow_black.svg";

const Following = (props) => {
  return props?.thm === "dark" ? (
    <img src={white} {...props} alt=".." />
  ) : (
    <img src={black} {...props} alt=".." />
  );
};

export default Following;
