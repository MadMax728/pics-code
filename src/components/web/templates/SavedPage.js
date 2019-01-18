import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getSaved } from "../../../actions";
import { CampaignLoading } from "../../ui-kit";
import { CampaignCard, AdCard, MediaCard } from "../../misc";
import * as enumerations from "../../../lib/constants/enumerations";

class SavedPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      savedList: null
    };
  }

  render() {
    const { isLoading } = this.props;
    const { savedList } = this.state;
    return (
      <div className={"middle-section padding-rl-10"}>
        {savedList && this.renderSavedList()}
        {!savedList && isLoading && <CampaignLoading />}
      </div>
    );
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);
    this.props.getSaved("getSavedOwner").then(()=> {
      if(this.props.savedList){
        this.setState({savedList: this.props.savedList});
      }
    });
  };

  handleRemove = (id) => {
    const { savedList } = this.state;
    this.setState({savedList: savedList.filter(e => e.id !== id)});
  }

  renderSavedList = () => {
    const { savedList } = this.state;
    return savedList.map(saved => {
      return (
        <div key={saved.id}>
          {saved.mediaUrl &&
            saved.postType.toLowerCase() ===
              enumerations.contentTypes.mediaPost && (
              <MediaCard 
                item={saved} 
                isParticipant={false} 
                isDescription 
                isSavedPage
                handleRemove={this.handleRemove}
              />
            )}
          {saved.mediaUrl &&
            saved.postType.toLowerCase() ===
              enumerations.contentTypes.companyCampaign && (
              <CampaignCard
                isSavedPage
                handleRemove={this.handleRemove}
                item={saved}
                isDescription={false}
                isInformation
                isStatus={false}
                isBudget={false}
                isReport={false}
              />
            )}
          {saved.mediaUrl &&
            saved.postType.toLowerCase() ===
              enumerations.contentTypes.creatorCampaign && (
              <CampaignCard
                isSavedPage
                handleRemove={this.handleRemove}
                item={saved}
                isDescription={false}
                isInformation
                isStatus={false}
                isBudget={false}
                isReport={false}
              />
            )}
          {saved.mediaUrl &&
            saved.postType.toLowerCase() ===
              enumerations.contentTypes.companyParticipantCampaign && (
              <MediaCard 
                item={saved} 
                isParticipant 
                isDescription                 isSavedPage
                handleRemove={this.handleRemove} 
              />
            )}
          {saved.mediaUrl &&
            saved.postType.toLowerCase() === enumerations.contentTypes.ad && (
              <AdCard
                item={saved}
                isDescription
                isInformation={false}
                isStatus={false}
                isSavedPage
                handleRemove={this.handleRemove}
              />
            )}
        </div>
      );
    });
  };

}

SavedPage.propTypes = {
  match: PropTypes.any.isRequired,
  getSaved: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  savedList: PropTypes.any
  // error: PropTypes.any
};

const mapStateToProps = state => ({
  savedList: state.savedData.saves,
  isLoading: state.savedData.isLoading,
  error: state.savedData.error
});

const mapDispatchToProps = {
  getSaved
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SavedPage);
