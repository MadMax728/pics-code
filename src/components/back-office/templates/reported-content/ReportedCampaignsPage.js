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
      statistics: [
        {
          name: Translations.right_side_bar_statistics.all,
          id: "All",
          value: 0
        },
        {
          name: Translations.right_side_bar_statistics.outstanding,
          id: "Outstanding",
          value: 0
        },
        {
          name: Translations.right_side_bar_statistics.processed,
          id: "Processed",
          value: 0
        },
        {
          name: Translations.right_side_bar_statistics.not_processed,
          id: "NotProcessed",
          value: 0
        }
      ]
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
        this.setState({
          statistics: [
            {
              name: Translations.right_side_bar_statistics.all,
              id: "All",
              value: this.props.reportedContentData.CampaignStatistics.all
            },
            {
              name: Translations.right_side_bar_statistics.outstanding,
              id: "Outstanding",
              value: this.props.reportedContentData.CampaignStatistics.outstanding
            },
            {
              name: Translations.right_side_bar_statistics.processed,
              id: "Processed",
              value: this.props.reportedContentData.CampaignStatistics.processed
            },
            {
              name: Translations.right_side_bar_statistics.not_processed,
              id: "NotProcessed",
              value: this.props.reportedContentData.CampaignStatistics.notProcessed
            }
          ]
        })
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
    }
    else {
      data = {
        type: "search",
        reportContent: "Campaign",
        searchType: `${e.target.id}`
      }
    }
    this.getBackOfficeReportedContent(data);
  }
  

  rendercampaigns = () => {
    const { campaignList } = this.state;
    console.log(campaignList);
    
    return campaignList.map(campaign => {
      console.log(campaign.postType && campaign.postType.toLowerCase() === enumerations.contentTypes.companyCampaign ||
      campaign.postType.toLowerCase() === enumerations.contentTypes.creatorCampaign);
      
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
              />
          )}
        </div>
      );
    });
  };

  render(){
    const { campaignList, statistics } = this.state;
    const { isLoading } = this.props;

    return (
      <div>
        <div className="padding-rl-10 middle-section">
          <ReportedSearchBar />
            {campaignList && this.rendercampaigns()}
            {!campaignList && isLoading && <CampaignLoading />}
        </div>
        <div className="right_bar no-padding">
          <RightSidebarStatistics header={`Reported ${Translations.review_content_menu.campaigns}`} statistics={statistics} handleEvent={this.handleReported} />
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