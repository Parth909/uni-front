import React from "react";

const ContentModal = (props) => (WrappedComponent) => {
  // These are the props of WrappedComponent
  return (wrappedComponentProps) => {
    return (
      <div>
        <div
          className="modal fade"
          id="contentModal"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="contentModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            {/* <div className="modal-content bg-dark text-white"> */}
            <div className="modal-content">
              <div className="modal-body p-2">
                <WrappedComponent {...wrappedComponentProps} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default ContentModal;
