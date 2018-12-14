import React, {Component} from "react";
import ReportedSearchBar from "../ReportedSearchBar";
import { getBackOfficeReportedContent } from "../../../../actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { CampaignLoading } from "../../../ui-kit";
import { AdCard } from "../../../misc";
import * as enumerations from "../../../../lib/constants/enumerations";

class ReportedAdsPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      adList: null
    };
  }

  componentDidMount = () => {
    this.props.getBackOfficeReportedContent("reportedContentAds").then(()=> {
      if(this.props.reportedContentData && this.props.reportedContentData.reportedContentAds) {
        this.setState({
          adList: this.props.reportedContentData.reportedContentAds
        })
      }
    });
  };

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
            />
          )}
        </div>
      );
    });
  };

  render() {
    const { adList } = this.state;
    const { isLoading } = this.props;

    return (
      <div className="padding-rl-10 middle-section">
        <ReportedSearchBar />
          {adList && !isLoading && this.renderAds()}
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

ReportedAdsPage.propTypes = {
  getBackOfficeReportedContent: PropTypes.func.isRequired,
  reportedContentData: PropTypes.object,
  isLoading: PropTypes.bool,
  // error: PropTypes.any
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReportedAdsPage);