import React, { Component } from "react";
import { modalType } from "../../../../../lib/constants/enumerations";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import * as routes from "../../../../../lib/constants/routes";

class SettingCampaignRight extends Component {
  handleCreateCampaign = () => {
    this.props.handleModalShow(modalType.campaign);
  };

  render() {
    return (
      <div>
        <div className="campaigns-right">
          <button className="blue_button" onClick={this.handleCreateCampaign}>
            Create campaign
          </button>
          <Link to={routes.SETTINGS_CAMPAIGN_INFORMATION_ROUTE}>
            <button className="blue_button">What are campaigns? </button>
          </Link>
        </div>
      </div>
    );
  }
}

SettingCampaignRight.propTypes = {
  handleModalShow: propTypes.func
};

export default SettingCampaignRight;
