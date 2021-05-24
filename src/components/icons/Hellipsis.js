import white from "../../img/videoOptns/hellipsis_white.svg";
import black from "../../img/videoOptns/hellipsis_black.svg";

const Hellipsis = (props) => {
  return props?.thm === "dark" ? (
    <img src={white} {...props} alt=".." />
  ) : (
    <img src={black} {...props} alt=".." />
  );
};

export default Hellipsis;
