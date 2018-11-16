import React, { Component } from "react";
import { NewsFeeds } from "../../feeds";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCampaigns } from "../../../../actions";
import { InlineLoading } from "../../../ui-kit";

class Landing extends Component {
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
            />
          )}
        {isLoading && (
          <div className="feed_wrapper">
            <div className="feed_header">
              <div className="col-sm-1 col-xs-1 no-padding profile_image">
                <img
                  src="images/image.jpg"
                  alt="image"
                  className="img-circle img-responsive"
                />
              </div>
              <div className="col-sm-9 col-xs-7 no-padding">
                <div className="normal_title">Title of campaigns</div>
                <div className="secondary_title">User name</div>
                <div className="grey_title">01.01.2000 in Category</div>
              </div>
              <div className="col-sm-2 col-xs-2 like_wrapper">
                <img
                  src="images/blue_heart.svg"
                  alt="like"
                  className="pull-right"
                />
              </div>
            </div>
            <div className="feed_content">
              <div className="feed_image">
                <img
                  src="images/image.jpg"
                  alt="image"
                  className="img-responsive"
                />
              </div>
              <div className="feed_description padding-15">
                <span className="secondary_title">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s...
                </span>
              </div>
            </div>
            <div className="feed_footer padding-15">
              <div className="messages">
                <span className="count">100</span>
                <img src="images/feed_msg.svg" alt="message" />
              </div>
              <div class="likes">
                <span className="count">100</span>
                <img src="images/feed_like.svg" alt="like" />
              </div>
              <div className="show_more_options">
                <a href="#">• • •</a>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

Landing.propTypes = {
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
)(Landing);
