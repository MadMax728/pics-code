import React, { Component } from "react";

import {
  LeftSideBarBackOffice,
  BackOfficeHomeRoute,
  InfoModal
} from "../components/common";
import { Auth } from "../auth";
// import * as enumerations from "../lib/constants/enumerations";

class BackOfficeHome extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      modalInfoShow: false,
      modalInfoType: "",
      modalInfo: null,
      isRank: "",
      userInfo: null,
      statusCallback: () => { }
    };
  }

  componentDidMount = () => {
    const storage = Auth.extractJwtFromStorage();
    let userInfo = null;
    
    if (storage) {
      userInfo = JSON.parse(storage.userInfo);
    }
    if (userInfo) { 
      this.setState({isRank: userInfo.role});
      // this.setState({isRank: enumerations.adminRank.rank2});
    }
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

  handleModalInfoDetailsCallbackShow = (e, info, callback) => {   
    this.setState({ modalInfoShow: true, modalInfoType: e, modalInfo: info, statusCallback: callback });
  };

  getFilter(filterData) {
    //list of array data as object & calling API
    console.log(filterData);
  }

  handleModalHide = () => {};

  render() {
    const { modalInfo, modalInfoShow, modalInfoType, statusCallback, isRank} = this.state;
    return (
      <div>
        <section>
          <InfoModal
            modalInfoShow={modalInfoShow}
            handleModalInfoHide={this.handleModalInfoHide}
            modalInfoType={modalInfoType}
            handleModalHide={this.handleModalHide}
            modalInfo={modalInfo}
            statusCallback={statusCallback}
          />

          <div className="container">
            <div className="row">
              <div className="left_menu_second no-padding">
                <LeftSideBarBackOffice getFilter={this.getFilter} isRank={isRank} />
              </div>

              <div>
                <BackOfficeHomeRoute
                  handleModalInfoShow={this.handleModalInfoShow}
                  handleModalInfoDetailsShow={this.handleModalInfoDetailsShow}
                  handleModalInfoDetailsCallbackShow={this.handleModalInfoDetailsCallbackShow}
                  isRank={isRank}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default BackOfficeHome;
