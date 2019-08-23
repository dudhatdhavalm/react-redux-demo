import React from "react";
import PropTypes from "prop-types";
import MarketValueBar from "../Common/MarketValueBar/MarketValueBar";

const MarketValue = props => {
  const { quantity, price, portfolio } = props;
  return (
    <td className="text-center bg-light">
      <div className="row description-value text-left">
        <div className="col-7">Market Value</div>
        <div className="col-4">${quantity * price}</div>
      </div>
      <div className="row description-name text-left">
        <div className="col-7">% of portfolio value </div>
        <div className="col-4">{portfolio}%</div>
      </div>
      <div className="row">
        <div className="col-12 mt-2">
          <MarketValueBar value={portfolio} />
        </div>
      </div>
    </td>
  );
};

MarketValue.propTypes = {
  quantity: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  portfolio: PropTypes.string.isRequired
};

export default MarketValue;
