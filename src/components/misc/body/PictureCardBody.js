import React, { Component } from "react";
import PropTypes from "prop-types";
import ReportCard from "../ReportCard";
import { ImageItem, VideoItem, ThreeDots, Loader } from "../../ui-kit";
import * as enumerations from "../../../lib/constants/enumerations";
import { getSearch } from "../../../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as routes from "../../../lib/constants/routes";
import LazyLoad from "react-lazyload";

class PictureCardBody extends Component {
  render() {
    const { pic, index, isReport, isLoading, renderReportTips } = this.props;

    return (
      <div
        className={
          index % 2 ? "col-sm-6 pic-right-block" : "col-sm-6 pic-left-block"
        }
      >
        {pic && pic.userPics[0] && (
          <div
            className={isReport ? "backoffice-user pic-block" : "pic-block"}
            onClick={this.handlePicsModal}
            onKeyDown={this.onKeyDown}
            role="button"
            tabIndex="0"
          >
            <LazyLoad
              height={200}
              once
              offset={[-200, 0]}
              placeholder={<Loader />}
            >
              <div className="profile-img-wrapper">
                <img src={pic.userPics[0].profileImage} alt={"pic-1"} />
              </div>
            </LazyLoad>
            <div className="name-wrapper">
              <div className="username">{pic.userPics[0].userName}</div>
            </div>
            {pic && isReport && <ReportCard item={pic} />}
          </div>
        )}
      </div>
    );
  }

  handlePicsModal = () => {
    this.props.handleModalShow(enumerations.modalType.userpics, {
      data: this.props.pic.userPics
    });
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
  getSearch: PropTypes.func,
  renderReportTips: PropTypes.any,
  handleModalShow: PropTypes.any
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PictureCardBody);
