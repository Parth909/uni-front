import white from "../../img/playlist_white.svg";
import black from "../../img/playlist_black.svg";

const PlaylistIcon = (props) => {
  return props?.thm === "dark" ? (
    <img src={white} {...props} alt=".." />
  ) : (
    <img src={black} {...props} alt=".." />
  );
};

export default PlaylistIcon;
