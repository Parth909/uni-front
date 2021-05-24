import white from "../../img/videoOptns/report_white.svg";
import black from "../../img/videoOptns/report_black.svg";

const Report = (props) => {
  return props?.thm === "dark" ? (
    <img src={white} {...props} alt=".." />
  ) : (
    <img src={black} {...props} alt=".." />
  );
};
export default Report;
