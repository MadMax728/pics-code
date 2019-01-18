import React from "react";
import { Link } from "react-router-dom";
import * as images from "../../../lib/constants/images";

class NoDataFoundRightSidebar extends React.Component {
  render() {
    return <div className="feed_wrapper" >
      <div className="datanotfound-wrapper" >
          <div className="notfound-body">
                <div className="notfound-title col-sm-8 col-xs-8">
                    <p>No Data Found</p>
                </div>
                <div className="notfound-btn-wrapper col-sm-2 col-xs-2">
                    <button className="data-btns" id="1" ><i className="fa fa-plus-square" aria-hidden="true"></i></button> 
                </div>
                <div className="notfound-btn-wrapper col-sm-2 col-xs-2">
                    <button className="data-btns" id="2" ><i className="fa fa-refresh" aria-hidden="true"></i></button>
                </div>
            </div>   
          <div className="notfound-footer">
              <div className="col-md-12"><span>Write an artical</span>on LinkedIn</div>
          </div>       
      </div>
    </div>;
  }
}

export default NoDataFoundRightSidebar;
