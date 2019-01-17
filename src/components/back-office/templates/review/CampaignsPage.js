import React, { Component } from "react";
import ReportedSearchBar from "../ReportedSearchBar";
import { getBackOfficeReview, getBackOfficeReviewStatistics } from "../../../../actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { CampaignLoading, RightSidebarStatistics } from "../../../ui-kit";
import * as enumerations from "../../../../lib/constants/enumerations";
import { CampaignCard } from "../../../misc";
import { Translations } from "../../../../lib/translations";
import { search } from "../../../../lib/utils/helpers";

class CampaignsPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      campaignList: null,
      form: {
        search: ""
      }
    };
  }

  componentDidMount = () => {
    this.getBackOfficeReview();
    this.getBackOfficeReviewCampaignsStatistics();
    this.getBackOfficeReviewAdStatistics();
  };
  
  getBackOfficeReviewCampaignsStatistics = () => {
    const data = {
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
    this.props.getBackOfficeReview("Campaigns").then(()=> {
      if(this.props.reviewData && this.props.reviewData.Campaigns) {
        this.setState({
          campaignList: this.props.reviewData.Campaigns
        })
      }
    });
  }

  renderCampaignList = () => {
    let { campaignList, form } = this.state;
    campaignList = search(campaignList, "userName", form.search);
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

  handleSearch = (event) => {
    event.preventDefault();
    const { form } = this.state;
    form[event.target.name] = event.target.value;
    this.setState({ form });
  }

  render() {
    const { isLoading, reviewData } = this.props;
    let { campaignList, form } = this.state;
    campaignList = search(campaignList, "userName", form.search);

    return (
      <div>
        <div className="padding-rl-10 middle-section margin-b-22">
          <ReportedSearchBar handleSearch={this.handleSearch} value={form.search} />
          {campaignList && this.renderCampaignList()}
          {!campaignList && isLoading && <CampaignLoading />}
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

