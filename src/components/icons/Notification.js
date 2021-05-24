import white from "../../img/notification_white.svg";
import black from "../../img/notification_black.svg";

const Notification = (props) => {
  return props?.thm === "dark" ? (
    <img src={white} {...props} alt=".." />
  ) : (
    <img src={black} {...props} alt=".." />
  );
};

export default Notification;
