import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import InfiniteScroll from 'react-infinite-scroller'
import { getExplore } from "../../../actions";
import { NoDataFoundCenterPage, CampaignLoading } from "../../ui-kit";
import { MediaCard } from "../../misc";

class ExploreRoot extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = { items: [] };
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);
    this.getExplore();
  };

  getExplore = (params = { iPage : 1, vPage: 1 }) => {
    this.props.getExplore(params).then(() => {
      const { items } = this.state;
      const { exploreData } = this.props;
      this.setState({
        items: [...items, ...exploreData.items]
      });
    });
  }

  getMoreExplore = () => {
    const { exploreData } = this.props;
    let params = { iPage : 1, vPage: 1 };
    const vPaginate = exploreData.vPaginate;
    const iPaginate = exploreData.iPaginate;
    
    if(vPaginate && vPaginate.pages && vPaginate.page && parseInt(vPaginate.pages) > parseInt(vPaginate.page)) {
      params.vPage =  parseInt(vPaginate.page) + 1;
    } else {
      params.vPage =  0;
    }

    if(iPaginate && iPaginate.pages && iPaginate.page && parseInt(iPaginate.pages) > parseInt(iPaginate.page)) {
      params.iPage =  parseInt(iPaginate.page) + 1;
    } else {
      params.iPage =  0;
    }

    this.getExplore(params);
    
  };

  render() {
    const { exploreData } = this.props;
    const isLoading = exploreData.isLoading;
    const vPaginate = exploreData.vPaginate;
    const iPaginate = exploreData.iPaginate;
    const items = exploreData.items;
    let hasMore =  false;
    
    if(vPaginate && vPaginate.pages && vPaginate.page && parseInt(vPaginate.pages) > parseInt(vPaginate.page)) {
      hasMore = true;
    }

    if(iPaginate && iPaginate.pages && iPaginate.page && parseInt(iPaginate.pages) > parseInt(iPaginate.page)) {
      hasMore = true;
    }

    return (
      <div className={"middle-section padding-rl-10"}>
        { isLoading && <CampaignLoading /> }
        { !isLoading && (!items || (items && items.length === 0)) && <NoDataFoundCenterPage handleRefresh={this.getExplore} /> }
        { items && !isLoading && items.length && (
          <InfiniteScroll
              pageStart={0}
              loadMore={this.getMoreExplore}
              hasMore={hasMore}
              loader={<div className="loader">Loading ...</div>}>
              {this.renderExploreList()}
          </InfiniteScroll>
        )}
      </div>
    );
  }

  renderExploreList = () => {
    const { handleModalShow } = this.props;
    const { items } = this.state;

    return items.map(explore => {
      return (
        <div key={explore.id}>
          {explore.mediaUrl && (
              <MediaCard
                item={explore}
                isDescription
                handleModalShow={handleModalShow}
              />
            )}
        </div>
      );
    });
  };
}

ExploreRoot.propTypes = {
  getExplore: PropTypes.func.isRequired,
  handleModalShow: PropTypes.func,
  exploreData: PropTypes.any,
};

const mapStateToProps = state => ({
  exploreData: state.exploreData,
});

const mapDispatchToProps = {
  getExplore,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExploreRoot);
