import white from "../../img/savedposts_white.svg";
import black from "../../img/savedposts_black.svg";

const SavedPosts = (props) => {
  return props?.thm === "dark" ? (
    <img src={white} {...props} alt=".." />
  ) : (
    <img src={black} {...props} alt=".." />
  );
};

export default SavedPosts;
