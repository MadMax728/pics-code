import React, { Component } from "react";

import {
  LeftSideBarBackOffice,
  BackOfficeHomeRoute,
  RightSideBarBackOffice,
  InfoModal
} from "../components/common";

class BackOfficeHome extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      modalInfoShow: false,
      modalInfoType: ""
    };
  }

  handleModalInfoHide = () => {
    this.setState({ modalInfoShow: false });
  };

  handleModalInfoShow = e => {
    this.setState({ modalInfoShow: true, modalInfoType: e });
  };

  getFilter(filterData) {
    //list of array data as object & calling API
    console.log(filterData);
  }

  render() {
    return (
      <div>
        <section>
          <InfoModal
            modalInfoShow={this.state.modalInfoShow}
            handleModalInfoHide={this.handleModalInfoHide}
            modalInfoType={this.state.modalInfoType}
            handleModalHide={this.handleModalHide}
          />

          <div className="container">
            <div className="row">
              <div className="left_menu_second no-padding">
                <LeftSideBarBackOffice getFilter={this.getFilter} />
              </div>

              <div>
                <BackOfficeHomeRoute
                  handleModalInfoShow={this.handleModalInfoShow}
                />
              </div>

              <div className="right_bar no-padding">
                <RightSideBarBackOffice />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default BackOfficeHome;
