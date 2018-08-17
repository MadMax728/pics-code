import React, { Component } from "react";
import * as images from "../../constants/images";

class UserProfile extends Component {
  render() {
    return (
      <section>
        <div className="container">
          <div className="row">
            <div className="">
              <div className="user_info">
                <div className="col-sm-3 col-md-2 bg-white no-padding">
                  <img src={images.profile_pic} alt="profile" />
                </div>
                <div className="col-sm-9 col-md-10 no-padding-right">
                  <div className="bg-white padding-25 float_left">
                    <div className="user_name">User Name</div>
                    <div className="settings">
                      <img src={images.settings} alt="settings" />
                    </div>
                    <div className="clearfix" />
                    <div className="col-sm-4 slot_one no-padding">
                      <span className="size-20">10.00.00 </span>
                      <span>Subscriber</span>
                      <div className="clearfix" />
                      <button className="filled_button">Upload</button>
                    </div>
                    <div className="col-sm-4 slot_two no-padding">
                      <span className="size-20">7 </span>
                      <span>Subscribed</span>
                      <div className="clearfix" />
                      <button className="black_button">Create campaign</button>
                    </div>
                    <div className="col-sm-4 slot_three no-padding">
                      <span className="size-20">2 </span>
                      <span>Posts</span>
                      <div className="clearfix" />
                      <button className="black_button">Create ad</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="clearfix" />
            <div className="col-sm-3 col-md-2 left_menu no-padding">
              <div className="">
                <button
                  type="button"
                  className="navbar-toggle collapsed pull-left"
                  data-toggle="collapse"
                  data-target="#left_menu"
                  aria-expanded="false"
                >
                  <div className="normal_title padding-15 visible-xs">Menu</div>
                  <img src={images.menu} alt="burgermenu" />
                </button>
                <div
                  className="collapse navbar-collapse no-padding"
                  id="left_menu"
                >
                  <div className="normal_title padding-15 hidden-xs">Menu</div>
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
                      <a href="/" className="menu_participants secondary_title">
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
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s...
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
                  <div className="feed_description padding-10">
                    <div className="normal_title">Title</div>
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
                    <hr />
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
            </div>
            <div className="col-sm-4 col-md-3 right_bar no-padding pull-left">
              <div className="normal_title padding-15">Favourite Campaigns</div>
              <div className="campaigns">
                <div className="campaign_wrapper">
                  <div className="col-sm-4 col-xs-2">
                    <img
                      src={images.image}
                      alt="altmage"
                      className="img-circle img-responsive"
                    />
                  </div>
                  <div className="col-sm-8 col-xs-10 no-padding">
                    <div className="normal_title">Title of campaigns</div>
                    <div className="secondary_title">User name</div>
                    <div className="grey_title">01.01.2000 in Category</div>
                  </div>
                </div>
                <div className="campaign_wrapper">
                  <div className="col-sm-4 col-xs-2">
                    <img
                      src={images.image}
                      alt="altmage"
                      className="img-circle img-responsive"
                    />
                  </div>
                  <div className="col-sm-8 col-xs-10 no-padding">
                    <div className="normal_title">Title of campaigns</div>
                    <div className="secondary_title">User name</div>
                    <div className="grey_title">01.01.2000 in Category</div>
                  </div>
                </div>
                <div className="campaign_wrapper">
                  <div className="col-sm-4 col-xs-2">
                    <img
                      src={images.image}
                      alt="altmage"
                      className="img-circle img-responsive"
                    />
                  </div>
                  <div className="col-sm-8 col-xs-10 no-padding">
                    <div className="normal_title">Title of campaigns</div>
                    <div className="secondary_title">User name</div>
                    <div className="grey_title">01.01.2000 in Category</div>
                  </div>
                </div>
                <div className="campaign_wrapper">
                  <div className="col-sm-4 col-xs-2">
                    <img
                      src={images.image}
                      alt="altmage"
                      className="img-circle img-responsive"
                    />
                  </div>
                  <div className="col-sm-8 col-xs-10 no-padding">
                    <div className="normal_title">Title of campaigns</div>
                    <div className="secondary_title">User name</div>
                    <div className="grey_title">01.01.2000 in Category</div>
                  </div>
                </div>
                <div className="campaign_wrapper">
                  <div className="col-sm-4 col-xs-2">
                    <img
                      src={images.image}
                      alt="altmage"
                      className="img-circle img-responsive"
                    />
                  </div>
                  <div className="col-sm-8 col-xs-10 no-padding">
                    <div className="normal_title">Title of campaigns</div>
                    <div className="secondary_title">User name</div>
                    <div className="grey_title">01.01.2000 in Category</div>
                  </div>
                </div>
                <div className="campaign_wrapper">
                  <div className="col-sm-4 col-xs-2">
                    <img
                      src={images.image}
                      alt="altmage"
                      className="img-circle img-responsive"
                    />
                  </div>
                  <div className="col-sm-8 col-xs-10 no-padding">
                    <div className="normal_title">Title of campaigns</div>
                    <div className="secondary_title">User name</div>
                    <div className="grey_title">01.01.2000 in Category</div>
                  </div>
                </div>
              </div>
              <div className="right_language padding-15">
                <div className="normal_title">Language:</div>
                <a href="/">German</a>
                <a href="/">English</a>
              </div>
              <div className="right_small_menus">
                <span>
                  <a href="/">About Us</a>
                </span>
                <span>
                  <a href="/">Support</a>
                </span>
                <span>
                  <a href="/">
                    Privacy and Data Protection Legal Notice/Terms/NETZDG
                  </a>
                </span>
                <span>
                  <a href="/">Cookies</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default UserProfile;
