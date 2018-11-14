import React, { Component } from "react";
import * as images from "../../../../../lib/constants/images";
import PropTypes from "prop-types";
import { modalType } from "../../../../../lib/constants/enumerations";
import SocialNetworks from "./SocialNetworks";
import {
  Text,
  NumberInput,
  RadioButton
} from "../../../../ui-kit/CommonUIComponents";
import { Translations } from "../../../../../lib/translations";
import { PlaceAutoCompleteLocation } from "../../../../ui-kit";
import { getUser, updateUserProfile } from "../../../../../actions/profile";
import connect from "react-redux/es/connect/connect";

const genderItems = [
  {
    name: "Male",
    className: "",
    checked: true,
    value: "male"
  },
  {
    name: "Female",
    className: "",
    checked: false,
    value: "female"
  }
];

const genderData = [
  {
    name: "gender",
    className: "",
    type: Translations.edit_profile.gender.type,
    items: genderItems
  }
];

class EditProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        username: "",
        name_company: "",
        dob: {
          day: "",
          mon: "",
          year: ""
        },
        gender: "male",
        category: "",
        location: "",
        address: "",
        phone_number: "",
        email: "",
        website: "",
        profile_description: "",
        offer_tag: "",
        inquiry_tag: ""
      },
      error: {}
    };
  }

  handleLocation = (location, address) => {
    this.setState({
      form: { ...this.state.form, location, address }
    });
  };
  formValid = () => {
    let errors = {};
    let isFormValid = true;
    const { form } = this.state;

    if (form.username.length === 0) {
      errors["username"] = "username is required.";
      isFormValid = false;
    }
    if (form.name_company.length === 0) {
      errors["name_company"] = "Company is required.";
      isFormValid = false;
    }
    if (form.location.length === 0) {
      errors["location"] = "Location is required.";
      isFormValid = false;
    }
    if (form.phone_number.length === 0) {
      errors["phone_number"] = "Phone number is required.";
      isFormValid = false;
    }
    if (form.email.length === 0) {
      errors["email"] = "Email is required.";
      isFormValid = false;
    }
    if (form.website.length === 0) {
      errors["website"] = "Website is required.";
      isFormValid = false;
    }
    if (form.profile_description.length === 0) {
      errors["profile_description"] = "Profile description is required.";
      isFormValid = false;
    }
    if (form.offer_tag.length === 0) {
      errors["offer_tag"] = "Offer tag is required.";
      isFormValid = false;
    }
    if (form.inquiry_tag.length === 0) {
      errors["inquiry_tag"] = "Inquiry tag is required.";
      isFormValid = false;
    }
    this.setState({ error: errors });
    return isFormValid;

    // if (form.userName.length === 0 || form.password.length === 0) {
    //   return false;
    // }

    // return isFormValid;
  };

  handleChangeDOB = event => {
    const { form } = this.state;
    form.dob[event.values.name] = event.values.val;
    this.setState({ form });
  };

  handleChangeField = event => {
    const { form } = this.state;
    form[event.values.name] = event.values.val;
    this.setState({ form });
    this.formValid();
  };

  // handelSubmit called when click on submit
  handleSubmit = e => {
    e.preventDefault();
    // if (!this.formValid()) {
    //   return false;
    // }
    // let data = {
    //   "username": this.state.form.username,
    //   "profileDescription": this.state.form.profile_description,
    //   "website": this.state.form.website,
    // }
    let data = {
      name: this.state.form.username,
      offerTag: ["five", "two", "three"],
      inquiryTag: ["one", "two", "three"],
      latitude: this.state.form.location.lat,
      longitude: this.state.form.location.lng,
      profileDescription: this.state.form.profile_description,
      website: this.state.form.website
    };

    this.props.updateUserProfile(data).then(() => {
      console.log("data", this.props.userDataByUsername);
    });
  };

  handleOnKeyDown = () => {};

  handleEditProfile = () => {
    this.props.handleModalInfoShow(modalType.edit_profile);
  };

  render() {
    console.log("location", this.state.form.location);
    const { form } = this.state;
    const { image } = this.props;
    return (
      <div className="padding-rl-10 middle-section width-80">
        <div className="edit-profile-form">
          <form action="">
            <div className="edit-profile-title-wrapr">
              <div className="edit-title-wrapr">
                <div className="form-title">Edit profile</div>
                <div className="form-subtitle">General information</div>
              </div>
              <div className="edit_profile_wrapr">
                <img
                  src={image ? image : images.pic_1}
                  className="image-wrapr"
                  alt="avatar"
                />
                <div className="input-file-container" />
                <div
                  onClick={this.handleEditProfile}
                  onKeyDown={this.handleOnKeyDown}
                  role="button"
                  tabIndex="0"
                >
                  Edit profile image
                </div>
              </div>
            </div>
            <div className="general-information-wrapper">
              <div className="form-group margin-bottom-30">
                <label htmlFor="username">User name</label>
                <Text
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  onChange={this.handleChangeField}
                />
                {form.username.length === 0 ? (
                  <img src={images.error} alt={"error"} />
                ) : (
                  <img src={images.checked} alt={"checked"} />
                )}
                <span>{this.state.error.username}</span>
              </div>
              <div className="form-group margin-bottom-30">
                <label htmlFor="name">Name/Company</label>
                <Text
                  type="text"
                  className="form-control"
                  id="name_company"
                  name="name_company"
                  onChange={this.handleChangeField}
                />
                <span>{this.state.error.name_company}</span>
              </div>
              <div className="col-2">
                <div className="col-sm-6 padding-r-5">
                  <div className="form-group margin-bottom-30">
                    <label htmlFor="city">Date of birth</label>
                    <NumberInput
                      type="number"
                      name="day"
                      value={form.dob.day}
                      min="1"
                      max="31"
                      pattern="[0-9]*"
                      onChange={this.handleChangeDOB}
                    />
                    <NumberInput
                      type="number"
                      name="mon"
                      value={form.dob.mon}
                      min="1"
                      pattern="[0-9]*"
                      max="12"
                      onChange={this.handleChangeDOB}
                    />
                    <NumberInput
                      type="number"
                      name="year"
                      value={form.dob.year}
                      min="1950"
                      pattern="[0-9]*"
                      max="2050"
                      onChange={this.handleChangeDOB}
                    />
                  </div>
                </div>
                <div className="col-sm-6 padding-l-5">
                  <div className="form-group margin-bottom-30">
                    <label htmlFor="country">Gender</label>
                    <ul className="options">
                      <li>
                        <RadioButton
                          type="radio"
                          id="male"
                          name="gender"
                          value="male"
                          defaultChecked={form.gender === "male"}
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
                          defaultChecked={form.gender === "female"}
                          onChange={this.handleChangeField}
                        />
                        <label htmlFor="female">Female</label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="form-group margin-bottom-30">
                <label htmlFor="category">Category</label>
                <Text
                  type="text"
                  className="form-control"
                  id="category"
                  name="category"
                  onChange={this.handleChangeField}
                />
                <span>{this.state.error.category}</span>
              </div>
              <div className="form-group margin-bottom-30">
                <label htmlFor="location" className="margin-bottom-13">
                  Location
                </label>

                <PlaceAutoCompleteLocation
                  className="form-control"
                  handleLocation={this.handleLocation}
                />
              </div>
              <div className="form-group margin-bottom-30">
                <label htmlFor="phone-number">Phone number</label>
                <Text
                  type="text"
                  className="form-control"
                  id="phone_number"
                  name="phone_number"
                  onChange={this.handleChangeField}
                />
                <span>{this.state.error.phone_number}</span>
              </div>
              <div className="form-group margin-bottom-30">
                <label htmlFor="email">Email</label>
                <Text
                  type="text"
                  className="form-control"
                  id="email"
                  name="email"
                  onChange={this.handleChangeField}
                />
                <span>{this.state.error.email}</span>
              </div>
              <div className="form-group margin-bottom-30">
                <label htmlFor="website">Web site</label>
                <Text
                  type="text"
                  className="form-control"
                  id="website"
                  name="website"
                  onChange={this.handleChangeField}
                />
                <span>{this.state.error.website}</span>
              </div>
              <div className="form-group margin-bottom-30">
                <label htmlFor="description">Profile description</label>
                <Text
                  type="text"
                  className="form-control"
                  id="profile_description"
                  name="profile_description"
                  onChange={this.handleChangeField}
                />
                <span>{this.state.error.profile_description}</span>
              </div>
            </div>
            <div className="form-subtitle">Personal interests</div>
            <div className="personal-interests-wrapper">
              <div className="form-group margin-bottom-30">
                <label htmlFor="offer-tag">Offer tag</label>
                <Text
                  type="text"
                  className="form-control"
                  id="offer_tag"
                  name="offer_tag"
                  onChange={this.handleChangeField}
                />
                <span>{this.state.error.offer_tag}</span>
              </div>
              <div className="form-group margin-bottom-30">
                <label htmlFor="inquiry-tag">Inquiry tag</label>
                <Text
                  type="text"
                  className="form-control"
                  id="inquiry_tag"
                  name="inquiry_tag"
                  onChange={this.handleChangeField}
                />
                <span>{this.state.error.inquiry_tag}</span>
              </div>
            </div>
            <SocialNetworks userId={"123"} isOwnerProfile />
            <div className="form-group margin-bottom-30">
              <button className="black_button" onClick={this.handleSubmit}>
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
  updateUserProfile: PropTypes.any
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfile);
