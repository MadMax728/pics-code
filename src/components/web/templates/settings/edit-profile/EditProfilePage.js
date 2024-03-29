import React, { Component } from "react";
import * as images from "../../../../../lib/constants/images";
import PropTypes from "prop-types";
import { modalType, gender } from "../../../../../lib/constants/enumerations";
import SocialNetworks from "./SocialNetworks";
import {
  NumberInput,
  RadioButton,
  Input,
  Button,
  PlaceAutoCompleteLocation,
  InlineLoading,
  Label,
  ErrorSpan,
  Textarea
} from "../../../../ui-kit";
import { OfferTags, InquiryTags, SelectCategory } from "../../../../common";
import { Translations } from "../../../../../lib/translations";
import { getUser, updateUserProfile } from "../../../../../actions";
import { connect } from "react-redux";
import { Auth } from "../../../../../auth";
import moment from "moment";
import * as routes from "../../../../../lib/constants/routes";

class EditProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      userInfo: null,
      categoryList: [],
      searchKeyword: this.props.searchData.searchKeyword,
      form: {
        image: this.props.image,
        username: "",
        name_company: "",
        birthDate: {
          day: "",
          mon: "",
          year: ""
        },
        gender: "male",
        category: "",
        location: {
          lat: "",
          lng: "",
          address: ""
        },
        phoneNumber: "",
        email: "",
        website: "",
        profile_description: "",
        offer_tag: [],
        inquiry_tag: [],
        offerTagList: [],
        inquiryTagList: []
      },
      error: {},
      tags: []
    };
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);
    const storage = Auth.extractJwtFromStorage();
    let userInfo = null;
    if (storage) {
      userInfo = JSON.parse(storage.userInfo);
    }
    if (userInfo) {
      this.setState({ userInfo });
      const data = {
        username: userInfo.username
      };
      this.setState({ isLoading: true });
      this.props.getUser(data).then(() => {
        this.setDataOnLoad();
      });
    }
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.searchData.searchKeyword !== prevState.searchKeyword) {
      nextProps.history.push(
        routes.ROOT_ROUTE + "?search=" + nextProps.searchData.searchKeyword
      );
    }
    return null;
  }

  handleOfferTagChange = (id, tag) => {
    const { form } = this.state;
    form.offer_tag.push(id);
    form.offerTagList.push(tag);
    this.setState({ form });
  };

  handleInquiryTagDelete = id => {
    const { form } = this.state;
    this.setState({
      form: {
        ...this.state.form,
        inquiry_tag: form.inquiry_tag.filter(
          tag => tag !== form.inquiryTagList[id].id
        ),
        inquiryTagList: form.inquiryTagList.filter(
          tag => tag.id !== form.inquiryTagList[id].id
        )
      }
    });
  };

  handleInquiryTagChange = (id, tag) => {
    const { form } = this.state;
    form.inquiry_tag.push(id);
    form.inquiryTagList.push(tag);
    this.setState({ form });
  };

  handleLocation = (location, address) => {
    const { form } = this.state;
    form.location.lat = location.lat;
    form.location.lng = location.lng;
    form.location.address = address;
    this.setState({ form });
  };

  handleChangeDOB = event => {
    const { form } = this.state;
    form.birthDate[event.values.name] = event.values.val;
    this.setState({ form });
  };

  handleChangeField = event => {
    const { form } = this.state;
    form[event.values.name] = event.values.val;
    this.setState({ form });
    // this.formValid();
  };
  setDataOnLoad = () => {
    if (this.props.userDataByUsername.user) {
      const userData = this.props.userDataByUsername.user.data;
      this.setState({
        form: {
          profileUrl: userData.profileUrl ? userData.profileUrl : "",
          username: userData.username ? userData.username : "",
          email: userData.email ? userData.email : "",
          name_company: userData.name ? userData.name : "",
          location: {
            lat: userData.location ? userData.location.lat : "",
            lng: userData.location ? userData.location.lng : "",
            address: userData.location ? userData.location.address : ""
          },
          birthDate: {
            day: userData.birthDate
              ? moment.unix(userData.birthDate).format("DD")
              : "",
            mon: userData.birthDate
              ? moment.unix(userData.birthDate).format("MM")
              : "",
            year: userData.birthDate
              ? moment.unix(userData.birthDate).format("YYYY")
              : ""
          },
          gender: userData.gender ? userData.gender : gender.male,
          category: userData.category ? userData.category : "",
          phoneNumber: userData.phoneNumber ? userData.phoneNumber : "",
          website: userData.website ? userData.website : "",
          profile_description: userData.profileDescription
            ? userData.profileDescription
            : "",
          offer_tag: userData.offerTag ? userData.offerTag : [],
          inquiry_tag: userData.inquiryTag ? userData.inquiryTag : [],
          offerTagList:
            userData.offerTagList &&
            userData.offerTagList.length !== 0 &&
            userData.offerTagList.length !== undefined
              ? userData.offerTagList
              : [],
          inquiryTagList:
            userData.inquiryTagList &&
            userData.inquiryTagList.length !== 0 &&
            userData.inquiryTagList.length !== undefined
              ? userData.inquiryTagList
              : []
        }
      });
    }
    this.setState({ isLoading: false });
  };

  handlegetDOBDate = () => {
    const { form } = this.state;
    if (form.birthDate.day && form.birthDate.mon && form.birthDate.year) {
      const date =
        form.birthDate.mon +
        "/" +
        form.birthDate.day +
        "/" +
        form.birthDate.year;
      return date;
    }
  };

  // handelSubmit called when click on submit
  handleSubmit = e => {
    e.preventDefault();
    const data = {
      profileImage: this.props.profile ? this.props.profile : "",
      name: this.state.form.name_company,
      category: this.state.form.category,
      gender: this.state.form.gender,
      offerTag: this.state.form.offer_tag,
      inquiryTag: this.state.form.inquiry_tag,
      birthDate: this.handlegetDOBDate(),
      phoneNumber: this.state.form.phoneNumber,
      location: {
        latitude: this.state.form.location.lat,
        longitude: this.state.form.location.lng,
        address: this.state.form.location.address
      },
      profileDescription: this.state.form.profile_description,
      website: this.state.form.website
    };

    const { userInfo } = this.state;
    this.props.updateUserProfile(data).then(() => {
      this.setState({ isLoading: true });
      const errors = {};
      if (
        this.props.userDataByUsername.error &&
        this.props.userDataByUsername.error.status === 400
      ) {
        errors.servererror = Translations.comman_error.server_error;
        this.setState({ error: errors });
      } else if (userInfo) {
        const data = {
          username: userInfo.username
        };
        this.props.getUser(data).then(() => {
          this.setDataOnLoad();
        });
      }
    });
  };

  handleOnKeyDown = () => {};

  handleEditProfile = () => {
    this.props.handleModalInfoShow(modalType.edit_profile);
  };

  handleOfferTagDelete = id => {
    const { form } = this.state;
    this.setState({
      form: {
        ...this.state.form,
        offer_tag: form.offer_tag.filter(
          tag => tag !== form.offerTagList[id].id
        ),
        offerTagList: form.offerTagList.filter(
          tag => tag.id !== form.offerTagList[id].id
        )
      }
    });
  };

  handleCategory = (isFor, selected) => {
    const { form } = this.state;
    form[isFor] = selected.id;
    this.setState({ form });
  };

  render() {
    const { form, isLoading, userInfo, error } = this.state;
    const { image } = this.props;
    const selectedUserType = "creator";
    return (
      <div className="padding-rl-10 middle-section width-80">
        {isLoading && <InlineLoading />}
        <div className="edit-profile-form">
          <form onSubmit={this.handleSubmit}>
            <div className="edit-profile-title-wrapr">
              <div className="edit-title-wrapr">
                <div className="form-title">
                  {Translations.left_sidebar_settings.edit_profile}
                </div>
                <div className="form-subtitle">
                  {Translations.editProfile.general_information}
                </div>
              </div>
              <div className="edit_profile_wrapr">
                {image && (
                  <img
                    src={image ? image : images.pic_1}
                    className="image-wrapr"
                    alt="avatar"
                  />
                )}
                {!image && (
                  <img
                    src={form.profileUrl ? form.profileUrl : images.pic_1}
                    className="image-wrapr"
                    alt="avatar"
                  />
                )}
                <div className="input-file-container" />
                <div
                  onClick={this.handleEditProfile}
                  onKeyDown={this.handleOnKeyDown}
                  role="button"
                  tabIndex="0"
                >
                  {Translations.modal_header.edit_profile_image}
                </div>
              </div>
            </div>
            <div className="general-information-wrapper">
              <div className="form-group margin-bottom-30">
                <ErrorSpan value={error.username} />
                <Label
                  htmlFor="username"
                  value={Translations.editProfile.username}
                />
                <Input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  value={form.username}
                  onChange={this.handleChangeField}
                  readOnly={form.username ? "readonly" : ""}
                />
                {form.username.length === 0 ? (
                  <img src={images.error} alt={"error"} />
                ) : (
                  <img src={images.checked} alt={"checked"} />
                )}
              </div>
              <div className="form-group margin-bottom-30">
                <ErrorSpan value={error.name_company} />
                <Label
                  htmlFor="name"
                  value={
                    userInfo && userInfo.userType === selectedUserType
                      ? Translations.editProfile.user
                      : Translations.editProfile.name_company
                  }
                />
                <Input
                  type="text"
                  className="form-control"
                  id="name_company"
                  name="name_company"
                  value={form.name_company}
                  onChange={this.handleChangeField}
                />
              </div>
              {userInfo && userInfo.userType === selectedUserType ? (
                <div className="col-2">
                  <div className="col-sm-6 padding-r-5">
                    <div className="form-group margin-bottom-30 birth-date">
                      <Label
                        htmlFor="city"
                        value={Translations.editProfile.D_O_B}
                      />
                      <NumberInput
                        type="number"
                        name="day"
                        value={form.birthDate.day}
                        min="1"
                        max="31"
                        pattern="[0-9]*"
                        onChange={this.handleChangeDOB}
                      />
                      <NumberInput
                        type="number"
                        name="mon"
                        value={form.birthDate.mon}
                        min="1"
                        pattern="[0-9]*"
                        max="12"
                        onChange={this.handleChangeDOB}
                      />
                      <NumberInput
                        type="number"
                        name="year"
                        value={form.birthDate.year}
                        min="1950"
                        pattern="[0-9]*"
                        max="2050"
                        onChange={this.handleChangeDOB}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 padding-l-5">
                    <div className="form-group margin-bottom-30">
                      <Label
                        htmlFor="country"
                        value={Translations.editProfile.gender}
                      />
                      <ul className="options">
                        <li>
                          <RadioButton
                            type="radio"
                            id="male"
                            name="gender"
                            value="male"
                            defaultChecked={
                              form.gender.toLowerCase() === gender.male
                            }
                            className="black_button"
                            onChange={this.handleChangeField}
                          />
                          <Label
                            htmlFor="male"
                            value={Translations.editProfile.male}
                          />
                        </li>
                        <li>
                          <RadioButton
                            type="radio"
                            id="female"
                            value="female"
                            name="gender"
                            defaultChecked={
                              form.gender.toLowerCase() === gender.female
                            }
                            onChange={this.handleChangeField}
                          />
                          <Label
                            htmlFor="female"
                            value={Translations.editProfile.female}
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
              <div className="form-group margin-bottom-30">
                <ErrorSpan value={error.category} />
                <Label
                  htmlFor="category"
                  value={Translations.editProfile.category}
                />
                <SelectCategory
                  value={form.category}
                  className="form-control"
                  handleSelect={this.handleCategory}
                />
              </div>
              <div className="form-group margin-bottom-30">
                <Label
                  htmlFor="location"
                  className="margin-bottom-13"
                  value={Translations.editProfile.location}
                />
                <PlaceAutoCompleteLocation
                  className="form-control"
                  handleLocation={this.handleLocation}
                  value={form.location.address}
                />
              </div>
              <div className="form-group margin-bottom-30">
                <ErrorSpan value={error.phoneNumber} />
                <Label
                  htmlFor="phone-number"
                  value={Translations.editProfile.phone_number}
                />
                <Input
                  type="tel"
                  className="form-control"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={form.phoneNumber}
                  onChange={this.handleChangeField}
                />
              </div>
              <div className="form-group margin-bottom-30">
                <ErrorSpan value={error.email} />
                <Label htmlFor="email" value={Translations.editProfile.email} />
                <Input
                  type="text"
                  className="form-control"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={this.handleChangeField}
                  readOnly={form.email ? "readonly" : ""}
                />
              </div>
              <div className="form-group margin-bottom-30">
                <ErrorSpan value={error.website} />
                <Label
                  htmlFor="website"
                  value={Translations.editProfile.website}
                />
                <Input
                  type="text"
                  className="form-control"
                  id="website"
                  name="website"
                  value={form.website}
                  onChange={this.handleChangeField}
                />
              </div>
              <div className="form-group margin-bottom-30">
                <ErrorSpan value={error.profile_description} />
                <Label
                  htmlFor="description"
                  value={Translations.editProfile.profile_description}
                />
                <Textarea
                  className="form-control full-width-textarea"
                  id="profile_description"
                  name="profile_description"
                  value={form.profile_description}
                  onChange={this.handleChangeField}
                />
              </div>
            </div>
            <div className="form-subtitle">
              {Translations.editProfile.Personal_interests}
            </div>
            <div className="personal-interests-wrapper">
              <div className="form-group margin-bottom-30">
                <ErrorSpan value={error.offer_tag} />
                <Label
                  htmlFor="offer-tag"
                  value={Translations.editProfile.offer_tag}
                />
                <OfferTags
                  value={this.state.form.offerTagList}
                  handleOfferTagChange={this.handleOfferTagChange}
                  handleOfferTagDelete={this.handleOfferTagDelete}
                />
              </div>
              <div className="form-group margin-bottom-30">
                <ErrorSpan value={error.inquiry_tag} />
                <Label
                  htmlFor="inquiry-tag"
                  value={Translations.editProfile.inquiry_tag}
                />
                <InquiryTags
                  value={this.state.form.inquiryTagList}
                  handleInquiryTagChange={this.handleInquiryTagChange}
                  handleInquiryTagDelete={this.handleInquiryTagDelete}
                />
              </div>
            </div>
            <SocialNetworks
              userId={"123"}
              isOwnerProfile
              handleChangeField={this.handleChangeField}
            />
            <div className="form-group margin-bottom-30">
              <Button
                className="black_button"
                type="submit"
                text={Translations.editProfile.save}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userDataByUsername: state.userDataByUsername,
  searchData: state.searchData
});

const mapDispatchToProps = {
  getUser,
  updateUserProfile
};

EditProfile.propTypes = {
  getUser: PropTypes.func,
  userDataByUsername: PropTypes.object,
  handleModalInfoShow: PropTypes.func.isRequired,
  image: PropTypes.any,
  profile: PropTypes.any,
  updateUserProfile: PropTypes.any,
  searchData: PropTypes.any,
  history: PropTypes.any,
  loginData: PropTypes.any
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfile);
