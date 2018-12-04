import React, { Component } from "react";
import Header from "../components/web/Header";
import Footer from "../components/web/Footer";
import { setCookie, getCookie } from "../lib/utils/helpers";
import { Translations } from "../lib/translations";
import {
  LeftSideBar,
  RightSideBar,
  TopBarInfo,
  CustomModal,
  InfoModal,
  HomeRoute,
  MessageBar
} from "../components/common";
import propTypes from "prop-types";

import { connect } from "react-redux";
import { getUser } from "../actions";

import * as images from "../lib/constants/images";
import { Auth } from "../auth";
const storage = Auth.extractJwtFromStorage();
let userInfo = null;
if (storage) {
  userInfo = JSON.parse(storage.userInfo);
}

class Home extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      currentLanguage: "en",
      modalShow: false,
      modalType: "",
      modalInfoShow: false,
      modalInfoType: "",
      modalInfoMsg: "",
      message: "",
      image: null,
      profileImage: null,
      profile: null,
      data: null,
      userDetails: null
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

  /**
   * Here we have to handle language set
   * In localizations and cookie
   * default we have to consider english - en
   * Todo - We can modify cookie logic in production mode
   */
  handleLanguageSwitch = languageCode => {
    // set cookie for default language
    setCookie("interfaceLanguage", languageCode, 90);
    // set language using language code
    Translations.setLanguage(languageCode || "en");
    // we need to update state to re render this component on language switch
    this.setState({ currentLanguage: Translations.getLanguage() });
  };

  getFilter(filterData) {
    //list of array data as object & calling API
    console.log(filterData);
  }

  handleMessageBar = messages => {
    this.setState({ message: messages });
  };

  handleEditImage = image => {
    this.setState({ image: image });
  };

  handleProfile = profile => {
    this.setState({ profile });
  };

  componentDidMount = () => {
    if (userInfo) {
      const data = {
        username: userInfo.username
      };
      this.props.getUser(data).then(() => {
        this.setState({
          image: this.props.userDetails.user.data.profileUrl,
          userDetails: this.props.userDetails.user.data
        })
      });
    } 
  }

  render() {
    const { message, data, image, profile } = this.state;
    // here get current language based on cookie inputs on home render
    Translations.setLanguage(getCookie("interfaceLanguage") || "en");
    return (
      <div>
        <Header
          handleModalShow={this.handleModalShow}
          history={this.props.history}
        />
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
            handleProfile={this.handleProfile}
            image={image}
          />

          <div className="container">
            <div className="row">
              <TopBarInfo
                handleModalShow={this.handleModalShow}
                handleModalInfoShow={this.handleModalInfoShow}
              />

              <div className="left_menu_second no-padding">
                <LeftSideBar getFilter={this.getFilter} />
              </div>

              <div>
                <HomeRoute
                  handleModalInfoShow={this.handleModalInfoShow}
                  handleModalShow={this.handleModalShow}
                  image={image}
                  profile={profile}
                />
              </div>

              <div className="right_bar no-padding">
                <RightSideBar
                  handleLanguageSwitch={this.handleLanguageSwitch}
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
Home.propTypes = {
  history: propTypes.any,
  getUser: propTypes.func
};

const mapStateToProps = state => ({
  userDetails: state.userDataByUsername,
});

const mapDispatchToProps = {
  getUser,
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
