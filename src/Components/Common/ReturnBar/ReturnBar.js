import React, { Component } from "react";
import "./ReturnBar.css";

class ReturnBar extends Component {
  positiveClass = () => {};

  nagativeClass = () => {};

  render() {
    const { returnValue } = this.props;
    let leftStyle = {};
    let rightStyle = {};
    let barStyle = {};
    const intReturnValue = parseInt(returnValue);
    console.log(intReturnValue);
    console.log((100 - intReturnValue) / 2 + "%");
    const absIntReturnValue = Math.abs(intReturnValue);
    if (intReturnValue > 0) {
      leftStyle = {
        backgroundColor: "gray",
        width: "50%"
      };

      rightStyle = {
        backgroundColor: "gray",
        width: (100 - absIntReturnValue) / 2 + "%"
      };

      barStyle = {
        backgroundColor: "green"
      };
    } else {
      leftStyle = {
        backgroundColor: "gray",
        width: (100 - absIntReturnValue) / 2 + "%"
      };

      rightStyle = {
        backgroundColor: "gray",
        width: "50%"
      };

      barStyle = {
        backgroundColor: "red"
      };
    }

    return (
      <div className="returnBar" style={barStyle}>
        <div className="returnNagbar" style={leftStyle} />
        <div className="returnPosbar" style={rightStyle} />
      </div>
    );
  }
}

export default ReturnBar;
