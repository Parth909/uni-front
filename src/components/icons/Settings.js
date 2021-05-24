import white from "../../img/settings_white.svg";
import black from "../../img/settings_black.svg";

const Settings = (props) => {
  return props?.thm === "dark" ? (
    <img src={white} {...props} alt=".." />
  ) : (
    <img src={black} {...props} alt=".." />
  );
};

export default Settings;
