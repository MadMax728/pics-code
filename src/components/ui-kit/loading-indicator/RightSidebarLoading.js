import React from "react";
import { Link } from "react-router-dom";
import * as images from "../../../lib/constants/images";

class RightSidebarLoading extends React.Component {
  render() {
    return (
      <div className="feed_wrapper" > 
          <div  className="campaigns">
            <div  className="campaign_wrapper">
              <div  className="col-xs-3 col-md-2">
              <span className="gray_box pro-image"></span>
              </div>
              <div  className="col-xs-9 col-md-10">
                  <div  className="normal_title gray_box gray_box_big desc2"></div>
                  <div  className="secondary_title gray_box desc1sm"></div>
                  <div  className="secondary_title gray_box desc1sm"></div>
              </div>
            </div>
          </div> 
          <div  className="campaigns">
            <div  className="campaign_wrapper">
              <div  className="col-xs-3 col-md-2">
              <span className="gray_box pro-image"></span>
              </div>
              <div  className="col-xs-9 col-md-10"> 
                  <div  className="normal_title gray_box gray_box_big desc2"></div> 
                  <div  className="secondary_title gray_box desc1sm"></div> 
                  <div  className="secondary_title gray_box desc1sm"></div> 
              </div>
            </div>
          </div> 
          <div  className="campaigns">
            <div  className="campaign_wrapper">
              <div  className="col-xs-3 col-md-2">
              <span className="gray_box pro-image"></span>
              </div>
              <div  className="col-xs-9 col-md-10">
                <div  className="normal_title gray_box gray_box_big desc2"></div>
                <div  className="secondary_title gray_box desc1sm"></div>
                <div  className="secondary_title gray_box desc1sm"></div>
              </div>
            </div>
          </div> 
      </div>
    );
  }
}

export default RightSidebarLoading;
