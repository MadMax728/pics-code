import React, { Component } from "react";
import PropTypes from "prop-types";
import * as images from "../../../lib/constants/images";
import { Link } from "react-router-dom";
import { modalType } from "../../../lib/constants/enumerations";

class FeedHeader extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  handleModalInfoShow = () => {
    this.props.handleModalInfoShow(modalType.content_view);
  };

  handleOnKeyDown = () => {};

  render() {
    const { campaign } = this.props;
    return (
      <div className="feed_header">
        <div className="no-padding profile_image">
          {campaign.user &&
            campaign.user.image && (
              <div
                onClick={this.handleModalInfoShow}
                onKeyDown={this.handleOnKeyDown}
                role="presentation"
              >
                <img
                  src={campaign.user.image}
                  alt="feed"
                  className="img-circle img-responsive"
                />
              </div>
            )}
          {(!campaign || !campaign.user || !campaign.user.image) && (
            <img
              src={images.image}
              alt="feed"
              className="img-circle img-responsive"
            />
          )}
        </div>
        <div className="no-padding titles_wrapper">
          <Link to={"/campaign/" + campaign.id + "/information"}>
            <div className="normal_title">{campaign.title}</div>
          </Link>
          <div className="secondary_title">{campaign.user.name}</div>
          <div className="grey_title">{campaign.category}</div>
        </div>
        <div className="like_wrapper">
          <img src={images.blue_heart} alt="like" className="pull-right" />
        </div>
      </div>
    );
  }
}

FeedHeader.propTypes = {
  handleModalInfoShow: PropTypes.func,
  campaign: PropTypes.shape({
    user: PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string
    }).isRequired,
    title: PropTypes.string,
    category: PropTypes.string,
    image: PropTypes.string,
    desc: PropTypes.string,
    msg_count: PropTypes.number,
    like_count: PropTypes.number
  }).isRequired
};

export default FeedHeader;
