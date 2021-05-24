import white from "../../img/ham_white.svg";
import black from "../../img/ham_black.svg";

const Hamburger = (props) => {
  return props?.thm === "dark" ? (
    <img src={white} {...props} alt=".." />
  ) : (
    <img src={black} {...props} alt=".." />
  );
};

export default Hamburger;
