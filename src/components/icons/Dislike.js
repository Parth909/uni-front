import white from "../../img/videoOptns/dislike_vid_white.svg";
import black from "../../img/videoOptns/dislike_vid_black.svg";

const Dislike = (props) => {
  return props?.thm === "dark" ? (
    <img src={white} {...props} alt=".." />
  ) : (
    <img src={black} {...props} alt=".." />
  );
};

export default Dislike;
