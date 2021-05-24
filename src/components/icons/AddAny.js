import white from "../../img/videoOptns/add-any_white.svg";
import black from "../../img/videoOptns/add-any_black.svg";

const AddAny = (props) => {
  return props?.thm === "dark" ? (
    <img src={white} {...props} alt=".." />
  ) : (
    <img src={black} {...props} alt=".." />
  );
};

export default AddAny;
