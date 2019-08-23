import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../../Actions/HomeActions";
import Spinner from "../Common/Spinner";
import PropTypes from "prop-types";
import DisplayItems from "./DisplayItems";
import "./Home.css";

class Home extends Component {
  render() {
    const { isLoading, data } = this.props.homeReducer;

    let homeContent;

    if (isLoading === true || data === null) {
      homeContent = <Spinner />;
    } else {
      homeContent = (
        <table className="table">
          <tbody>
            <DisplayItems dataList={data} />
          </tbody>
        </table>
      );
    }

    return (
      <div className="fluid-container">
        <div className="row">
          <div className="col-12">{homeContent}</div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.props.getData();
  }
}

Home.propTypes = {
  homeReducer: PropTypes.object.isRequired,
  getData: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  homeReducer: state.homeReducer
});

const mapDispatchToProps = {
  getData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
