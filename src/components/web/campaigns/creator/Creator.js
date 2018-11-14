import React, { Component } from "react";
import { NewsFeeds } from "../../feeds";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCreatorCampaignsMock } from "../../../../actions";

class Creator extends Component {
  componentDidMount = () => {
    this.props.getCreatorCampaignsMock();
  };

  render() {
    const {
      handleModalShow,
      handleModalInfoShow,
      creator_campaigns,
      isLoading
    } = this.props;

    return (
      <div className={"padding-rl-10 middle-section"}>
        {creator_campaigns &&
          !isLoading && (
            <NewsFeeds
              campaigns={creator_campaigns}
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

Creator.propTypes = {
  handleModalShow: PropTypes.func,
  handleModalInfoShow: PropTypes.func,
  // remove when actual API Call
  getCreatorCampaignsMock: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  creator_campaigns: PropTypes.any
};

const mapStateToProps = state => ({
  creator_campaigns: state.campaignData.creatorCampaigns,
  isLoading: state.campaignData.isLoading
});

const mapDispatchToProps = {
  // remove when actual API Call
  getCreatorCampaignsMock
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Creator);
