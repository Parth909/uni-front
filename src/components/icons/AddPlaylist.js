import white from "../../img/videoOptns/add_playlist_white.svg";
import black from "../../img/videoOptns/add_playlist_black.svg";

const AddPlaylist = (props) => {
  return props?.thm === "dark" ? (
    <img src={white} {...props} alt=".." />
  ) : (
    <img src={black} {...props} alt=".." />
  );
};

export default AddPlaylist;
