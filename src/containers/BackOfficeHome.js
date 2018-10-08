import React, { Component } from "react";
import { Header, Footer } from "../components/back-office";

import {
  LeftSideBarBackOffice,
  RightSideBar,
  TopBarInfo,
  CustomModal,
  InfoModal,
  BackOfficeHomeRoute
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

  handleModalHide = () => {
    this.setState({ modalShow: false });
  };

  handleModalShow = e => {
    this.setState({ modalShow: true, modalType: e });
  };

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
        <Header handleModalShow={this.handleModalShow} />
        <section>
          <CustomModal
            modalShow={this.state.modalShow}
            handleModalHide={this.handleModalHide}
            modalType={this.state.modalType}
            handleModalInfoShow={this.handleModalInfoShow}
            modalInfoType={this.state.modalInfoType}
          />

          <InfoModal
            modalInfoShow={this.state.modalInfoShow}
            handleModalInfoHide={this.handleModalInfoHide}
            modalInfoType={this.state.modalInfoType}
            handleModalHide={this.handleModalHide}
          />

          <div className="container">
            <div className="row">
              {/* <TopBarInfo handleModalShow={this.handleModalShow} /> */}

              <div className="left_menu_second no-padding">
                <LeftSideBarBackOffice getFilter={this.getFilter} />
              </div>

              <div>
                <BackOfficeHomeRoute
                  handleModalInfoShow={this.handleModalInfoShow}
                />
              </div>

              <div className="right_bar no-padding">
                {/* <RightSideBar handleModalShow={this.handleModalShow} /> */}
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default BackOfficeHome;
