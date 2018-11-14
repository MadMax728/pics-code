import React, { Component } from "react";
import { NewsFeeds } from "../../feeds";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCampaigns } from "../../../../actions";
import { InlineLoading } from "../../../ui-kit";

class Landing extends Component {
  componentDidMount = () => {
    this.props.getCampaigns("getCampaigns");
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
        {isLoading && <InlineLoading />}
      </div>
    );
  }
}

Landing.propTypes = {
  handleModalInfoShow: PropTypes.func.isRequired,
  handleModalShow: PropTypes.func,
  getCampaigns: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  campaigns: PropTypes.any,
  error: PropTypes.any
};

const mapStateToProps = state => ({
  campaigns: state.campaignData.campaigns,
  isLoading: state.campaignData.isLoading,
  error: state.campaignData.error
});

const mapDispatchToProps = {
  getCampaigns
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);
