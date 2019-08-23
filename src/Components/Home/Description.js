import React from "react";
import PropTypes from "prop-types";

const Description = props => {
  const { quantity, avg_cost, invested_amount } = props;
  return (
    <td className="text-center bg-light">
      <div className="row text-left">
        <div className="col-6 description-name">
          <i className="fas fa-at" /> Quantity
        </div>
        <div className="col-6 description-value">{quantity}</div>
      </div>
      <div className="row text-left">
        <div className="col-6 description-name">
          <i className="fas fa-at" /> Avg.Cost
        </div>
        <div className="col-6 description-value">${avg_cost}</div>
      </div>
      <div className="row text-left">
        <div className="col-6 description-name">
          <i className="fas fa-at" /> Invested Amt
        </div>
        <div className="col-6 description-value">${invested_amount}</div>
      </div>
    </td>
  );
};

Description.propTypes = {
  quantity: PropTypes.string.isRequired,
  avg_cost: PropTypes.string.isRequired,
  invested_amount: PropTypes.string.isRequired
};

export default Description;
