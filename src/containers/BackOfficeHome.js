import React, { Component } from "react";

import {
  LeftSideBarBackOffice,
  BackOfficeHomeRoute,
  RightSideBarBackOffice
} from "../components/common";

class BackOfficeHome extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      modalShow: false,
      modalType: "",
      modalInfoShow: false,
      modalInfoType: ""
    };
  }

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
