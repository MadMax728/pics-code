import React, { Component } from "react";
import * as images from "../../constants/images";

class Messages extends Component {
  render() {
    return (
      <div>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-sm-3 col-md-2 left_menu no-padding">
                <div className="">
                  <button
                    type="button"
                    className="navbar-toggle collapsed pull-left"
                    data-toggle="collapse"
                    data-target="#left_menu"
                    aria-expanded="false"
                  >
                    <div className="normal_title padding-15 visible-xs">
                      Menu
                    </div>
                    <img src={images.menu} alt="burgermenu" />
                  </button>
                  <div
                    className="collapse navbar-collapse no-padding"
                    id="left_menu"
                  >
                    <div className="normal_title padding-15 hidden-xs">
                      Menu
                    </div>
                    <ul className="nav navbar-nav pull-right">
                      <li>
                        <a href="/" className="menu_news secondary_title">
                          <span>News</span>
                        </a>
                      </li>
                      <li>
                        <a href="/" className="menu_explore secondary_title">
                          <span>Explore</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          className="menu_participants secondary_title"
                        >
                          {" "}
                          <span>Participants</span>
                        </a>
                      </li>
                      <li>
                        <a href="/" className="menu_user secondary_title">
                          <span>User</span>
                        </a>
                      </li>
                      <li>
                        <a href="/" className="menu_pics secondary_title">
                          <span>Pics</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-5 col-md-7">
                <div className="feed_wrapper">
                  <div className="feed_header">
                    <div className="col-sm-1 col-xs-1 no-padding profile_image">
                      <img
                        src={images.image}
                        alt="altmage"
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
                        alt="like"
                        className="pull-right"
                      />
                    </div>
                  </div>
                  <div className="feed_content">
                    <div className="feed_image">
                      <img
                        src={images.image}
                        alt="altmage"
                        className="img-responsive"
                      />
                    </div>
                    <div className="feed_description padding-15">
                      <span className="secondary_title">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s...
                      </span>
                    </div>
                  </div>
                  <div className="feed_footer padding-15">
                    <div className="messages">
                      <span className="count">100</span>
                      <img src={images.feed_msg} alt="profile" />
                    </div>
                    <div className="likes">
                      <span className="count">100</span>
                      <img src={images.feed_like} alt="profile" />
                    </div>
                    <div className="show_more_options">
                      <a href="/">• • •</a>
                    </div>
                  </div>
                </div>
                <div className="feed_wrapper">
                  <div className="feed_header">
                    <div className="col-sm-1 col-xs-1 no-padding profile_image">
                      <img
                        src={images.image}
                        alt="altmage"
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
                        alt="like"
                        className="pull-right"
                      />
                    </div>
                  </div>
                  <div className="feed_content">
                    <div className="feed_image">
                      <img
                        src={images.image}
                        alt="altmage"
                        className="img-responsive"
                      />
                    </div>
                    <div className="feed_description padding-15">
                      <span className="secondary_title">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s...
                      </span>
                    </div>
                  </div>
                  <div className="feed_footer padding-15">
                    <div className="messages">
                      <span className="count">100</span>
                      <img src={images.feed_msg} alt="like" />
                    </div>
                    <div className="likes">
                      <span className="count">100</span>
                      <img src={images.feed_like} alt="like" />
                    </div>
                    <div className="show_more_options">
                      <a href="/">• • •</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Messages;
