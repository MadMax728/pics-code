import React, { Component } from "react";
import { NewsFeeds } from "../../feeds";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCampaigns } from "../../../../actions";
import { InlineLoading } from "../../../ui-kit";

class Company extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount = () => {
    this.props.getCampaigns("getCompanyCampaigns");
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
        {isLoading && <InlineLoading />}
      </div>
    );
  }
}

Company.propTypes = {
  handleModalShow: PropTypes.func,
  handleModalInfoShow: PropTypes.func,
  getCampaigns: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  company_campaigns: PropTypes.any,
  error: PropTypes.any
};

const mapStateToProps = state => ({
  company_campaigns: state.campaignData.campaigns,
  isLoading: state.campaignData.isLoading,
  error: state.campaignData.error
});

const mapDispatchToProps = {
  getCampaigns
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Company);
