import React, { Component } from "react";
import ReportedSearchBar from "../ReportedSearchBar";
import { getBackOfficeReportedContent, getBackOfficeReportedStatistics, getSearch } from "../../../../actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { CampaignLoading, RightSidebarStatistics, NoDataFoundCenterPage } from "../../../ui-kit";
import { CampaignCard } from "../../../misc";
import * as enumerations from "../../../../lib/constants/enumerations";
import { Translations } from "../../../../lib/translations";
import { search } from "../../../../lib/utils/helpers";

class ReportedCampaignsPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      campaignList: null,
      isLoading: this.props.isLoading,
      isSearch: false,
      form: {
        search: ""
      }
     };
  }

  componentDidMount = () => {
    const data = {
      type: "get",
      reportContent: "Campaign"
    }
    this.setState({isLoading: true});
    this.getBackOfficeReportedContent(data);
    this.getBackOfficeReportedStatistics(data);
  };

  getBackOfficeReportedContent = (data) => {
    this.props.getBackOfficeReportedContent(data).then(()=> {
      if(this.props.reportedContentData && this.props.reportedContentData.Campaign) {
        this.setState({
          campaignList: this.props.reportedContentData.Campaign,
          isLoading: this.props.reportedContentData.isLoading
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
    let { campaignList, form } = this.state;
    const { searchData } = this.props;
    campaignList = search(campaignList, "userName", form.search  || searchData.searchKeyword);
    
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
      const data = {
        type: "get",
        reportContent: "Campaign"
      }
      this.setState({isLoading: true});
      this.getBackOfficeReportedContent(data);
      this.getBackOfficeReportedStatistics(data);
    }
  }

  render(){
    let { campaignList, form } = this.state;
    const { isLoading } = this.state;
    const { reportedContentData, searchData } = this.props;
    campaignList = search(campaignList, "userName", form.search  || searchData.searchKeyword);

    return (
      <div>
        <div className="padding-rl-10 middle-section">
          <ReportedSearchBar handleSearch={this.handleSearch} value={form.search} />
            {campaignList && this.rendercampaigns()}
            {!campaignList && isLoading && <CampaignLoading />}
            {campaignList && campaignList.length === 0 && <NoDataFoundCenterPage handleRefresh={this.handleRefresh} />}
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
  error: state.reportedContentData.error,
  searchData: state.searchData
});

const mapDispatchToProps = {
  getBackOfficeReportedContent,
  getBackOfficeReportedStatistics,
  getSearch
};

ReportedCampaignsPage.propTypes = {
  getBackOfficeReportedContent: PropTypes.func.isRequired,
  reportedContentData: PropTypes.object,
  isLoading: PropTypes.bool,
  handleModalInfoDetailsCallbackShow: PropTypes.func,
  getBackOfficeReportedStatistics: PropTypes.func,
  searchData: PropTypes.any,
  getSearch: PropTypes.func.isRequired
  // error: PropTypes.any
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReportedCampaignsPage);