import React from "react";

const usePathHook = () => {
  const [path, setPath] = React.useState(null);

  React.useEffect(() => {
    setPath(window.location.pathname);
    console.log(window.location.pathname);
  }, [window.location.pathname]);

  return path && path;
};

export default usePathHook;
