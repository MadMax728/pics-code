import React, { Component } from "react";
import { NewsFeeds } from "../../feeds";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCampaigns } from "../../../../actions";
import { InlineLoading } from "../../../ui-kit";

class Saved extends Component {
  componentDidMount = () => {
    this.props.getCampaigns("getSavedCampaigns");
  };

  render() {
    const {
      handleModalShow,
      handleModalInfoShow,
      saved_campaigns_list,
      isLoading
    } = this.props;
    return (
      <div className={"middle-section padding-rl-10"}>
        {saved_campaigns_list &&
          !isLoading && (
            <NewsFeeds
              campaigns={saved_campaigns_list}
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

Saved.propTypes = {
  handleModalShow: PropTypes.func,
  handleModalInfoShow: PropTypes.func,
  getCampaigns: PropTypes.func.isRequired,
  saved_campaigns_list: PropTypes.any,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.any
};

const mapStateToProps = state => ({
  saved_campaigns_list: state.campaignData.campaigns,
  isLoading: state.campaignData.isLoading,
  error: state.campaignData.error
});

const mapDispatchToProps = {
  getCampaigns
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Saved);
