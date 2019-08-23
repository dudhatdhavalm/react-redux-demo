import React from "react";
import PropTypes from "prop-types";
import ReturnBar from "../Common/ReturnBar/ReturnBar";
import classnames from "classnames";

const Unrealized = props => {
  const { unrealized, returnValue } = props;
  const floatReturnValue = parseFloat(returnValue);
  return (
    <td className="text-center bg-light">
      <div className="row description-value text-left">
        <div className="col-8">Unrealized P/L</div>
        <div className="col-4">${unrealized}</div>
      </div>
      <div className="row description-name text-left">
        <div className="col-8">% Return </div>
        <div className="col-4">
          {floatReturnValue > 0 ? (
            <i className="fas fa-caret-up text-success" />
          ) : (
            <i className="fas fa-caret-down text-danger" />
          )}{" "}
          {returnValue} %
        </div>
      </div>
      <div className="row">
        <div className="col">
          <ReturnBar returnValue={returnValue} />
        </div>
      </div>
    </td>
  );
};

Unrealized.propTypes = {
  unrealized: PropTypes.string.isRequired,
  returnValue: PropTypes.string.isRequired
};

export default Unrealized;
