import React, { Component } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import FavouriteCampaignItem from "./FavouriteCampaignItem";
import { Translations } from "../../../../lib/translations";
// import * as enumerations from "../../../../lib/constants/enumerations";
import { getFavouriteCampaigns } from "../../../../actions";
import { RightSidebarLoading, NoDataFoundRightSidebar } from "../../../ui-kit";

class FavouriteCampaigns extends Component {

  componentDidMount = () => {
    this.props.getFavouriteCampaigns();
  };

  render() {
    const { campaignData, isLoading } = this.props;
    const favouriteCampaign = campaignData && campaignData.favouriteCampaign ? campaignData.favouriteCampaign : [];
    const favouriteCampaigns = favouriteCampaign.slice(0, 5);
    return (
      <div>
        <div className="normal_title padding-15">
          {Translations.favourite_campaigns}
        </div>
        {!isLoading && (
          <div className="campaigns">
            {favouriteCampaigns.length > 0 ? (
              <Scrollbars
                style={{}}
                autoHeight
                autoHeightMin={0}
                autoHeightMax={500}
              >
                {favouriteCampaigns.map(campaign => {
                  return (
                    <FavouriteCampaignItem
                      campaign={campaign}
                      key={campaign.id}
                    />
                  );
                })}
              </Scrollbars>
            ) : (
              <NoDataFoundRightSidebar />
            )}
          </div>
        )}
        {isLoading && <RightSidebarLoading />}
      </div>
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    const next = nextProps.campaignData;
    const { campaignData } = this.props;
    const favouriteCampaign = campaignData && campaignData.favouriteCampaign ? campaignData.favouriteCampaign : [];
    if( next && next.favouriteCampaign && favouriteCampaign && JSON.stringify(next.favouriteCampaign) === JSON.stringify(favouriteCampaign)) {
      return false;
    }
    return true;
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
  isLoading: PropTypes.bool
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavouriteCampaigns);
