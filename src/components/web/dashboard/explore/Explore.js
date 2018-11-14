import React, { Component } from "react";
import { NewsFeeds } from "../../feeds";
import { connect } from "react-redux";
import { getExploreCampaignsMock } from "../../../../actions";
import PropTypes from "prop-types";
class Explore extends Component {
  componentDidMount = () => {
    this.props.getExploreCampaignsMock();
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
            />
          )}
      </div>
    );
  }
}

Explore.propTypes = {
  handleModalShow: PropTypes.func,
  handleModalInfoShow: PropTypes.func,
  // remove when actual API Call
  getExploreCampaignsMock: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  explore_campaigns_list: PropTypes.any
};

const mapStateToProps = state => ({
  explore_campaigns_list: state.campaignData.exploreCampaigns,
  isLoading: state.campaignData.isLoading
});

const mapDispatchToProps = {
  // remove when actual API Call
  getExploreCampaignsMock
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Explore);
