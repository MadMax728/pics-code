import React from "react";
import * as images from "../../../lib/constants/images";
import PropTypes from "prop-types";

const CampaignDetailsLoading = ({ count }) => {
  return Array(count).fill().map((item, index) => {
    return (
      <div key={index} className="feed_wrapper padding-rl15">
        <div className="feed_header width-70 padding-left0">
          <div className="col-sm-12 no-padding">
            <div className="normal_title gray_box descTitle" />
            <div className="secondary_title gray_box desc1" />
            <div className="grey_title" />
          </div>
        </div>
        <div className="feed_content">
          <div className="feed_image">
            <img
              src={images.placeholder_pic}
              alt="feed_image"
              className="img-responsive"
            />

          </div>
          <div className="feed_description">
            <span className="secondary_title gray_box gray_box_big descCompain margin-left0" />
          </div>

          <div className="feed_header padding-left0">

            <div className="col-sm-8 padding-left0">
              <div className="no-padding profile_image wid45">
                <span className="gray_box pro-image"></span>
              </div>
              <div className="normal_title gray_box descTitle"></div>
              <div className="secondary_title gray_box desc1"></div>
              <div className="grey_title"> </div>
            </div>
            <div className="col-sm-4 like_wrapper no-padding">
              <img
                src={images.gray_heart}
                alt="like"
                className="pull-right gray_heart"
              />
            </div>
          </div>
          <div className="col-sm-5 padding-left0">
            <div className="feed_description">
              <span className="secondary_title gray_box gray_box_big lists padding-left15" />
            </div>
            <div className="feed_description">
              <span className="secondary_title gray_box gray_box_big lists padding-left15" />
            </div>
            <div className="feed_description">
              <span className="secondary_title gray_box gray_box_big lists padding-left15" />
            </div>
          </div>
          <div className="col-sm-5 padding-left0">
            <div className="feed_description">
              <span className="secondary_title gray_box gray_box_big lists padding-left15" />
            </div>
            <div className="feed_description">
              <span className="secondary_title gray_box gray_box_big lists padding-left15" />
            </div>
            <div className="feed_description">
              <span className="secondary_title gray_box gray_box_big lists padding-left15" />
            </div>
          </div>
          <div className="col-sm-12 padding-left0 hr-color">
          <hr/>
          </div>
          <div className="col-sm-5 padding-left0">
            <div className="feed_description">
              <span className="secondary_title gray_box gray_box_big lists padding-left15" />
            </div>
            <div className="feed_description">
              <span className="secondary_title gray_box gray_box_big lists padding-left15" />
            </div> 
          </div>
          <div className="col-sm-5 padding-left0">
            <div className="feed_description">
              <span className="secondary_title gray_box gray_box_big lists padding-left15" />
            </div>
            <div className="feed_description">
              <span className="secondary_title gray_box gray_box_big lists padding-left15" />
            </div> 
          </div>
      </div>
          <div className="feed_footer padding-15">
            <div className="messages">
              <span className="count gray_box" />
            </div>
            <div className="likes">
              <span className="count gray_box" />
            </div>
            <div className="show_more_options gray">
              • • •
        </div>
          </div>
        </div >
        );
      });
    }
    
CampaignDetailsLoading.defaultProps = {
          count: 1
      };
      
CampaignDetailsLoading.propTypes = {
          count: PropTypes.number
      }
      
      export default CampaignDetailsLoading;
