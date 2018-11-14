import React, { Component } from "react";
import Header from "../components/web/Header";
import Footer from "../components/web/Footer";
import {
  LeftSideBar,
  RightSideBar,
  TopBarInfo,
  CustomModal,
  InfoModal,
  HomeRoute,
  MessageBar
} from "../components/common";
class Home extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      modalShow: false,
      modalType: "",
      modalInfoShow: false,
      modalInfoType: "",
      modalInfoMsg: "",
      message: "",
      image: null,
      data: null
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

  handleModalInfoMsgShow = (e, forThat) => {
    this.setState({
      modalInfoShow: true,
      modalInfoType: e,
      modalInfoMsg: forThat
    });
  };

  handleModalShow = (e, data) => {
    this.setState({ modalShow: true, modalType: e, data });
  };

  getFilter(filterData) {
    //list of array data as object & calling API
    console.log(filterData);
  }

  handleMessageBar = messages => {
    this.setState({ message: messages });
  };

  handleEditImage = image => {
    this.setState({ image });
  };

  render() {
    const { message, data, image } = this.state;

    return (
      <div>
        <Header handleModalShow={this.handleModalShow} />
        <section>
          <MessageBar message={message} />

          <CustomModal
            modalShow={this.state.modalShow}
            handleModalHide={this.handleModalHide}
            modalType={this.state.modalType}
            handleModalInfoShow={this.handleModalInfoShow}
            modalInfoType={this.state.modalInfoType}
            handleModalInfoMsgShow={this.handleModalInfoMsgShow}
          />

          <InfoModal
            modalInfoShow={this.state.modalInfoShow}
            handleModalInfoHide={this.handleModalInfoHide}
            modalInfoType={this.state.modalInfoType}
            handleModalHide={this.handleModalHide}
            modalInfoMsg={this.state.modalInfoMsg}
            handleEditImage={this.handleEditImage}
            image={image}
          />

          <div className="container">
            <div className="row">
              <TopBarInfo handleModalShow={this.handleModalShow} />

              <div className="left_menu_second no-padding">
                <LeftSideBar getFilter={this.getFilter} />
              </div>

              <div>
                <HomeRoute
                  handleModalInfoShow={this.handleModalInfoShow}
                  handleModalShow={this.handleModalShow}
                  image={image}
                />
              </div>

              <div className="right_bar no-padding">
                <RightSideBar
                  handleModalShow={this.handleModalShow}
                  handleMessageBar={this.handleMessageBar}
                />
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Home;
