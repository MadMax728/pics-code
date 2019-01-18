import React, { Component } from "react";
import { modalType } from "../../../../../lib/constants/enumerations";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import * as routes from "../../../../../lib/constants/routes";

class SettingCampaignRight extends Component {

  render() {
    return (
      <div>
        <div className="campaigns-right">
          <button className="blue_button" onClick={this.handleCreateCampaign}>
            Create campaign
          </button>
          <Link to={routes.INFORMATION_CAMPAIGN_ROUTE}>
            <button className="blue_button">What are campaigns? </button>
          </Link>
        </div>
      </div>
    );
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);
  };

  handleCreateCampaign = () => {
    this.props.handleModalShow(modalType.campaign);
  };
 
}

SettingCampaignRight.propTypes = {
  handleModalShow: PropTypes.func
};

export default SettingCampaignRight;
