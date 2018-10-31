import React, { Component } from "react";
import * as images from "../../../../../lib/constants/images";
import PropTypes from "prop-types";
import { modalType } from "../../../../../lib/constants/enumerations";
import SocialNetworks from "./SocialNetworks";
import {
  Text,
  NumberInput,
  RadioBtn
} from "../../../../ui-kit/CommonUIComponents";
import { Translations } from "../../../../../lib/translations";

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
        phone_number: "",
        email: "",
        website: "",
        profile_description: "",
        offer_tag: "",
        inquiry_tag: ""
      }
    };
  }

  handleChangeDOB = event => {
    const { form } = this.state;
    form.dob[event.values.name] = event.values.val;
    this.setState({ form });
  };

  handleChangeField = event => {
    const { form } = this.state;
    form[event.values.name] = event.values.val;
    this.setState({ form });
  };

  // handelSubmit called when click on submit
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.form);
  };

  handleOnKeyDown = () => {};

  handleEditProfile = () => {
    this.props.handleModalInfoShow(modalType.edit_profile);
  };

  render() {
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
                    <div className="options">
                      <RadioBtn
                        foruse={genderData.name}
                        name="gender"
                        items={genderItems}
                        onChange={this.handleChangeField}
                      />
                    </div>
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
              </div>
              <div className="form-group margin-bottom-30">
                <label htmlFor="location" className="margin-bottom-13">
                  Location
                </label>
                <Text
                  type="text"
                  className="form-control"
                  id="location"
                  name="location"
                  onChange={this.handleChangeField}
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

EditProfile.propTypes = {
  handleModalInfoShow: PropTypes.func.isRequired,
  image: PropTypes.any
};

export default EditProfile;
