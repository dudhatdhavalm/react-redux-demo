import React, { Component } from "react";
import PropTypes from "prop-types";
import Name from "./Name";
import Description from "./Description";
import MarketValue from "./MarketValue";
import Unrealized from "./Unrealized";
import BuyAndSell from "./BuyAndSell";

class DisplayItem extends Component {
  render() {
    const { data } = this.props;
    return (
      <tr>
        <Name scrip={data.scrip} price={data.price} />
        <Description
          quantity={data.quantity}
          avg_cost={data.avg_cost}
          invested_amount={data.invested_amount}
        />
        <MarketValue
          price={data.price}
          quantity={data.quantity}
          portfolio={data.portfolio}
        />

        <Unrealized unrealized={data.unrealized} returnValue={data.return} />

        <BuyAndSell />
      </tr>
    );
  }
}

DisplayItem.propTypes = {
  data: PropTypes.object.isRequired
};

export default DisplayItem;
