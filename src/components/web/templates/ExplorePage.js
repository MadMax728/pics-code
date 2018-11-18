import React, { Component } from "react";
import { connect } from "react-redux";
import { getExplores } from "../../../actions";
import PropTypes from "prop-types";
import { InlineLoading } from "../../ui-kit";
import { CampaignCard, AdCard, ImageCard, VideoCard } from "../misc";
import * as enumerations from "../../../lib/constants/enumerations";
class ExploreRoot extends Component {
  componentDidMount = () => {
    this.props.getExplores("getExplores");
  };

  renderExploreList = () => {
    const { exploreList, isLoading } = this.props;
    return exploreList.map(explore => {
      return (
        <div key={explore.id}>
          {explore.type === enumerations.contentTypes.campaign && (
            <CampaignCard
              item={explore}
              isDescription
              isInformation={false}
              isStatus={false}
            />
          )}
          {explore.type === enumerations.contentTypes.ad && (
            <AdCard
              item={explore}
              isDescription
              isInformation={false}
              isStatus={false}
            />
          )}
          {explore.type === enumerations.contentTypes.image && (
            <ImageCard item={explore} />
          )}
          {explore.type === enumerations.contentTypes.video && (
            <VideoCard item={explore} />
          )}
        </div>
      );
    });
  };

  render() {
    const { exploreList, isLoading } = this.props;

    return (
      <div className={"middle-section padding-rl-10"}>
        {exploreList && !isLoading && this.renderExploreList()}
        {isLoading && <InlineLoading />}
      </div>
    );
  }
}

ExploreRoot.propTypes = {
  handleModalShow: PropTypes.func,
  handleModalInfoShow: PropTypes.func,
  // remove when actual API Call
  getExplores: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  exploreList: PropTypes.any,
  error: PropTypes.any
};

const mapStateToProps = state => ({
  exploreList: state.exploreData.explores,
  isLoading: state.campaignData.isLoading,
  error: state.campaignData.error
});

const mapDispatchToProps = {
  // remove when actual API Call
  getExplores
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExploreRoot);
