import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getBackOfficeReview, getBackOfficeReviewStatistics, getSearch } from "../../../../actions";

import ReportedSearchBar from "../ReportedSearchBar";
import { CampaignLoading, RightSidebarStatistics, NoDataFoundCenterPage } from "../../../ui-kit";
import { AdCard } from "../../../misc";

import { Translations } from "../../../../lib/translations";
import * as enumerations from "../../../../lib/constants/enumerations";
import { search } from "../../../../lib/utils/helpers";

class AdsPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      adList: null,
      form: {
        search: ""
      }
    };
  }

  render() {
    let { adList, form } = this.state;
    const { isLoading, reviewData, searchData } = this.props;
    adList = search(adList, "userName", form.search || searchData.searchKeyword);

    return (
      <div>
        <div className="padding-rl-10 middle-section margin-b-22">
          <ReportedSearchBar handleSearch={this.handleSearch} value={form.search} />
          {adList && this.renderAdList()}
          {!adList && isLoading && <CampaignLoading />}
          {adList && adList.length === 0 && <NoDataFoundCenterPage handleRefresh={this.handleRefresh} />}
        </div>
        <div className="right_bar no-padding">
          <RightSidebarStatistics 
            header={`Reported ${Translations.review_content_menu.campaigns}`} 
            handleEvent={this.handleReported} 
            all={reviewData.CampaignsStatistics? reviewData.CampaignsStatistics.all : 0} 
            outstanding={reviewData.CampaignsStatistics? reviewData.CampaignsStatistics.outstanding : 0}
            processed={reviewData.CampaignsStatistics? reviewData.CampaignsStatistics.processed : 0} 
            notProcessed={reviewData.CampaignsStatistics? reviewData.CampaignsStatistics.notProcessed : 0}
          />
          <RightSidebarStatistics 
            header={`Reported ${Translations.review_content_menu.ads}`} 
            handleEvent={this.handleReported} 
            all={reviewData.AdvertisementStatistics? reviewData.AdvertisementStatistics.all : 0} 
            outstanding={reviewData.AdvertisementStatistics? reviewData.AdvertisementStatistics.outstanding : 0}
            processed={reviewData.AdvertisementStatistics? reviewData.AdvertisementStatistics.processed : 0} 
            notProcessed={reviewData.AdvertisementStatistics? reviewData.AdvertisementStatistics.notProcessed : 0}
          />
        </div>
      </div>
    );
  }

  componentDidMount = () => {
    this.getBackOfficeReview();
    this.getBackOfficeReviewCampaignStatistics();
    this.getBackOfficeReviewAdStatistics();
    const { searchData, getSearch } = this.props;
    if (searchData.searchKeyword) {
      getSearch("");
    }
  };

  getBackOfficeReviewCampaignStatistics = () => {
    const data = {
      type: "get",
      reportContent: "Campaigns"
    }
    this.props.getBackOfficeReviewStatistics(data).then(()=> {
      if(this.props.reviewData && this.props.reviewData.CampaignsStatistics) {
        // success
      }
    });
  }

  getBackOfficeReviewAdStatistics = () => {
    const data = {
      type: "get",
      reportContent: "Advertisement"
    }
    this.props.getBackOfficeReviewStatistics(data).then(()=> {
      if(this.props.reviewData && this.props.reviewData.AdvertisementStatistics) {
        // success
      }
    });
  }
  
  getBackOfficeReview = () => {
    this.props.getBackOfficeReview("Ads").then(()=> {
      if(this.props.reviewData && this.props.reviewData.Ads) {
        this.setState({
          adList: this.props.reviewData.Ads
        })
      }
    });
  }  

  renderAdList = () => {
    let { adList, form } = this.state;
    const { searchData, handleModalShow, handleModalInfoDetailsCallbackShow } = this.props;

    adList = search(adList, "userName", form.search || searchData.searchKeyword);
    return adList.map(ad => {
      return (
        <div key={ad.id}>
          {ad.postType && ad.postType.toLowerCase() === enumerations.contentTypes.ad && (
            <AdCard
              item={ad}
              isDescription
              isInformation={false}
              isStatus={false}
              isReview
              isBackOffice 
              handleModalInfoDetailsCallbackShow={handleModalInfoDetailsCallbackShow}
              handleRemove={this.handleRemove}
              handleModalShow={handleModalShow}
            />
          )}
        </div>
      );
    });
  };

  handleRemove = (data) => {
    const { adList, isSearch } = this.state;
    if (isSearch)
    {
      this.setState({adList: adList.filter(e => e.id !== data)});
    }
  }
  
  handleReported = () => {}

  handleSearch = (event) => {
    event.preventDefault();
    const { form } = this.state;
    form[event.target.name] = event.target.value;
    this.setState({ form });
  }

  handleRefresh = () => {
    const { searchData, getSearch } = this.props;
    if (searchData.searchKeyword) {
      getSearch("");
      this.getBackOfficeReview();
      this.getBackOfficeReviewCampaignsStatistics();
      this.getBackOfficeReviewAdStatistics();
    }
  }
}

const mapStateToProps = state => ({
  reviewData: state.reviewData,
  isLoading: state.reviewData.isLoading,
  error: state.reviewData.error,
  searchData: state.searchData
});

const mapDispatchToProps = {
  getBackOfficeReview,
  getBackOfficeReviewStatistics,
  getSearch
};

AdsPage.propTypes = {
  getBackOfficeReview: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  reviewData: PropTypes.any,
  handleModalInfoDetailsCallbackShow: PropTypes.func,
  getBackOfficeReviewStatistics: PropTypes.func,
  getSearch: PropTypes.func.isRequired,
  searchData: PropTypes.any,
  handleModalShow: PropTypes.func
  // error: PropTypes.any
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdsPage);

