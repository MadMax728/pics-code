import React, { Component } from "react";
import FavouriteCampaignItem from "./FavouriteCampaignItem";
import { Translations } from "../../../../lib/translations";
// import * as enumerations from "../../../../lib/constants/enumerations";
import { getFavouriteCampaigns } from "../../../../actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { RightSidebarLoading, NoDataFoundRightSidebar } from "../../../ui-kit";
import { Auth } from "../../../../auth";
import { Scrollbars } from "react-custom-scrollbars";

class FavouriteCampaigns extends Component {
  render() {
    const { isLoading } = this.props;
    const height = window.innerHeight;
    return (
     
      <div>
        <div className="normal_title padding-15">
          {Translations.favourite_campaigns}
        </div>
        {!isLoading && (
           <Scrollbars style={{}} autoHeight autoHeightMin={0}
           autoHeightMax={500}>
          <div className="campaigns">
            {
              this.props.campaignData &&
              this.props.campaignData.favouriteCampaign &&
              this.props.campaignData.favouriteCampaign.length > 0 ? (
              this.props.campaignData.favouriteCampaign.map(campaign => {
                return (
                    <FavouriteCampaignItem
                      campaign={campaign}
                      key={campaign.id}
                    />
                );
              })
            ) : (
              <NoDataFoundRightSidebar />
            )}
          </div>
          </Scrollbars>
        )}
        {isLoading && <RightSidebarLoading />}
      </div>
    );
  }

  componentDidMount = () => {
    const storage = Auth.extractJwtFromStorage();
    let userInfo = null;
    if (storage) {
      userInfo = JSON.parse(storage.userInfo);
    }
    if (userInfo) {
      const data = userInfo.id;
      this.props.getFavouriteCampaigns(data);
    }
  };

  // componentWillReceiveProps(nextProps) {
  //   if (
  //     nextProps.searchData.searchKeyword !== this.props.searchData.searchKeyword
  //   ) {
  //     const searchKeyword = nextProps.searchData.searchKeyword;
  //     if (searchKeyword) {
  //       const searchParam = "?isSearch=" + searchKeyword;
  //       this.props.getFavouriteCampaigns("", searchParam);
  //     }
  //   }
  // }
}

const mapStateToProps = state => ({
  campaignData: state.campaignData,
  isLoading: state.campaignData.isLoading,
  // searchData: state.searchData,
  error: state.campaignData.error
});

const mapDispatchToProps = {
  getFavouriteCampaigns
};

FavouriteCampaigns.propTypes = {
  getFavouriteCampaigns: PropTypes.func.isRequired,
  campaignData: PropTypes.object,
  isLoading: PropTypes.bool,
  // searchData: PropTypes.any
  // error: PropTypes.any
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavouriteCampaigns);
