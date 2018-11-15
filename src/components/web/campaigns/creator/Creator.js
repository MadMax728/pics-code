import React, { Component } from "react";
import { NewsFeeds } from "../../feeds";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCampaigns } from "../../../../actions";
import { InlineLoading } from "../../../ui-kit";

class Creator extends Component {
  componentDidMount = () => {
    this.props.getCampaigns("getCreatorCampaigns");
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
              isStatus={false}
            />
          )}
        {isLoading && <InlineLoading />}
      </div>
    );
  }
}

Creator.propTypes = {
  handleModalShow: PropTypes.func,
  handleModalInfoShow: PropTypes.func,
  // remove when actual API Call
  getCampaigns: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  creator_campaigns: PropTypes.any,
  error: PropTypes.any
};

const mapStateToProps = state => ({
  creator_campaigns: state.campaignData.campaigns,
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
)(Creator);
