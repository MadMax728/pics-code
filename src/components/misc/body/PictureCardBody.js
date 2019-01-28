import React, { Component } from "react";
import PropTypes from "prop-types";
import ReportCard from "../ReportCard";
import LazyLoad from "react-lazyload";
import { Loader, ImageItem, VideoItem, ThreeDots } from "../../ui-kit";
import * as enumerations from "../../../lib/constants/enumerations";
import { getSearch } from "../../../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as routes from "../../../lib/constants/routes";

class PictureCardBody extends Component {
  render() {
    const { pic, index, isReport, isLoading, renderReportTips } = this.props;
    return (
      <div
        className={
          index % 2 ? "col-sm-6 pic-right-block" : "col-sm-6 pic-left-block"
        }
      >
        {pic && (
          <div className={isReport ? "backoffice-user pic-sec-block pic-block" : "pic-sec-block pic-block"}>
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
                <ImageItem item={pic.mediaUrl} 
                    userName={pic.userName} 
                    isLoading={isLoading} />
              )}
            </LazyLoad>
            <div className="name-wrapper">
                <Link to={`${routes.ABOUT_ROUTE}/${pic.userName}`}>
                  <div className="username float_left">{pic.userName}</div>
                </Link>
                <div className="show_more_options pic">
                  <ThreeDots
                    id={`report-${pic.id}`}
                    role="button"
                    dataTip="tooltip"
                    dataClass="tooltip-wrapr"
                    getContent={renderReportTips}
                    effect="solid"
                    delayHide={500}
                    delayShow={500}
                    delayUpdate={500}
                    place={"left"}
                    border
                    type={"light"}
                  />
                </div>
            </div>
            {pic && isReport && <ReportCard item={pic} />}
          </div>
        )}
      </div>
    );
  }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log(nextProps);
  //   if (nextProps.searchData.searchKeyword !== prevState.searchKeyword) {
  //     console.log("123");
  //     nextProps.history.push(
  //       routes.ROOT_ROUTE + "?search=" + nextProps.searchData.searchKeyword
  //     );
  //   }
  //   return null;
  // }
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
  getSearch: PropTypes.func,
  renderReportTips: PropTypes.any
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PictureCardBody);
