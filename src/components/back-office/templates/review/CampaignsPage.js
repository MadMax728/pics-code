import React, { Component } from "react";
import ReportedSearchBar from "../ReportedSearchBar";
import { getBackOfficeReview, getBackOfficeReviewStatistics } from "../../../../actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { CampaignLoading, RightSidebarStatistics } from "../../../ui-kit";
import * as enumerations from "../../../../lib/constants/enumerations";
import { CampaignCard } from "../../../misc";
import { Translations } from "../../../../lib/translations";

class CampaignsPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      campaignList: null
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
    this.props.getBackOfficeReview("Campaigns").then(()=> {
      if(this.props.reviewData && this.props.reviewData.Campaigns) {
        this.setState({
          campaignList: this.props.reviewData.Campaigns
        })
      }
    });
  }

  renderCampaignList = () => {
    const { campaignList } = this.state;
    return campaignList.map(campaign => {
      return (
        <div key={campaign.id}>
          {(campaign.postType.toLowerCase() === enumerations.contentTypes.companyCampaign ||
            campaign.postType.toLowerCase() ===
              enumerations.contentTypes.creatorCampaign) && (
            <CampaignCard
              item={campaign}
              isDescription={false}
              isInformation
              isStatus={false}
              isBudget
              isReport={false}
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
    const { campaignList, isSearch } = this.state;
    if (isSearch)
    {
      this.setState({campaignList: campaignList.filter(e => e.id !== data)});
    }
  }
  
  handleReported = () => {}

  render() {
    const { isLoading, reviewData } = this.props;
    const { campaignList } = this.state;
    return (
      <div>
        <div className="padding-rl-10 middle-section margin-b-22">
          <ReportedSearchBar />
          {campaignList && this.renderCampaignList()}
          {!campaignList && isLoading && <CampaignLoading />}
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

CampaignsPage.propTypes = {
  getBackOfficeReview: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  handleModalInfoDetailsCallbackShow: PropTypes.func,
  getBackOfficeReviewStatistics: PropTypes.func,
  reviewData: PropTypes.object,
  // error: PropTypes.any
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampaignsPage);

