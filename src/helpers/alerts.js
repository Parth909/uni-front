export const showSuccessMsg = (msg) => (
  <div className="alert alert-success" role="alert">
    {msg}
  </div>
);

export const showErrorMsg = (msg) => (
  <div className="alert alert-danger" role="alert">
    {msg}
  </div>
);
