import React, { Component } from "react";
import { NewsFeeds } from "../../feeds";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCampaigns } from "../../../../actions";
import { InlineLoading } from "../../../ui-kit";

class Campaign extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: props.type
    };
  }

  componentDidMount = () => {
    this.props.getCampaigns("getCampaignType", this.state.type);
  };

  componentWillReceiveProps(nextProps) {
    if (this.state.type !== nextProps.type) {
      this.props.getCampaigns("getCampaignType", nextProps.type);
      this.setState({ type: nextProps.type });
    }
  }

  render() {
    const {
      handleModalShow,
      handleModalInfoShow,
      campaigns,
      isLoading
    } = this.props;
    return (
      <div className={"padding-rl-10 middle-section"}>
        {campaigns &&
          !isLoading && (
            <NewsFeeds
              campaigns={campaigns}
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

Campaign.propTypes = {
  handleModalShow: PropTypes.func,
  handleModalInfoShow: PropTypes.func,
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
)(Campaign);
