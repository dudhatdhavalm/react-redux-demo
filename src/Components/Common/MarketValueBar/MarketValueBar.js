import React from "react";
import "./MarketValueBar.css";

const MarketValueBar = props => {
  const { value } = props;
  const per = value + "%";
  return (
    <div className="bar">
      <div className="bar-progress" style={{ width: per }} />
    </div>
  );
};

export default MarketValueBar;
