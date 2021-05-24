import white from "../../img/videoOptns/share_vid_white.svg";
import black from "../../img/videoOptns/share_vid_black.svg";

const Share = (props) => {
  return props?.thm === "dark" ? (
    <img src={white} {...props} alt=".." />
  ) : (
    <img src={black} {...props} alt=".." />
  );
};

export default Share;
