import white from "../../img/upload_white.svg";
import black from "../../img/upload_black.svg";

const Uploads = (props) => {
  return props?.thm === "dark" ? (
    <img src={white} {...props} alt=".." />
  ) : (
    <img src={black} {...props} alt=".." />
  );
};
export default Uploads;
