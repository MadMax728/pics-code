import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getAds } from "../../../../../actions";
import { CampaignLoading } from "../../../../ui-kit";
import { AdCard } from "../../../../misc";
import * as enumerations from "../../../../../lib/constants/enumerations";
import { Auth } from "../../../../../auth";

class AdsPage extends Component {

  render() {
    const { adList, isLoading } = this.props;
    
    return (
      <div className="padding-rl-10 middle-section">
        {adList && !isLoading && this.renderAdList()}
        {isLoading && <CampaignLoading />}
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
      const data = `${userInfo.id}?type=User`;
      this.props.getAds("getSettingsAds", data);
    }
    window.scrollTo(0, 0);
  };

  componentWillReceiveProps = nextProps => {
    if (
      nextProps.searchData.searchKeyword !== this.props.searchData.searchKeyword
    ) {
      const searchKeyword = nextProps.searchData.searchKeyword;
      let searchParam = "";
      if (searchKeyword) {
        searchParam = "?isSearch=" + searchKeyword;
      }
      this.props.getAds("getSettingsAds", searchParam);
    }
  };

  renderAdList = () => {
    const { adList, handleModalShow } = this.props;
    return adList.map(ad => {
      return (
        <div key={ad.id}>
          {ad.mediaUrl && ad.postType && ad.postType.toLowerCase() === enumerations.contentTypes.ad && (
            <AdCard item={ad} isDescription isInformation={false} isStatus handleModalShow={handleModalShow} />
          )}
        </div>
      );
    });
  };

}

AdsPage.propTypes = {
  getAds: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  adList: PropTypes.any,
  searchData: PropTypes.any,
  handleModalShow: PropTypes.func
  // error: PropTypes.any
};

const mapStateToProps = state => ({
  adList: state.adData.ads,
  isLoading: state.adData.isLoading,
  error: state.adData.error,
  searchData: state.searchData
});

const mapDispatchToProps = {
  getAds
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdsPage);
