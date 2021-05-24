import React from "react";
import { connect } from "react-redux";
import { removeAlert } from "../actions/alert";

const Modal = ({ alert, removeAlert }) => {
  // Note that all aria-* HTML attributes are fully supported in JSX. Whereas most DOM properties and attributes in React are camelCased, these attributes should be hyphen-cased (also known as kebab-case, lisp-case, etc) as they are in plain HTML:

  const triggerBtnRef = React.useRef(null);
  const closeBtnRef = React.useRef(null);

  React.useEffect(() => {
    if (alert.msg.length > 0) {
      console.log("clicked open");
      triggerBtnRef.current.click();

      setTimeout(() => {
        closeBtnRef.current.click(); // current can't be accessed when the modal is not visible so need to use *if condn*
        removeAlert(); // alert.msg is changed
      }, alert.timeout);
    }
  }, [alert.msg]);
  // Don't worry the alert *msg* will be there in the state since we have hardCoded it in the *initialState*

  return (
    alert?.msg?.length > 0 && (
      <div
        className="modal fade"
        id="alertModal"
        // tabIndex="-1"
        data-bs-focus="false"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        style={{ fontWeight: "500" }}
      >
        <div className="modal-dialog">
          <div
            className={`modal-content p-0 m-0 text-white ${alert?.alertType}`}
            style={{
              borderRadius: "10px !important",
              border: "0px !important",
            }}
          >
            <div
              className="modal-header"
              style={{
                padding: "13px",
              }}
            >
              <h6 className="modal-title" id="exampleModalLabel">
                {alert?.msg}
              </h6>
              <button
                ref={closeBtnRef}
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            {/* <div className="modal-body">...</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div> */}
          </div>
        </div>
        <button
          ref={triggerBtnRef}
          type="button"
          className="btn btn-primary d-none"
          data-bs-toggle="modal"
          data-bs-target="#alertModal"
        >
          {/* Set the modal content in the state */}
          Demo Modal which is not visible
        </button>
      </div>
    )
  );
};

const mapStateToProps = (state) => ({
  alert: state.alert,
});

export default connect(mapStateToProps, { removeAlert })(Modal);
