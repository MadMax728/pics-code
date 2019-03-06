import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getDashboard, getSearch } from "../../../actions";
import { CampaignLoading, NoDataFoundCenterPage } from "../../ui-kit";
import { CampaignCard, AdCard, MediaCard } from "../../misc";
import * as enumerations from "../../../lib/constants/enumerations";
import { search } from "../../../lib/utils/helpers";

class NewsRoot extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      newsFeedList: null,
      currentPage: 1,
      limit: enumerations.pagination.limit
    };
  }

  render() {
    const { newsFeedList } = this.state;
    const { isLoadingnews } = this.props;
    return (
      <div className={"middle-section padding-rl-10"}>
        {newsFeedList && this.renderNewsFeedList()}
        {!newsFeedList && isLoadingnews && <CampaignLoading />}
        {!isLoadingnews &&
          (!newsFeedList || (newsFeedList && newsFeedList.length === 0)) && (
            <NoDataFoundCenterPage handleRefresh={this.handleRefresh} />
          )}
      </div>
    );
  }

  renderNewsFeedList = () => {
    let { newsFeedList } = this.state;
    const { searchData, handleModalInfoShow, handleModalShow } = this.props;
    newsFeedList = search(newsFeedList, "userName", searchData.searchKeyword);
    return newsFeedList.map(newsFeed => {
      return (
        <div onScroll={this.trackScrolling} key={newsFeed.id}>
          {newsFeed.mediaUrl && (
            <MediaCard
              item={newsFeed}
              isParticipant={false}
              isDescription
              handleModalShow={handleModalShow}
            />
          )}

          {newsFeed.mediaUrl &&
            newsFeed.postType &&
            newsFeed.postType.toLowerCase() ===
              enumerations.contentTypes.mediaPost && (
              <MediaCard
                item={newsFeed}
                isParticipant={false}
                isDescription
                handleModalShow={handleModalShow}
              />
            )}

          {newsFeed.mediaUrl &&
            newsFeed.typeContent &&
            newsFeed.typeContent.toLowerCase() !==
              enumerations.mediaTypes.video &&
            newsFeed.postType &&
            newsFeed.postType.toLowerCase() ===
              enumerations.contentTypes.campaign && (
              <CampaignCard
                item={newsFeed}
                isDescription={false}
                isInformation
                isStatus={false}
                isBudget={false}
                isReport={false}
                handleModalInfoShow={handleModalInfoShow}
                handleModalShow={handleModalShow}
              />
            )}
          {/* {newsFeed.mediaUrl &&
            newsFeed.typeContent &&
            newsFeed.typeContent.toLowerCase() !==
              enumerations.mediaTypes.video &&
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
                handleModalInfoShow={handleModalInfoShow}
                handleModalShow={handleModalShow}
              />
            )} */}
          {newsFeed.mediaUrl &&
            newsFeed.postType &&
            newsFeed.mediaUrl &&
            newsFeed.postType.toLowerCase() ===
              enumerations.contentTypes.companyParticipantCampaign && (
              <MediaCard
                item={newsFeed}
                isParticipant
                isDescription
                handleModalShow={handleModalShow}
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
                handleModalShow={handleModalShow}
              />
            )}
        </div>
      );
    });
  };

  componentDidMount = () => {
    window.scrollTo(0, 0);
    this.handleRefresh();
    this.handleSetNewsFeed("");
    window.addEventListener("scroll", this.onScroll, false);
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.onScroll);
  };

  handleRefresh = () => {
    const { searchData, getSearch } = this.props;
    if (searchData.searchKeyword) {
      getSearch("");
      this.handleSetNewsFeed("");
    }
  };

  handleSetNewsFeed = payload => {
    const { limit, currentPage } = this.state;
    if (payload === "") {
      payload = "?limit=" + limit + "&page=" + currentPage;
    }
    this.props.getDashboard("news", payload).then(() => {
      const { newsFeedList } = this.props;
      this.setState({ newsFeedList });
    });
  };

  onScroll = () => {
    const { newsFeedList, currentPage } = this.state;
    const currentScrollHeight = parseInt(window.innerHeight + window.scrollY);
    if (
      newsFeedList &&
      currentScrollHeight + 1 >= document.body.offsetHeight &&
      newsFeedList.length
    ) {
      const { lastEvaluatedKey } = this.props;
      let payload = "";
      if (currentPage < lastEvaluatedKey.pages) {
        for (let i in lastEvaluatedKey) {
          if (i === "limit") {
            payload += lastEvaluatedKey[i] && `?${i}=${lastEvaluatedKey[i]}`;
            this.setState({ limit: lastEvaluatedKey[i] });
          } else {
            const currentPage = parseInt(lastEvaluatedKey[i]) + 1;
            payload += lastEvaluatedKey[i] && `&${i}=${currentPage}`;
            this.setState({ currentPage });
          }
        }
        this.props.getDashboard("news", payload).then(() => {
          const { newsFeedList } = this.state;
          this.setState({
            newsFeedList: newsFeedList.concat(this.props.newsFeedList)
          });
        });
      }
    }
  };
}

NewsRoot.propTypes = {
  getDashboard: PropTypes.func.isRequired,
  lastEvaluatedKey: PropTypes.any,
  getSearch: PropTypes.func,
  isLoadingnews: PropTypes.bool,
  newsFeedList: PropTypes.any,
  searchData: PropTypes.any,
  handleModalInfoShow: PropTypes.func,
  handleModalShow: PropTypes.func
  // errornews: PropTypes.any
};

const mapStateToProps = state => ({
  newsFeedList: state.dashboardData.news,
  lastEvaluatedKey: state.lastEvaluatedKey.keys,
  searchData: state.searchData,
  isLoadingnews: state.dashboardData.isLoadingnews,
  errornews: state.dashboardData.errornews
});

const mapDispatchToProps = {
  getDashboard,
  getSearch
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsRoot);
