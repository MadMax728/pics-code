import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getNewsFeed, getUser } from "../../../actions";
import { CampaignLoading, NoDataFoundCenterPage } from "../../ui-kit";
import { CampaignCard, AdCard, MediaCard } from "../../misc";
import * as enumerations from "../../../lib/constants/enumerations";

class NewsFeedPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { isPrivate: false, newsFeedList: this.props };
  }

  render() {
    const { isLoading } = this.props;
    const { isPrivate, newsFeedList } = this.state;
    return (
      <div className={"middle-section padding-rl-10"}>
        {newsFeedList &&
          newsFeedList.length > 0 &&
          !isLoading &&
          !isPrivate &&
          this.renderNewsFeedList()}
        {isLoading && <CampaignLoading />}
        {!isLoading &&
          (!newsFeedList || (newsFeedList && newsFeedList.length === 0)) && (
            <NoDataFoundCenterPage handleRefresh={this.handleRefresh} />
          )}
      </div>
    );
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);
    if (this.props.match.params.username) {
      this.props.getUser(this.props.match.params).then(() => {
        if (
          this.props.userDataByUsername &&
          this.props.userDataByUsername.user &&
          this.props.userDataByUsername.user.data
        ) {
          this.props.getNewsFeed(
            "getNewsFeedOther",
            this.props.userDataByUsername.user.data.id
          );
          this.setState({
            isPrivate: this.props.userDataByUsername.user.data.isPrivate
              ? this.props.userDataByUsername.user.data.isPrivate
              : false
          });
        }
      });
    } else {
      this.props.getNewsFeed("getNewsFeedOwner").then(() => {
        if (this.props.newsFeedList) {
          this.setState({
            newsFeedList: this.props.newsFeedList.filter(
              e => e.isActive === true
            )
          });
        }
      });
    }
  };

  componentWillReceiveProps(nextProps) {
    const data = this.props.match.params;
    if (data.username !== nextProps.match.params.username) {
      if (nextProps.match.params.username) {
        this.props.getUser(nextProps.match.params).then(() => {
          if (
            this.props.userDataByUsername &&
            this.props.userDataByUsername.user &&
            this.props.userDataByUsername.user.data
          ) {
            this.props.getNewsFeed(
              "getNewsFeedOther",
              this.props.userDataByUsername.user.data.id
            );
            this.setState({
              isPrivate: this.props.userDataByUsername.user.data.isPrivate
                ? this.props.userDataByUsername.user.data.isPrivate
                : false
            });
          }
        });
      } else {
        this.props.getNewsFeed("getNewsFeedOwner").then(() => {
          if (this.props.newsFeedList) {
            this.setState({
              newsFeedList: this.props.newsFeedList.filter(
                e => e.isActive === true
              )
            });
          }
        });
      }
    }
  }

  handleRefresh = () => {};

  handleParticipantFilterList = data => {
    const { newsFeedList } = this.state;
    if (newsFeedList) {
      this.setState({
        newsFeedList: newsFeedList.filter(
          e => e.id !== data.id && e.isActive === true
        )
      });
    }
  };

  renderNewsFeedList = () => {
    const { newsFeedList } = this.state;
    return newsFeedList.map(newsFeed => {
      return (
        <div key={newsFeed.id}>
          {newsFeed.mediaUrl &&
            newsFeed.postType &&
            newsFeed.postType.toLowerCase() ===
              enumerations.contentTypes.mediaPost && (
              <MediaCard
                item={newsFeed}
                isParticipant={false}
                handleFilterList={this.handleParticipantFilterList}
                isDescription
              />
            )}

          {newsFeed.mediaUrl &&
            newsFeed.postType &&
            newsFeed.postType.toLowerCase() ===
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
          {newsFeed.mediaUrl &&
            newsFeed.postType &&
            newsFeed.postType.toLowerCase() ===
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
          {newsFeed.mediaUrl &&
            newsFeed.postType &&
            newsFeed.postType.toLowerCase() ===
              enumerations.contentTypes.companyParticipantCampaign && (
              <MediaCard
                item={newsFeed}
                isParticipant
                handleFilterList={this.handleParticipantFilterList}
                isDescription
              />
            )}

          {newsFeed.mediaUrl &&
            newsFeed.postType &&
            newsFeed.postType.toLowerCase() ===
              enumerations.contentTypes.ad && (
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
