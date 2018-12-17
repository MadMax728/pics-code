import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getNewsFeed, getUser } from "../../../actions";
import { CampaignLoading } from "../../ui-kit";
import { CampaignCard, AdCard, MediaCard } from "../../misc";
import * as enumerations from "../../../lib/constants/enumerations";

class NewsFeedPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isPrivate: false
    };
  }

  componentDidMount = () => {
    if (this.props.match.params.username) {      
      this.props.getUser(this.props.match.params).then(() => { 
        if(this.props.userDataByUsername && this.props.userDataByUsername.user && this.props.userDataByUsername.user.data)
        {
          this.props.getNewsFeed(
            "getNewsFeedOther",
            this.props.userDataByUsername.user.data.id
          );
          this.setState({isPrivate: this.props.userDataByUsername.user.data.isPrivate? this.props.userDataByUsername.user.data.isPrivate : false})
        }
      });
    } else {
      this.props.getNewsFeed("getNewsFeedOwner");
    }
  };

  componentWillReceiveProps(nextProps) {
    const data = this.props.match.params;
    if (data.username !== nextProps.match.params.username) {
      if ( nextProps.match.params.username) {   
        this.props.getUser(nextProps.match.params).then(() => {
          if(this.props.userDataByUsername && this.props.userDataByUsername.user && this.props.userDataByUsername.user.data)
          {
            this.props.getNewsFeed(
              "getNewsFeedOther",
              this.props.userDataByUsername.user.data.id
            );
            this.setState({isPrivate: this.props.userDataByUsername.user.data.isPrivate? this.props.userDataByUsername.user.data.isPrivate : false})
          }
        });
      }
      else {
        this.props.getNewsFeed("getNewsFeedOwner");
      }
    }
  }

  renderNewsFeedList = () => {
    const { newsFeedList } = this.props;
    return newsFeedList.map(newsFeed => {
      return (
        <div key={newsFeed.id}>
        
          {newsFeed.postType && newsFeed.postType.toLowerCase() ===
            enumerations.contentTypes.mediaPost && (
            <MediaCard item={newsFeed} isParticipant={false} isDescription />
          )}
          {newsFeed.postType && newsFeed.postType.toLowerCase() ===
            enumerations.contentTypes.companyCampaign && (
            <CampaignCard
              item={newsFeed}
              isDescription={false}
              isInformation
              isStatus={false}
              isBudget={false}
              isReport={false}
            />
          )}
          {newsFeed.postType && newsFeed.postType.toLowerCase() ===
            enumerations.contentTypes.creatorCampaign && (
            <CampaignCard
              item={newsFeed}
              isDescription={false}
              isInformation
              isStatus={false}
              isBudget={false}
              isReport={false}
            />
          )}
          {newsFeed.postType && newsFeed.postType.toLowerCase() ===
            enumerations.contentTypes.companyParticipantCampaign && (
            <MediaCard item={newsFeed} isParticipant isDescription/>
          )}
          {newsFeed.postType && newsFeed.postType.toLowerCase() === enumerations.contentTypes.ad && (
            <AdCard
              item={newsFeed}
              isDescription
              isInformation={false}
              isStatus={false}
            />
          )}
        </div>
      );
    });
  };

  render() {
    const { newsFeedList, isLoading } = this.props;
    const { isPrivate } = this.state;
    console.log(this.props.userDataByUsername);    
    return (
      <div className={"middle-section padding-rl-10"}>
        {newsFeedList && !isLoading && !isPrivate && this.renderNewsFeedList()}
        {isLoading && <CampaignLoading />}
      </div>
    );
  }
}

NewsFeedPage.propTypes = {
  match: PropTypes.any.isRequired,
  getNewsFeed: PropTypes.func.isRequired,
  getUser: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  newsFeedList: PropTypes.any,
  userDataByUsername: PropTypes.any
  // error: PropTypes.any
};

const mapStateToProps = state => ({
  newsFeedList: state.newsFeedData.newsFeed,
  userDataByUsername: state.userDataByUsername,
  isLoading: state.newsFeedData.isLoading,
  error: state.newsFeedData.error
});

const mapDispatchToProps = {
  getNewsFeed,
  getUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsFeedPage);
