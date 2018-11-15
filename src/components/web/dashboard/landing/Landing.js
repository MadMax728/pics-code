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
          <div class="feed_wrapper">
            <div class="feed_header">
              <div class="col-sm-1 col-xs-1 no-padding profile_image">
                <img
                  src="images/image.jpg"
                  alt="image"
                  class="img-circle img-responsive"
                />
              </div>
              <div class="col-sm-9 col-xs-7 no-padding">
                <div class="normal_title">Title of campaigns</div>
                <div class="secondary_title">User name</div>
                <div class="grey_title">01.01.2000 in Category</div>
              </div>
              <div class="col-sm-2 col-xs-2 like_wrapper">
                <img
                  src="images/blue_heart.svg"
                  alt="like"
                  class="pull-right"
                />
              </div>
            </div>
            <div class="feed_content">
              <div class="feed_image">
                <img
                  src="images/image.jpg"
                  alt="image"
                  class="img-responsive"
                />
              </div>
              <div class="feed_description padding-15">
                <span class="secondary_title">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s...
                </span>
              </div>
            </div>
            <div class="feed_footer padding-15">
              <div class="messages">
                <span class="count">100</span>
                <img src="images/feed_msg.svg" />
              </div>
              <div class="likes">
                <span class="count">100</span>
                <img src="images/feed_like.svg" />
              </div>
              <div class="show_more_options">
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
