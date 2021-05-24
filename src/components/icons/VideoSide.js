import white from "../../img/video_white.svg";
import black from "../../img/video_black.svg";

const VideoSide = (props) => {
  return props?.thm === "dark" ? (
    <img src={white} {...props} alt=".." />
  ) : (
    <img src={black} {...props} alt=".." />
  );
};

export default VideoSide;
