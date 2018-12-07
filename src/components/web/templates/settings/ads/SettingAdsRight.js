import React, { Component } from "react";
import { modalType } from "../../../../../lib/constants/enumerations";
import * as routes from "../../../../../lib/constants/routes";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class SettingAdsRight extends Component {
  handleCreateAds = () => {
    this.props.handleModalShow(modalType.ads);
  };

  render() {
    return (
      <div>
        <div className="campaigns-right">
          <button className="blue_button" onClick={this.handleCreateAds}>
            Create ad
          </button>
          <Link to={routes.INFORMATION_ADVERTISING_ROUTE}>
            <button className="blue_button">What are ads? </button>
          </Link>
        </div>
      </div>
    );
  }
}

SettingAdsRight.propTypes = {
  handleModalShow: PropTypes.func
};

export default SettingAdsRight;
