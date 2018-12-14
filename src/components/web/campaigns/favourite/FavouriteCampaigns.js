import React, {Component} from "react";
import FavouriteCampaignItem from "./FavouriteCampaignItem";
// import { campaignList && campaignList } from "../../../../mock-data";
import { Translations } from "../../../../lib/translations";
import * as enumerations from "../../../../lib/constants/enumerations";
import { getFavouriteCampaigns } from "../../../../actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class FavouriteCampaigns extends Component {
  componentDidMount = () => {
    this.props.getFavouriteCampaigns();
  };

  render() {
    return (
      <div>
        <div className="normal_title padding-15">
          {Translations.favourite_campaigns}
        </div>
        <div className="campaigns">
          {this.props.campaignData.favouriteCampaign && this.props.campaignData.favouriteCampaign.map(campaign => {
            return (
              (campaign.postType && campaign.postType.toLowerCase() === enumerations.contentTypes.companyCampaign ||
                campaign.postType.toLowerCase() ===
                  enumerations.contentTypes.creatorCampaign) && (
                <FavouriteCampaignItem campaign={campaign} key={campaign.id} />
              )
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  campaignData: state.campaignData,
  isLoading: state.campaignData.isLoading,
  error: state.campaignData.error
});

const mapDispatchToProps = {
  getFavouriteCampaigns
};

FavouriteCampaigns.propTypes = {
  getFavouriteCampaigns: PropTypes.func.isRequired,
  campaignData: PropTypes.object,
  isLoading: PropTypes.bool,
  // error: PropTypes.any
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavouriteCampaigns);
