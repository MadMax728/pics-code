import React, { Component } from "react";
import { NewsFeeds } from "../../feeds";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCampaigns, getCampaignsMock } from "../../../../actions";
import { InlineLoading } from "../../../ui-kit";

class Landing extends Component {
  componentDidMount = () => {
    this.props.getCampaignsMock();
  };

  render() {
    const {
      handleModalInfoShow,
      handleModalShow,
      campaigns,
      isLoading
    } = this.props;
    return (
      <div className={"middle-section padding-rl-10"}>
        {campaigns &&
          !isLoading && (
            <NewsFeeds
              campaigns={campaigns}
              handleModalInfoShow={handleModalInfoShow}
              handleModalShow={handleModalShow}
              isDescription
              isInformation={false}
            />
          )}
      </div>
    );
  }
}

Landing.propTypes = {
  handleModalInfoShow: PropTypes.func.isRequired,
  handleModalShow: PropTypes.func,
  getCampaigns: PropTypes.func.isRequired,
  // remove when actual API Call
  getCampaignsMock: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  campaigns: PropTypes.any
};

const mapStateToProps = state => ({
  campaigns: state.campaignData.landingCampaigns,
  isLoading: state.campaignData.isLoading
});

const mapDispatchToProps = {
  getCampaigns,
  // remove when actual API Call
  getCampaignsMock
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);
