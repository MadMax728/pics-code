import React, { Component } from "react";
import * as images from "../../../constants/images";

class Home extends Component {
  render() {
    return (
      <div>
        <section className="full-height-wrapper">
          <div className="container-fluid">
            <div className="row">
              <div className="mobile_menu padding-15">
                <button type="button">
                  <img src={images.menu} alt="burgermenu" />
                </button>
              </div>
              <div className="language_link padding-15">
                <a href="/">Language</a>
              </div>
              <div className="clearfix" />
              <div className="mobile_page_logo text-center padding-15">
                <img src={images.mobile_logo} alt="mobile_logo" />
              </div>
              <div className="clearfix" />
              <div className="download_option text-center">
                <div className="grey_title padding-15">Download App</div>
                <img src={images.iphone} alt="iphone" />
                <img src={images.andriod} alt="andriod" />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
