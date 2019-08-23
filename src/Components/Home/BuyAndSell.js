import React from "react";

export default function BuyAndSell() {
  return (
    <td className="text-center bg-light">
      <div className="row">
        <div className="col-12">
          <button className="btn btn-outline-warning font-weight-bold">
            BUY
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-12 mt-2">
          <button className="btn btn-outline-warning font-weight-bold">
            SELL
          </button>
        </div>
      </div>
    </td>
  );
}
