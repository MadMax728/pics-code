import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCampaigns } from "../../../actions";
import { CampaignLoading } from "../../ui-kit";
import { CampaignCard } from "../misc";
import * as enumerations from "../../../lib/constants/enumerations";

class CampaignPage extends Component {
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

  renderCampaignList = () => {
    const { campaignList } = this.props;
    return campaignList.map(campaign => {
      return (
        <div key={campaign.id}>
          {campaign.type === enumerations.contentTypes.campaign && (
            <CampaignCard
              item={campaign}
              isDescription={false}
              isInformation
              isStatus={false}
            />
          )}
        </div>
      );
    });
  };

  render() {
    const { campaignList, isLoading } = this.props;
    return (
      <div className={"padding-rl-10 middle-section"}>
        {campaignList && !isLoading && this.renderCampaignList()}
        {isLoading && <CampaignLoading />}
      </div>
    );
  }
}

CampaignPage.propTypes = {
  type: PropTypes.string.isRequired,
  getCampaigns: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  campaignList: PropTypes.any,
  error: PropTypes.any
};

const mapStateToProps = state => ({
  campaignList: state.campaignData.campaigns,
  isLoading: state.campaignData.isLoading,
  error: state.campaignData.error
});

const mapDispatchToProps = {
  getCampaigns
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampaignPage);
