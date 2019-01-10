import React, { Component } from "react";
import ReportedSearchBar from "../ReportedSearchBar";
import { getBackOfficeReportedContent, getBackOfficeReportedStatistics } from "../../../../actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { CampaignLoading, RightSidebarStatistics } from "../../../ui-kit";
import { CampaignCard } from "../../../misc";
import * as enumerations from "../../../../lib/constants/enumerations";
import { Translations } from "../../../../lib/translations";

class ReportedCampaignsPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      campaignList: null,
      isLoading: this.props.isLoading,
      isSearch: false
     };
  }

  componentDidMount = () => {
    const data = {
      type: "get",
      reportContent: "Campaign"
    }
    this.getBackOfficeReportedContent(data);
    this.getBackOfficeReportedStatistics(data);
  };

  getBackOfficeReportedContent = (data) => {
    this.props.getBackOfficeReportedContent(data).then(()=> {
      if(this.props.reportedContentData && this.props.reportedContentData.Campaign) {
        this.setState({
          campaignList: this.props.reportedContentData.Campaign
        })
      }
    });
  }

  getBackOfficeReportedStatistics = (data) => {
    this.props.getBackOfficeReportedStatistics(data).then(()=> {
      if(this.props.reportedContentData && this.props.reportedContentData.CampaignStatistics) {
        // success
      }
    });
  }

  handleReported = (e) => {
    let data;
    if (e.target.id === "All")
    {
      data ={
        type: "get",
        reportContent: "Campaign"
      }
      this.setState({isSearch: false});
    }
    else {
      data = {
        type: "search",
        reportContent: "Campaign",
        searchType: `${e.target.id}`
      }
      this.setState({isSearch: true});
    }
    this.getBackOfficeReportedContent(data);
  }
  
  handleRemove = (data) => {
    const { campaignList, isSearch } = this.state;
    if (isSearch)
    {
      this.setState({campaignList: campaignList.filter(e => e.id !== data)});
    }
  }

  rendercampaigns = () => {
    const { campaignList } = this.state;
    return campaignList.map(campaign => {
      return (
        <div key={campaign.id}>
          {campaign.postType && campaign.postType.toLowerCase() === enumerations.contentTypes.companyCampaign ||
          campaign.postType.toLowerCase() === enumerations.contentTypes.creatorCampaign
          &&
          (
            <CampaignCard 
              item={campaign} 
              isDescription={false}
              isInformation
              isStatus={false}
              isBudget={false}
              isReport
              isBackOffice 
              handleModalInfoDetailsCallbackShow={this.props.handleModalInfoDetailsCallbackShow}
              handleRemove={this.handleRemove}
              />
          )}
        </div>
      );
    });
  };

  render(){
    const { campaignList, isLoading } = this.state;
    const { reportedContentData } = this.props;

    return (
      <div>
        <div className="padding-rl-10 middle-section">
          <ReportedSearchBar />
            {campaignList && this.rendercampaigns()}
            {!campaignList && isLoading && <CampaignLoading />}
        </div>
        <div className="right_bar no-padding">
          <RightSidebarStatistics 
            header={`Reported ${Translations.review_content_menu.campaigns}`} 
            handleEvent={this.handleReported} 
            all={reportedContentData.CampaignStatistics? reportedContentData.CampaignStatistics.all : 0} 
            outstanding={reportedContentData.CampaignStatistics? reportedContentData.CampaignStatistics.outstanding : 0}
            processed={reportedContentData.CampaignStatistics? reportedContentData.CampaignStatistics.processed : 0} 
            notProcessed={reportedContentData.CampaignStatistics? reportedContentData.CampaignStatistics.notProcessed : 0}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  reportedContentData: state.reportedContentData,
  isLoading: state.reportedContentData.isLoading,
  error: state.reportedContentData.error
});

const mapDispatchToProps = {
  getBackOfficeReportedContent,
  getBackOfficeReportedStatistics
};

ReportedCampaignsPage.propTypes = {
  getBackOfficeReportedContent: PropTypes.func.isRequired,
  reportedContentData: PropTypes.object,
  isLoading: PropTypes.bool,
  handleModalInfoDetailsCallbackShow: PropTypes.func,
  getBackOfficeReportedStatistics: PropTypes.func,
  // error: PropTypes.any
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReportedCampaignsPage);