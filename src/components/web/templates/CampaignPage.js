import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCampaigns, getSearch } from "../../../actions";
import { CampaignLoading } from "../../ui-kit";
import { CampaignCard } from "../../misc";
import * as enumerations from "../../../lib/constants/enumerations";

class CampaignPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: props.type
    };
  }

  componentDidMount = () => {
    const data = { userType: this.state.type };
    this.props.getCampaigns("getCampaignType", data);
  };

  componentWillReceiveProps(nextProps) {
    if (this.state.type !== nextProps.type) {
      const data = { userType: nextProps.type };
      this.props.getCampaigns("getCampaignType", data);
      this.setState({ type: nextProps.type });
      if (nextProps.searchData.searchKeyword) {
        this.props.getSearch("");
      }
    }
    if (
      nextProps.searchData.searchKeyword !== this.props.searchData.searchKeyword
    ) {
      const searchKeyword = nextProps.searchData.searchKeyword;
      const data = { userType: nextProps.type, isSearch: searchKeyword };
      this.props.getCampaigns("getCampaignType", data);
      this.setState({ type: nextProps.type });
    }
  }

  renderCampaignList = () => {
    const { campaignList } = this.props;
    return campaignList.map(campaign => {
      return (
        <div key={campaign.id}>
          { campaign.mediaUrl && (campaign.postType.toLowerCase() ===
            enumerations.contentTypes.companyCampaign ||
            campaign.postType.toLowerCase() ===
              enumerations.contentTypes.creatorCampaign) && (
            <CampaignCard
              item={campaign}
              isDescription={false}
              isInformation
              isStatus={false}
              isBudget={false}
              isReport={false}
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
  isLoading: PropTypes.bool,
  campaignList: PropTypes.any,
  searchData: PropTypes.any,
  getSearch: PropTypes.func
  // error: PropTypes.any
};

const mapStateToProps = state => ({
  campaignList: state.campaignData.campaigns,
  searchData: state.searchData,
  isLoading: state.campaignData.isLoading,
  error: state.campaignData.error
});

const mapDispatchToProps = {
  getCampaigns,
  getSearch
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampaignPage);
