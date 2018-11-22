import React, { Component } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import { getAds } from "../../../../../actions";
import { CampaignLoading } from "../../../../ui-kit";
import { AdCard } from "../../../misc";
import * as enumerations from "../../../../../lib/constants/enumerations";

class AdsPage extends Component {
  componentDidMount = () => {
    this.props.getAds("getSettingsAds");
  };

  renderAdList = () => {
    const { adList } = this.props;
    return adList.map(ad => {
      return (
        <div key={ad.id}>
          {ad.type === enumerations.contentTypes.ad && (
            <AdCard item={ad} isDescription isInformation={false} isStatus />
          )}
        </div>
      );
    });
  };

  render() {
    const { adList, isLoading } = this.props;

    return (
      <div className="padding-rl-10 middle-section">
        {adList && !isLoading && this.renderAdList()}
        {isLoading && <CampaignLoading />}
      </div>
    );
  }
}

AdsPage.propTypes = {
  getAds: propTypes.func.isRequired,
  isLoading: propTypes.bool.isRequired,
  adList: propTypes.any,
  error: propTypes.any
};

const mapStateToProps = state => ({
  adList: state.adData.ads,
  isLoading: state.adData.isLoading,
  error: state.adData.error
});

const mapDispatchToProps = {
  getAds
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdsPage);
