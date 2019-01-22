import React, { Component } from "react";
import PropTypes from "prop-types";
import ReportCard from "../ReportCard";
import LazyLoad from "react-lazyload";
import { Loader, ImageItem, VideoItem } from "../../ui-kit";
import * as enumerations from "../../../lib/constants/enumerations";
import { getSearch } from "../../../actions";
import { connect } from "react-redux";
import * as routes from "../../../lib/constants/routes";

class PictureCardBody extends Component {
  render() {
    const { pic, index, isReport, isLoading } = this.props;
    return (
      <div
        className={
          index % 2 ? "col-sm-6 pic-right-block" : "col-sm-6 pic-left-block"
        }
      >
        {pic && (
          <div className="pic-block pic-sec-block">
            <LazyLoad
              height={200}
              once
              offset={[-200, 0]}
              placeholder={<Loader />}
            >
              {/* <img src={pic.mediaUrl} alt={pic.typeContent} /> */}
              {pic.typeContent &&
                pic.typeContent.toLowerCase() ===
                enumerations.mediaTypes.video && (
                  <VideoItem
                    id={pic.id}
                    item={pic.mediaUrl}
                    isLoading={isLoading}
                  />
                )}
              {(!pic.typeContent ||
                (pic.typeContent &&
                  pic.typeContent.toLowerCase() ===
                  enumerations.mediaTypes.image)) && (
                  <ImageItem item={pic.mediaUrl} isLoading={isLoading} />
                )}
            </LazyLoad>
            <div className="name-wrapper">
              <div className="username">{pic.userName}</div>
              <div className="name">{pic.name}</div>
            </div>
          </div>
        )}
        {pic && isReport && <ReportCard item={pic} />}
      </div>
    );
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.searchData.searchKeyword) {
      this.props.getSearch("");
    }
    if (
      nextProps.searchData.searchKeyword !== this.props.searchData.searchKeyword
    ) {
      const searchKeyword = nextProps.searchData.searchKeyword;
      this.props.history.push(routes.ROOT_ROUTE + "?search=" + searchKeyword);
    }
  };
}

const mapStateToProps = state => ({
  searchData: state.searchData
});

const mapDispatchToProps = {
  getSearch
};

PictureCardBody.propTypes = {
  pic: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  isReport: PropTypes.bool,
  isLoading: PropTypes.any,
  searchData: PropTypes.any,
  history: PropTypes.any,
  getSearch: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PictureCardBody);
