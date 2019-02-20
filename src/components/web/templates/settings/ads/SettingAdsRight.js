import React, { Component } from "react";
import { modalType } from "../../../../../lib/constants/enumerations";
import * as routes from "../../../../../lib/constants/routes";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Translations } from "../../../../../lib/translations";
import { Button } from "../../../../ui-kit";

class SettingAdsRight extends Component {
  render() {
    return (
      <div>
        <div className="campaigns-right">
          <Button
            className="blue_button"
            onClick={this.handleCreateAds}
            text={Translations.create_ads.create_ad}
          />
          <Link to={routes.INFORMATION_ADVERTISING_ROUTE}>
            <Button
              className="blue_button"
              text={Translations.create_ads.what_are_ad}
            />
          </Link>
        </div>
      </div>
    );
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);
  };

  handleCreateAds = () => {
    this.props.handleModalShow(modalType.ads);
  };
}

SettingAdsRight.propTypes = {
  handleModalShow: PropTypes.func
};

export default SettingAdsRight;
