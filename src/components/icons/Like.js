import white from "../../img/videoOptns/like_vid_white.svg";
import black from "../../img/videoOptns/like_vid_black.svg";

const Like = (props) => {
  return props?.thm === "dark" ? (
    <img src={white} {...props} alt=".." />
  ) : (
    <img src={black} {...props} alt=".." />
  );
};

export default Like;
