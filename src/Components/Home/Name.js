import React from "react";
import PropTypes from "prop-types";

const Name = props => {
  const { scrip, price } = props;

  return (
    <td className="text-center bg-light">
      <div className="name"> {scrip} </div>
      <div className="price">
        $ <span className="price-value">{price}</span>
      </div>
    </td>
  );
};

Name.propTypes = {
  scrip: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
};

export default Name;
