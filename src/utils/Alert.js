import React from "react";
import { connect } from "react-redux";
import { removeAlert } from "../actions/alert";

const Alert = ({ alert, removeAlert }) => {
  const closeBtnRef = React.useRef(null);

  React.useEffect(() => {
    if (alert.msg.length > 0) {
      setTimeout(() => {
        closeBtnRef.current?.click(); // current can't be accessed when the modal is not visible so need to use *if condn*
        removeAlert(); // alert.msg is changed
      }, alert.timeout);
    }
  }, [alert.msg]);

  return (
    alert.msg.length > 0 && (
      <span className="mx-2" style={{ zIndex: "5000" }}>
        <div
          className={`alert ${alert.alertType} alert-dismissible fade show alert-bottom`}
          role="alert"
          style={{ color: "white" }}
        >
          {alert.msg}
          <button
            ref={closeBtnRef}
            type="button"
            className="btn-close mx-1"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      </span>
    )
  );
};

const mapStateToProps = (state) => ({
  alert: state.alert,
});

export default connect(mapStateToProps, { removeAlert })(Alert);
