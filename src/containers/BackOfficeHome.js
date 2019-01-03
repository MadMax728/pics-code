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
      modalInfoType: "",
      modalInfo: null,
    };
  }

  handleModalInfoHide = () => {
    this.setState({ modalInfoShow: false });
  };

  handleModalInfoShow = e => {
    this.setState({ modalInfoShow: true, modalInfoType: e });
  };

  handleModalInfoDetailsShow = (e, info) => {   
    this.setState({ modalInfoShow: true, modalInfoType: e, modalInfo: info });
  };

  getFilter(filterData) {
    //list of array data as object & calling API
    console.log(filterData);
  }

  handleModalHide = () => {};

  render() {
    const { modalInfo, modalInfoShow, modalInfoType} = this.state;
    return (
      <div>
        <section>
          <InfoModal
            modalInfoShow={modalInfoShow}
            handleModalInfoHide={this.handleModalInfoHide}
            modalInfoType={modalInfoType}
            handleModalHide={this.handleModalHide}
            modalInfo={modalInfo}
          />

          <div className="container">
            <div className="row">
              <div className="left_menu_second no-padding">
                <LeftSideBarBackOffice getFilter={this.getFilter} />
              </div>

              <div>
                <BackOfficeHomeRoute
                  handleModalInfoShow={this.handleModalInfoShow}
                  handleModalInfoDetailsShow={this.handleModalInfoDetailsShow}
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
