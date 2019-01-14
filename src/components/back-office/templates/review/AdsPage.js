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
      reportContent: "Campaign"
    }
    this.props.getBackOfficeReviewStatistics(data).then(()=> {
      if(this.props.reviewData && this.props.reviewData.CampaignStatistics) {
        // success
      }
    });
  }

  getBackOfficeReviewAdStatistics = () => {
    const data = {
      type: "get",
      reportContent: "Ads"
    }
    this.props.getBackOfficeReviewStatistics(data).then(()=> {
      if(this.props.reviewData && this.props.reviewData.AdsStatistics) {
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
            all={reviewData.CampaignStatistics? reviewData.CampaignStatistics.all : 0} 
            outstanding={reviewData.CampaignStatistics? reviewData.CampaignStatistics.outstanding : 0}
            processed={reviewData.CampaignStatistics? reviewData.CampaignStatistics.processed : 0} 
            notProcessed={reviewData.CampaignStatistics? reviewData.CampaignStatistics.notProcessed : 0}
          />
          <RightSidebarStatistics 
            header={`Reported ${Translations.review_content_menu.ads}`} 
            handleEvent={this.handleReported} 
            all={reviewData.AdsStatistics? reviewData.AdsStatistics.all : 0} 
            outstanding={reviewData.AdsStatistics? reviewData.AdsStatistics.outstanding : 0}
            processed={reviewData.AdsStatistics? reviewData.AdsStatistics.processed : 0} 
            notProcessed={reviewData.AdsStatistics? reviewData.AdsStatistics.notProcessed : 0}
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

