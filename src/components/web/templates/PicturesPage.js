import React from "react";
import PictureCard from "../../web/misc/PictureCard";
import PropTypes from "prop-types";
import { CampaignLoading } from "../../ui-kit";
import { connect } from "react-redux";
import { getDashboard } from "../../../actions";
import { image } from "../../../lib/constants/images";
import * as images from "../../../lib/constants/images";

class PicturesRoot extends React.Component {
  componentDidMount = () => {
    this.props.getDashboard("getPic");
  };

  renderuserList = () => {
    const { picsList } = this.props;
    return picsList.map((pic, index) => {
      const clearfixDiv = index % 2 === 0 ? <div className="clearfix" /> : null;
      return (
        <div key={index}>
          {clearfixDiv}
          <PictureCard item={pic} index={index} />
        </div>
      );
    });
  };

  render() {
    const { picsList, isLoading } = this.props;

    return (
      <div className="padding-rl-10 middle-section">
        {picsList && !isLoading && this.renderuserList()}
        {isLoading && (
          <div className="col-xs-12 no-padding">
            <div className="col-sm-6 pic-block-wrapr pic-left-block padding-lr-5">
              <div className="pic-block gray_content">
                <img src={images.placeholder_pic} alt="profile_pic" />
                <div className="name-wrapper gray_box">
                  <div className="username" />
                  <div className="name" />
                </div>
              </div>
            </div>
            <div className="col-sm-6 pic-block-wrapr pic-right-block padding-lr-5">
              <div className="pic-block gray_content">
                <img src={images.placeholder_pic} alt="profile_pic" />
                <div className="name-wrapper gray_box">
                  <div className="username" />
                  <div className="name" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

PicturesRoot.propTypes = {
  getDashboard: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  picsList: PropTypes.any,
  error: PropTypes.any
};

const mapStateToProps = state => ({
  picsList: state.dashboardData.dashboard,
  isLoading: state.dashboardData.isLoading,
  error: state.dashboardData.error
});

const mapDispatchToProps = {
  getDashboard
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PicturesRoot);
