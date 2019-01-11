import React, {Component} from "react";
import ReportedSearchBar from "../ReportedSearchBar";
import { getBackOfficeReportedContent, getBackOfficeReportedStatistics } from "../../../../actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { CampaignLoading, RightSidebarStatistics } from "../../../ui-kit";
import { AdCard } from "../../../misc";
import * as enumerations from "../../../../lib/constants/enumerations";
import { Translations } from "../../../../lib/translations";
class ReportedAdsPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      adList: null,
      isLoading: this.props.isLoading,
      isSearch: false
    };
  }

  componentDidMount = () => {
    const data = {
      type: "get",
      reportContent: "Ads"
    }
    this.setState({isLoading: true});
    this.getBackOfficeReportedContent(data);
    this.getBackOfficeReportedStatistics(data);
  };


  getBackOfficeReportedContent = (data) => {
    this.props.getBackOfficeReportedContent(data).then(()=> {
      if(this.props.reportedContentData && this.props.reportedContentData.Ads) {
        this.setState({
          adList: this.props.reportedContentData.Ads,
          isLoading: this.props.reportedContentData.isLoading
        })
      }
    });
  }

  getBackOfficeReportedStatistics = (data) => {
    this.props.getBackOfficeReportedStatistics(data).then(()=> {
      if(this.props.reportedContentData && this.props.reportedContentData.AdsStatistics) {
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
        reportContent: "Ads"
      }
      this.setState({isSearch: false});
    }
    else {
      data = {
        type: "search",
        reportContent: "Ads",
        searchType: `${e.target.id}`
      }
      this.setState({isSearch: true});
    }
    this.getBackOfficeReportedContent(data);
  }
  
  handleRemove = (data) => {
    const { adList, isSearch } = this.state;
    if (isSearch)
    {
      this.setState({adList: adList.filter(e => e.id !== data)});
    }
  }


  renderAds = () => {
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

  render() {
    const { adList, isLoading } = this.state;
    const { reportedContentData } = this.props;

    return (
      <div>
        <div className="padding-rl-10 middle-section">
          <ReportedSearchBar />
            {adList && this.renderAds()}
            {!adList && isLoading && <CampaignLoading />}
        </div>
        <div className="right_bar no-padding">
          <RightSidebarStatistics 
            header={`Reported ${Translations.review_content_menu.ads}`} 
            handleEvent={this.handleReported} 
            all={reportedContentData.AdsStatistics? reportedContentData.AdsStatistics.all : 0} 
            outstanding={reportedContentData.AdsStatistics? reportedContentData.AdsStatistics.outstanding : 0}
            processed={reportedContentData.AdsStatistics? reportedContentData.AdsStatistics.processed : 0} 
            notProcessed={reportedContentData.AdsStatistics? reportedContentData.AdsStatistics.notProcessed : 0}
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

ReportedAdsPage.propTypes = {
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
)(ReportedAdsPage);