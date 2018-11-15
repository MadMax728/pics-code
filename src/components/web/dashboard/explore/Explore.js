import React, { Component } from "react";
import { NewsFeeds } from "../../feeds";
import { connect } from "react-redux";
import { getCampaigns } from "../../../../actions";
import PropTypes from "prop-types";
import { InlineLoading } from "../../../ui-kit";

class Explore extends Component {
  componentDidMount = () => {
    this.props.getCampaigns("getExploreCampaigns");
  };

  render() {
    const {
      handleModalShow,
      handleModalInfoShow,
      explore_campaigns_list,
      isLoading
    } = this.props;

    return (
      <div className={"middle-section padding-rl-10"}>
        {explore_campaigns_list &&
          !isLoading && (
            <NewsFeeds
              campaigns={explore_campaigns_list}
              handleModalShow={handleModalShow}
              handleModalInfoShow={handleModalInfoShow}
              isDescription
              isInformation={false}
              isStatus={false}
            />
          )}
        {isLoading && <InlineLoading />}
      </div>
    );
  }
}

Explore.propTypes = {
  handleModalShow: PropTypes.func,
  handleModalInfoShow: PropTypes.func,
  // remove when actual API Call
  getCampaigns: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  explore_campaigns_list: PropTypes.any,
  error: PropTypes.any
};

const mapStateToProps = state => ({
  explore_campaigns_list: state.campaignData.campaigns,
  isLoading: state.campaignData.isLoading,
  error: state.campaignData.error
});

const mapDispatchToProps = {
  // remove when actual API Call
  getCampaigns
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Explore);
