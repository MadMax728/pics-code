import React, { Component } from "react";
import * as images from "../../../../../lib/constants/images";
import { Link } from "react-router-dom";

class Preview extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="modal-body">
        <div className="padding-l-10 middle-section width-80">
          <div className="information-wrapper">
            <div className="info-inner-wrapper">
              <div className="info-main-title">Title</div>
              <div className="text">
                This text is an example.This text is an example.This text is an
                example.This text is an example.This text is an example.This
                text is an example.This text is an example.This text is an
                example.This text is an example.This text is an example.This
                text is an example.
              </div>
              <img src={images.information} alt={"information"} />
              <div className="text">
                This text is an example.This text is an example.This text is an
                example.This text is an example.This text is an example.This
                text is an example.This text is an example.This text is an
                example.This text is an example.This text is an example.This
                text is an example.
              </div>
              <button className="filled_button">Apply for this campaign</button>
              <div className="feed_wrapper">
                <div className="feed_header">
                  <div className="col-sm-1 col-xs-1 no-padding profile_image">
                    <img
                      src={images.image}
                      alt="circle-img-1"
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
                      src={images.blue_heart}
                      alt="like-1"
                      className="pull-right"
                    />
                  </div>
                </div>
                <div className="feed_content">
                  <div className="feed_description">
                    <div className="col-sm-6 no-padding">
                      <div className="info_wrapper">
                        <span className="normal_title">Start: </span>
                        <span className="secondary_title">10.10.2000</span>
                      </div>
                      <div className="info_wrapper">
                        <span className="normal_title">Procedure: </span>
                        <span className="secondary_title">Public</span>
                      </div>
                      <div className="info_wrapper">
                        <span className="normal_title">Target group: </span>
                        <span className="secondary_title">Female</span>
                      </div>
                    </div>
                    <div className="col-sm-6 no-padding">
                      <div className="info_wrapper">
                        <span className="normal_title">End: </span>
                        <span className="secondary_title">10.10.2000</span>
                      </div>
                      <div className="info_wrapper">
                        <span className="normal_title">Type: </span>
                        <span className="secondary_title">Video</span>
                      </div>
                      <div className="info_wrapper">
                        <span className="normal_title">Applications: </span>
                        <span className="secondary_title">2000/2000</span>
                      </div>
                    </div>
                    <div className="col-sm-6 no-padding">
                      <div className="info_wrapper">
                        <span className="normal_title">Start: </span>
                        <span className="secondary_title">10.10.2000</span>
                      </div>
                      <div className="info_wrapper">
                        <span className="normal_title">Procedure: </span>
                        <span className="secondary_title">Public</span>
                      </div>
                    </div>
                    <div className="col-sm-6 no-padding">
                      <div className="info_wrapper">
                        <span className="normal_title">End: </span>
                        <span className="secondary_title">10.10.2000</span>
                      </div>
                      <div className="info_wrapper">
                        <span className="normal_title">Type: </span>
                        <span className="secondary_title">Video</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="feed_footer">
                  <div className="messages">
                    <span className="count">100</span>
                    <img src={images.feed_msg} alt={"feed_msg"} />
                  </div>
                  <div className="likes">
                    <span className="count">100</span>
                    <img src={images.feed_like} alt={"feed_like"} />
                  </div>
                  <div className="show_more_options">
                    <Link to={""}>• • •</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="feed_wrapper">
              <div className="feed-comment">
                <div className="comment-wrapper">
                  <div className="no-padding profile_image">
                    <img
                      src={images.image}
                      className="img-circle img-responsive"
                      alt={"circle-img-1-2"}
                    />
                  </div>
                  <div className="col-sm-7 col-xs-7 no-padding">
                    <div className="comment-input">
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          rows="5"
                          id="comment"
                          placeholder="Write a comment"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-2 col-xs-2 emoji_wrapper pull-right">
                    <img
                      src={images.emoji}
                      alt="like-2"
                      className="pull-right"
                    />
                  </div>
                </div>
                <div className="comment-wrapper">
                  <div className="comment-header">
                    <div className="no-padding profile_image">
                      <img
                        src={images.image}
                        className="img-circle img-responsive"
                        alt={"circle-img-3"}
                      />
                    </div>
                    <div className="col-sm-7 col-md-9 col-xs-7 commenter-info">
                      <b>User name</b> 01.01.2000 <b>Reply</b>
                    </div>
                    <div className="col-sm-3 col-md-2 col-xs-2 show_more_options pull-right">
                      <Link to={""}>• • •</Link>
                    </div>
                    <br />
                  </div>
                  <div className="comment-content">
                    <p>
                      This <Link to={""}>#text</Link> is an example. This text
                      is an example. This text is an example from{" "}
                      <Link to={""}>@Username</Link>. This text is…{" "}
                      <Link to={""} className="read-more">
                        read more
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="comment-wrapper">
                  <div className="comment-header">
                    <div className="no-padding profile_image">
                      <img
                        src={images.image}
                        className="img-circle img-responsive"
                        alt={"circle-img-4"}
                      />
                    </div>
                    <div className="col-sm-7 col-md-9 col-xs-7 commenter-info">
                      <b>User name</b> 01.01.2000 <b>Reply</b>
                    </div>
                    <div className="col-sm-3 col-md-2 col-xs-2 show_more_options pull-right">
                      <Link to={""}>• • •</Link>
                    </div>
                    <br />
                  </div>
                  <div className="comment-content">
                    <p>
                      This <Link to={""}>#text</Link> is an example. This text
                      is an example. This text is an example from{" "}
                      <Link to={""}>@Username</Link>. This text is…{" "}
                      <Link to={""} className="read-more">
                        read more
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="comment-wrapper">
                  <div className="comment-header">
                    <div className="no-padding profile_image">
                      <img
                        src={images.image}
                        className="img-circle img-responsive"
                        alt={"circle-img-5"}
                      />
                    </div>
                    <div className="col-sm-7 col-md-9 col-xs-7 commenter-info">
                      <b>User name</b> 01.01.2000 <b>Reply</b>
                    </div>
                    <div className="col-sm-3 col-md-2 col-xs-2 show_more_options pull-right">
                      <Link to={""}>• • •</Link>
                    </div>
                    <br />
                  </div>
                  <div className="comment-content">
                    <p>
                      This <Link to={""}>#text</Link> is an example. This text
                      is an example. This text is an example from{" "}
                      <Link to={""}>@Username</Link>. This text is…{" "}
                      <Link to={""} className="read-more">
                        read more
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="view-more-comments">
                  <Link to={""}>View more comments</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Preview;
