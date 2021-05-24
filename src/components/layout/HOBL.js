import React from "react";
import BasicLayout from "./BasicLayout";

const HOBL = () => (WrappedComponent) => {
  return (WrappedComponentProps) => {
    return (
      <BasicLayout
        WComp={WrappedComponent}
        WCompProps={WrappedComponentProps}
      />
    );
  };
};

export default HOBL;
