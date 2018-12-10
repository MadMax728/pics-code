import React, { Component } from "react";
import * as images from "../../../../../lib/constants/images";
import PropTypes from "prop-types";
import { modalType, gender } from "../../../../../lib/constants/enumerations";
import SocialNetworks from "./SocialNetworks";
import {
  Text,
  NumberInput,
  RadioButton
} from "../../../../ui-kit/CommonUIComponents";
import { OfferTags, InquiryTags, SelectCategory } from "../../../../common";
import { Translations } from "../../../../../lib/translations";
import { PlaceAutoCompleteLocation, InlineLoading } from "../../../../ui-kit";
import { getUser, updateUserProfile } from "../../../../../actions/profile";
import connect from "react-redux/es/connect/connect";
import { Auth } from "../../../../../auth";
import moment from "moment";

const storage = Auth.extractJwtFromStorage();
let userInfo = null;
if (storage) {
  userInfo = JSON.parse(storage.userInfo);
  //  userInfo = jwtDecode(storage.accessToken);
}

class EditProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      categoryList: [],
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
    const storage = Auth.extractJwtFromStorage();
    window.scrollTo(0, 0);
    if (userInfo) {
      const data = {
        username: userInfo.username
      };
      this.setState({ isLoading: true });
      this.props.getUser(data).then(() => {
        this.setDataOnLoad();
      });
    }
  };

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
    form.location.lat = location.lat
    form.location.lng = location.lng
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
          profileUrl: userData.profileUrl,
          username: userData.username,
          email: userData.email,
          name_company: userData.name,
          location: {
            lat: userData.location.lat,
            lng: userData.location.lng,
            address: userData.location.address,
          },
          birthDate: {
            day: moment.unix(userData.birthDate).format("DD"),
            mon: moment.unix(userData.birthDate).format("MM"),
            year: moment.unix(userData.birthDate).format("YYYY")
          },
          gender: userData.gender,
          category: userData.category,
          phoneNumber: userData.phoneNumber,
          website: userData.website,
          profile_description: userData.profileDescription,
          offer_tag: userData.offerTag,
          inquiry_tag: userData.inquiryTag,
          offerTagList: userData.offerTagList,
          inquiryTagList: userData.inquiryTagList
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
    console.log(this.state.form);
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

    this.props.updateUserProfile(data).then(() => {
      this.setState({ isLoading: true });
      const errors = {};
      if (
        this.props.userDataByUsername.error &&
        this.props.userDataByUsername.error.status === 400
      ) {
        errors.servererror = "Something went wrong";
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
    form[isFor] = selected;
    this.setState({ form });
  };

  render() {
    const { form, isLoading } = this.state;
    const { image } = this.props;

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
                <span className="error-msg highlight">
                  {this.state.error.username}
                </span>
                <label htmlFor="username">
                  {Translations.editProfile.username}
                </label>
                <Text
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  value={form.username}
                  onChange={this.handleChangeField}
                />
                {form.username.length === 0 ? (
                  <img src={images.error} alt={"error"} />
                ) : (
                  <img src={images.checked} alt={"checked"} />
                )}
              </div>
              <div className="form-group margin-bottom-30">
                <span className="error-msg highlight">
                  {this.state.error.name_company}
                </span>
                <label htmlFor="name">
                  {Translations.editProfile.name_company}
                </label>
                <Text
                  type="text"
                  className="form-control"
                  id="name_company"
                  name="name_company"
                  value={form.name_company}
                  onChange={this.handleChangeField}
                />
              </div>
              <div className="col-2">
                <div className="col-sm-6 padding-r-5">
                  <div className="form-group margin-bottom-30">
                    <label htmlFor="city">
                      {Translations.editProfile.D_O_B}
                    </label>
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
                    <label htmlFor="country">
                      {Translations.editProfile.gender}
                    </label>
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
                        <label htmlFor="male">Male</label>
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
                        <label htmlFor="female">Female</label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="form-group margin-bottom-30">
                <span className="error-msg highlight">
                  {this.state.error.category}
                </span>
                <label htmlFor="category">
                  {Translations.editProfile.category}
                </label>
                <SelectCategory
                  value={form.category}
                  className="form-control"
                  handleSelect={this.handleCategory}
                />
              </div>
              <div className="form-group margin-bottom-30">
                <label htmlFor="location" className="margin-bottom-13">
                  Location
                </label>

                <PlaceAutoCompleteLocation
                  className="form-control"
                  handleLocation={this.handleLocation}
                  value={form.location.address}
                />
              </div>
              <div className="form-group margin-bottom-30">
                <span className="error-msg highlight">
                  {this.state.error.phoneNumber}
                </span>
                <label htmlFor="phone-number">
                  {Translations.editProfile.phone_number}
                </label>
                <Text
                  type="text"
                  className="form-control"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={form.phoneNumber}
                  onChange={this.handleChangeField}
                />
              </div>
              <div className="form-group margin-bottom-30">
                <span className="error-msg highlight">
                  {this.state.error.email}
                </span>
                <label htmlFor="email">{Translations.editProfile.email}</label>
                <Text
                  type="text"
                  className="form-control"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={this.handleChangeField}
                />
              </div>
              <div className="form-group margin-bottom-30">
                <span className="error-msg highlight">
                  {this.state.error.website}
                </span>
                <label htmlFor="website">
                  {Translations.editProfile.website}
                </label>
                <Text
                  type="text"
                  className="form-control"
                  id="website"
                  name="website"
                  value={form.website}
                  onChange={this.handleChangeField}
                />
              </div>
              <div className="form-group margin-bottom-30">
                <span className="error-msg highlight">
                  {this.state.error.profile_description}
                </span>
                <label htmlFor="description">
                  {Translations.editProfile.profile_description}
                </label>
                <Text
                  type="text"
                  className="form-control"
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
                <span className="error-msg highlight">
                  {this.state.error.offer_tag}
                </span>
                <label htmlFor="offer-tag">
                  {Translations.editProfile.offer_tag}
                </label>

                <OfferTags
                  value={this.state.form.offerTagList}
                  handleOfferTagChange={this.handleOfferTagChange}
                  handleOfferTagDelete={this.handleOfferTagDelete}
                />
              </div>
              <div className="form-group margin-bottom-30">
                <span className="error-msg highlight">
                  {this.state.error.inquiry_tag}
                </span>
                <label htmlFor="inquiry-tag">
                  {Translations.editProfile.inquiry_tag}
                </label>

                <InquiryTags
                  value={this.state.form.inquiryTagList}
                  handleInquiryTagChange={this.handleInquiryTagChange}
                  handleInquiryTagDelete={this.handleInquiryTagDelete}
                />
              </div>
            </div>
            <SocialNetworks userId={"123"} isOwnerProfile />
            <div className="form-group margin-bottom-30">
              <button className="black_button" type="submit">
                save
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userDataByUsername: state.userDataByUsername
});

const mapDispatchToProps = {
  getUser,
  updateUserProfile
};

EditProfile.propTypes = {
  getUser: PropTypes.func,
  userDataByUsername: PropTypes.object,
  history: PropTypes.any,
  handleModalInfoShow: PropTypes.func.isRequired,
  image: PropTypes.any,
  profile: PropTypes.any,
  updateUserProfile: PropTypes.any
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfile);
