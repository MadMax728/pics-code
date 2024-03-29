import React, { Component } from "react";
import * as images from "../../../lib/constants/images";
import Sidebar from "react-sidebar";
import MobileMenu from "../MobileMenu";
import { Translations } from "../../../lib/translations";
import { Button } from "../../ui-kit";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  render() {
    return (
      <div className="full-height-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="mobile_menu padding-15">
              <Sidebar
                sidebar={
                  <MobileMenu
                    onSetSidebarClose={this.handleOnSetSidebarClose}
                  />
                }
                open={this.state.sidebarOpen}
                onSetOpen={this.onSetSidebarOpen}
                styles={{ sidebar: { background: "white" } }}
              >
                <Button
                  onClick={this.handleOnSetSidebarOpen}
                  text={<img src={images.menu} alt="burgermenu" />}
                />
              </Sidebar>
            </div>
            <div className="language_link padding-15">
              <a href="/">{Translations.cms.language}</a>
            </div>
            <div className="clearfix" />
            <div className="mobile_page_logo text-center padding-15">
              <img src={images.mobile_logo} alt="mobile_logo" />
            </div>
            <div className="clearfix" />
            <div className="download_option text-center">
              <div className="grey_title padding-15">
                {Translations.download_app}
              </div>
              <img src={images.iphone} alt="iphone" />
              <img src={images.andriod} alt="andriod" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  onSetSidebarClose() {
    this.setState({ sidebarOpen: false });
  }

  handleOnSetSidebarClose = () => {
    this.onSetSidebarClose();
  };

  handleOnSetSidebarOpen = () => {
    this.onSetSidebarOpen(true);
  };
}

export default Home;
