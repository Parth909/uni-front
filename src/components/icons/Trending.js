import white from "../../img/trending_white.svg";
import black from "../../img/trending_black.svg";

const Trending = (props) => {
  return props?.thm === "dark" ? (
    <img src={white} {...props} alt=".." />
  ) : (
    <img src={black} {...props} alt=".." />
  );
};
export default Trending;
