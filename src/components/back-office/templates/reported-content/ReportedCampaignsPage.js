import React, { Component } from "react";
import ReportedSearchBar from "../ReportedSearchBar";
import { getBackOfficeReportedContent } from "../../../../actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { CampaignLoading } from "../../../ui-kit";
import { CampaignCard } from "../../../misc";
import * as enumerations from "../../../../lib/constants/enumerations";

class ReportedCampaignsPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      campaignList: null
    };
  }

  componentDidMount = () => {
    this.props.getBackOfficeReportedContent("reportedContentCampaigns").then(()=> {
      if(this.props.reportedContentData && this.props.reportedContentData.reportedContentCampaigns) {
        this.setState({
          campaignList: this.props.reportedContentData.reportedContentCampaigns
        })
      }
    });
  };

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
              />
          )}
        </div>
      );
    });
  };

  render(){
    const { campaignList } = this.state;
    const { isLoading } = this.props;

    return (
      <div className="padding-rl-10 middle-section">
        <ReportedSearchBar />
          {campaignList && !isLoading && this.rendercampaigns()}
          {isLoading && <CampaignLoading />}
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
  getBackOfficeReportedContent
};

ReportedCampaignsPage.propTypes = {
  getBackOfficeReportedContent: PropTypes.func.isRequired,
  reportedContentData: PropTypes.object,
  isLoading: PropTypes.bool,
  // error: PropTypes.any
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReportedCampaignsPage);