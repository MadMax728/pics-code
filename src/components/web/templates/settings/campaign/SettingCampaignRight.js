import React, { Component } from "react";
import { modalType } from "../../../../../lib/constants/enumerations";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import * as routes from "../../../../../lib/constants/routes";
import { Button } from "../../../../ui-kit";
import { Translations } from "../../../../../lib/translations";
class SettingCampaignRight extends Component {
  render() {
    return (
      <div>
        <div className="campaigns-right">
          <Button
            className="blue_button"
            onClick={this.handleCreateCampaign}
            text={Translations.create_campaigns.create_campaign}
          />
          <Link to={routes.INFORMATION_CAMPAIGN_ROUTE}>
            <Button
              className="blue_button"
              text={Translations.create_campaigns.what_are_campaign}
            />
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
