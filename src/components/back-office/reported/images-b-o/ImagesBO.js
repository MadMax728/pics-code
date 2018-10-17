import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ReportedSearchBar } from "../../reported-search-bar";
import * as images from "../../../../lib/constants/images";
import propTypes from "prop-types";
import { modalType } from "../../../../lib/constants/enumerations";
import { images_b_o_list } from "../../../../mock-data";

class ImagesBO extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      images_detail: images_b_o_list
    };
  }

  handlePopUp = () => {
    this.props.handleModalInfoShow(modalType.post_pop_up);
  };

  onKeyDown = () => {};

  render() {
    const { images_detail } = this.state;
    return (
      <div className="padding-rl-10 middle-section">
        <ReportedSearchBar />
        <div className="feed_wrapper">
          {images_detail.map((img, index) => {
            return (
              <div key={index}>
                <div className="feed_header">
                  <div className="col-sm-1 col-xs-1 no-padding profile_image">
                    <img
                      src={img.user.image}
                      alt="image1"
                      className="img-circle img-responsive"
                    />
                  </div>
                  <div className="col-sm-9 col-xs-7 no-padding">
                    <div className="normal_title">{img.user.name}</div>
                    <div className="grey_title">Sponsored in Category</div>
                    <div className="grey_title">{img.category}</div>
                  </div>
                  <div className="col-sm-2 col-xs-2 like_wrapper">
                    <img
                      src={images.blue_heart}
                      alt="like"
                      className="pull-right"
                    />
                  </div>
                </div>
                <div className="feed_content">
                  <div className="feed_image">
                    <img
                      src={img.image}
                      alt="image2"
                      className="img-responsive"
                    />
                  </div>
                  <div className="feed_description padding-10">
                    <span className="secondary_title">
                      {img.desc}
                      <Link to={""} className="read-more">
                        read more
                      </Link>
                    </span>
                  </div>
                </div>
                <div className="feed_footer padding-15">
                  <div className="messages">
                    <span className="count">{img.msg_count}</span>
                    <img src={images.feed_msg} alt={"feed_msg"} />
                  </div>
                  <div className="likes">
                    <span className="count">{img.like_count}</span>
                    <img src={images.feed_like} alt="feed_like" />
                  </div>
                  <div className="show_more_options">
                    <div
                      onKeyDown={this.onKeyDown}
                      tabIndex="0"
                      role="button"
                      onClick={this.handlePopUp}
                    >
                      • • •
                    </div>
                  </div>
                </div>
                <div className="status backoffice-status">
                  <div className="status-wrapper">
                    <div className="title">Date</div>
                    <div className="subtitle">{img.date}</div>
                  </div>
                  <div className="status-wrapper">
                    <div className="title">Reports</div>
                    <div className="subtitle">{img.reports}</div>
                  </div>
                  <div className="status-wrapper">
                    <div className="title">Status</div>
                    <div className="subtitle">{img.status}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

ImagesBO.propTypes = {
  handleModalInfoShow: propTypes.func
};

export default ImagesBO;
