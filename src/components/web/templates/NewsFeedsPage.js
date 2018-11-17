import React, { Component } from "react";
import { NewsFeeds } from "../feeds";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCampaigns } from "../../../actions";
import { InlineLoading } from "../../ui-kit";
import * as images from "../../../lib/constants/images";
import { Link } from "react-router-dom";
class NewsFeedsRoot extends Component {
  componentDidMount = () => {
    this.props.getCampaigns("getCampaigns");
  };

  render() {
    const {
      handleModalInfoShow,
      handleModalShow,
      campaigns,
      isLoading
    } = this.props;
    return (
      <div className={"middle-section padding-rl-10"}>
        {campaigns &&
          !isLoading && (
            <NewsFeeds
              campaigns={campaigns}
              handleModalInfoShow={handleModalInfoShow}
              handleModalShow={handleModalShow}
              isDescription
              isInformation={false}
              isStatus={false}
            />
          )}
        {isLoading && (
          <div className="feed_wrapper">
            <div className="feed_header">
              <div className="col-sm-1 col-xs-1 no-padding profile_image">
                <img
                  src={images.profile_pic_gray}
                  alt="prof_img"
                  className="img-circle img-responsive profile_pic_gray"
                />
              </div>
              <div className="col-sm-9 col-xs-7 no-padding">
                <div className="normal_title gray_box" />
                <div className="secondary_title gray_box" />
                <div className="grey_title" />
              </div>
              <div className="col-sm-2 col-xs-2 like_wrapper">
                <img
                  src={images.gray_heart}
                  alt="like"
                  className="pull-right gray_heart"
                />
              </div>
            </div>
            <div className="feed_content">
              <div className="feed_image">
                <img
                  src={images.profile_pic_gray}
                  alt="feed_image"
                  className="img-responsive profile_pic_gray big gray_box"
                />
              </div>
              <div className="feed_description padding-15">
                <span className="secondary_title gray_box gray_box_big" />
              </div>
            </div>
            <div className="feed_footer padding-15">
              <div className="messages">
                <span className="count gray_box" />
                {/* <img src={images.feed_msg} alt="message" /> */}
              </div>
              <div className="likes">
                <span className="count gray_box" />
                {/* <img src={images.gray_heart} alt="like" /> */}
              </div>
              <div className="show_more_options">
                <Link to={""} className="gray">
                  • • •
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

NewsFeedsRoot.propTypes = {
  handleModalInfoShow: PropTypes.func.isRequired,
  handleModalShow: PropTypes.func,
  getCampaigns: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  campaigns: PropTypes.any,
  error: PropTypes.any
};

const mapStateToProps = state => ({
  campaigns: state.campaignData.campaigns,
  isLoading: state.campaignData.isLoading,
  error: state.campaignData.error
});

const mapDispatchToProps = {
  getCampaigns
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsFeedsRoot);
