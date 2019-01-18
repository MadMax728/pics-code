import React, { Component } from "react";
import FavouriteCampaignItem from "./FavouriteCampaignItem";
// import { campaignList && campaignList } from "../../../../mock-data";
import { Translations } from "../../../../lib/translations";
import * as enumerations from "../../../../lib/constants/enumerations";
import { getFavouriteCampaigns } from "../../../../actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { RightSidebarLoading } from "../../../ui-kit";

class FavouriteCampaigns extends Component {

  render() {
    const { isLoading } = this.props;
    return (
      <div>
        <div className="normal_title padding-15">
          {Translations.favourite_campaigns}
        </div>
        {
          !isLoading && (
            <div className="campaigns">
              {this.props.campaignData.favouriteCampaign &&
                this.props.campaignData.favouriteCampaign.map(campaign => {
                  return (
                    ((campaign.postType &&
                      campaign.postType.toLowerCase() ===
                        enumerations.contentTypes.companyCampaign) ||
                      campaign.postType.toLowerCase() ===
                        enumerations.contentTypes.creatorCampaign) && (
                      <FavouriteCampaignItem
                        campaign={campaign}
                        key={campaign.id}
                      />
                    )
                  );
                })}
            </div>
          )
        }
        {
          isLoading && (
            <RightSidebarLoading />
          )
        }
       
      </div>
    );
  }
  
  componentDidMount = () => {
    this.props.getFavouriteCampaigns("", "");
  };

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.searchData.searchKeyword !== this.props.searchData.searchKeyword
    ) {
      const searchKeyword = nextProps.searchData.searchKeyword;
      if (searchKeyword) {
        const searchParam = "?isSearch=" + searchKeyword;
        this.props.getFavouriteCampaigns("", searchParam);
      }
    }
  }

}

const mapStateToProps = state => ({
  campaignData: state.campaignData,
  isLoading: state.campaignData.isLoading,
  searchData: state.searchData,
  error: state.campaignData.error
});

const mapDispatchToProps = {
  getFavouriteCampaigns
};

FavouriteCampaigns.propTypes = {
  getFavouriteCampaigns: PropTypes.func.isRequired,
  campaignData: PropTypes.object,
  isLoading: PropTypes.bool,
  searchData: PropTypes.any
  // error: PropTypes.any
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavouriteCampaigns);
