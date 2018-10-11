import React, { Component } from "react";
import { Link } from "react-router-dom";

class DataDownload extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="padding-rl-10 middle-section width-80">
        <div className="dashboard-middle-section margin-bottom-50">
          <div className="normal_title padding-15">Data download</div>
          <div className="user_download_wrapr">
            <div className="title_with_search_dropdown_button">
              <input
                type="search"
                name=""
                id=""
                placeholder="User name"
                className="flex2"
              />
              <Link to={""} className="wid30per">
                Download
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DataDownload;
