import React, { Component } from "react";
import ReportedSearchBar from "../ReportedSearchBar";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { CampaignLoading, RightSidebarStatistics } from "../../../ui-kit";
import * as enumerations from "../../../../lib/constants/enumerations";
import { AdCard } from "../../../misc";
import { getBackOfficeReview, getBackOfficeReviewStatistics } from "../../../../actions";
import { Translations } from "../../../../lib/translations";

class AdsPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      adList: null
    };
  }

  componentDidMount = () => {
    this.getBackOfficeReview();
    this.getBackOfficeReviewCampaignStatistics();
    this.getBackOfficeReviewAdStatistics();
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
    const { adList } = this.state;
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
              handleModalInfoDetailsCallbackShow={this.props.handleModalInfoDetailsCallbackShow}
              handleRemove={this.handleRemove}
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

  render() {
    const { adList } = this.state;
    const { isLoading, reviewData } = this.props;

    return (
      <div>
        <div className="padding-rl-10 middle-section margin-b-22">
          <ReportedSearchBar />
          {adList && this.renderAdList()}
          {!adList && isLoading && <CampaignLoading />}
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
}

const mapStateToProps = state => ({
  reviewData: state.reviewData,
  isLoading: state.reviewData.isLoading,
  error: state.reviewData.error
});

const mapDispatchToProps = {
  getBackOfficeReview,
  getBackOfficeReviewStatistics
};

AdsPage.propTypes = {
  getBackOfficeReview: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  reviewData: PropTypes.any,
  handleModalInfoDetailsCallbackShow: PropTypes.func,
  getBackOfficeReviewStatistics: PropTypes.func,
  // error: PropTypes.any
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdsPage);

