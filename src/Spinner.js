import React from "react";
import "./Spinner.css";

const Spinner = props => {
  return (
    <div className="mx-auto text-center">
      <div className="spinner-border" role="status">
        <span className="sr-only" />
      </div>
      <div>{props.message}</div>
    </div>
  );
};

Spinner.defaultProps = {
  message: "Snatching your first cat..."
};

export default Spinner;
