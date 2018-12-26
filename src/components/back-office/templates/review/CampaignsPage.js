import React, { Component } from "react";
import ReportedSearchBar from "../ReportedSearchBar";
import { getBackOfficeReview } from "../../../../actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { CampaignLoading } from "../../../ui-kit";
import * as enumerations from "../../../../lib/constants/enumerations";
import { CampaignCard } from "../../../misc";

class CampaignsPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      campaignList: null
    };
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);
    this.props.getBackOfficeReview("campaigns").then(()=> {
      if(this.props.campaignList) {
        this.setState({
          campaignList: this.props.campaignList
        })
      }
    });
  };

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
            />
          )}
        </div>
      );
    });
  };


  render() {
    const { isLoading } = this.props;
    const { campaignList } = this.state;

    return (
      <div className="padding-rl-10 middle-section margin-b-22">
        <ReportedSearchBar />
        {campaignList && !isLoading && this.renderCampaignList()}
        {isLoading && <CampaignLoading />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  campaignList: state.reviewData.campaigns,
  isLoading: state.reviewData.isLoading,
  error: state.reviewData.error
});

const mapDispatchToProps = {
  getBackOfficeReview
};

CampaignsPage.propTypes = {
  getBackOfficeReview: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  campaignList: PropTypes.any,
  // error: PropTypes.any
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampaignsPage);

