import React from "react";
import DisplayItem from "./DisplayItem";
import PropTypes from "prop-types";

const DisplayItems = props => {
  const { dataList } = props;
  return dataList.map(data => <DisplayItem data={data} key={data.id} />);
};

DisplayItems.propTypes = {
  dataList: PropTypes.array.isRequired
};

export default DisplayItems;
