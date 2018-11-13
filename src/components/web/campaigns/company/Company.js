import React, { Component } from "react";
import { NewsFeeds } from "../../feeds";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCompanyCampaignsMock } from "../../../../actions";
class Company extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount = () => {
    this.props.getCompanyCampaignsMock();
  };

  render() {
    const {
      handleModalShow,
      handleModalInfoShow,
      company_campaigns,
      isLoading
    } = this.props;
    return (
      <div className={"padding-rl-10 middle-section"}>
        {company_campaigns &&
          !isLoading && (
            <NewsFeeds
              campaigns={company_campaigns}
              handleModalShow={handleModalShow}
              handleModalInfoShow={handleModalInfoShow}
              isDescription={false}
              isInformation
            />
          )}
      </div>
    );
  }
}

Company.propTypes = {
  handleModalShow: PropTypes.func,
  handleModalInfoShow: PropTypes.func,

  // remove when actual API Call
  getCompanyCampaignsMock: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  company_campaigns: PropTypes.any
};

const mapStateToProps = state => ({
  company_campaigns: state.campaignData.companyCampaigns,
  isLoading: state.campaignData.isLoading
});

const mapDispatchToProps = {
  // remove when actual API Call
  getCompanyCampaignsMock
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Company);
