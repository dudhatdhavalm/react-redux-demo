import React from "react";
import spinnerGIF from "../../Assets/spinner.gif";

const Spinner = () => {
  return (
    <div>
      <img
        src={spinnerGIF}
        style={{ width: 75 }}
        className="d-block mx-auto p-3"
      />
    </div>
  );
};

export default Spinner;
