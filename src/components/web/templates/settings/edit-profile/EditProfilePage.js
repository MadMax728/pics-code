import React, { Component } from "react";
import * as images from "../../../../../lib/constants/images";
import PropTypes from "prop-types";
import { modalType, tagsType } from "../../../../../lib/constants/enumerations";
import SocialNetworks from "./SocialNetworks";
import {
  Text,
  NumberInput,
  RadioButton
} from "../../../../ui-kit/CommonUIComponents";
import { Tags } from "../../../../common";
import { Translations } from "../../../../../lib/translations";
import { PlaceAutoCompleteLocation } from "../../../../ui-kit";
import { getUser, updateUserProfile } from "../../../../../actions/profile";
import connect from "react-redux/es/connect/connect";
import jwtDecode from "jwt-decode";
import { Auth } from "../../../../../auth";
import {
  getOfferTag,
  getInquiryTag,
  addInquiryTag,
  addOfferTag
} from "../../../../../actions/tags";

const storage = Auth.extractJwtFromStorage();
let userInfo = null;
if (storage) {
  userInfo = JSON.parse(storage.userInfo);
//  userInfo = jwtDecode(storage.accessToken);
}
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
        offer_tag: [],
        inquiry_tag: [],
        offerTagList: [],
        inquiryTagList: []
      },
      error: {},
      tags: [],
      suggestions: {
        offerTagList: [],
        inquiryTagList: []
      }
    };
  }

  componentDidMount = () => {
    this.props.getOfferTag().then(() => {
      console.log(this.props.tags);
      
      this.setState({
        suggestions: {
          offerTagList: this.props.tags.offerTags
        }
      });
    });

    this.props.getInquiryTag().then(() => {
      this.setState({
        suggestions: {
          inquiryTagList: this.props.tags.inquiryTags
        }
      });
    });

    if (userInfo) {
      const data = {
        username: userInfo.username
      };
      this.props.getUser(data).then(() => {
        this.setDataOnLoad();
      });
    } 
  }

  handleOfferTagChange = tags => {
    const { form } = this.state;
    form.offer_tag = tags;
    this.setState({ form });
  };
  handleInquiryTagChange = tags => {
    const { form } = this.state;
    form.inquiry_tag = tags;
    this.setState({ form });
  };

  handleLocation = (location, address) => {
    this.setState({
      form: { ...this.state.form, location, address }
    });
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
    // this.formValid();
  };
  setDataOnLoad = () => {
    if (this.props.userDataByUsername.user) {
      const userData = this.props.userDataByUsername.user.data;
      console.log(userData);
      
      this.setState({
        form: {
          username: userData.username,
          email: userData.email,
          name_company: userData.name,
          dob: {
            day: "",
            mon: "",
            year: ""
          },
          gender: userData.gender,
          category: userData.category,
          location: "",
          address: "",
          phone_number: "",
          website: userData.website,
          profile_description: userData.profileDescription,
          offer_tag: userData.offerTag,
          inquiry_tag: userData.inquiryTag,
          offerTagList: userData.offerTagList,
          inquiryTagList: userData.inquiryTagList
        }
      });
    }
  };

  // handelSubmit called when click on submit
  handleSubmit = e => {
    e.preventDefault();
    const data = {
      name: this.state.form.name_company,
      gender: this.state.form.gender,
      offerTag: this.state.form.offer_tag,
      inquiryTag: this.state.form.inquiry_tag,
      latitude: this.state.form.location.lat,
      longitude: this.state.form.location.lng,
      profileDescription: this.state.form.profile_description,
      website: this.state.form.website
    };

    this.props.updateUserProfile(data).then(() => {
      const errors = {};
      if (
        this.props.userDataByUsername.error &&
        this.props.userDataByUsername.error.status === 400
      ) {
        errors.servererror = "Something went wrong";
        this.setState({ error: errors });
      } else {
        this.setDataOnLoad();
      }
    });
  };

  handleOnKeyDown = () => {};

  handleEditProfile = () => {
    this.props.handleModalInfoShow(modalType.edit_profile);
  };

  handleAddition = (data ,tag) => {
    const { form, suggestions } = this.state;
    const indexOf = suggestions[data].findIndex(f => {
      return f.id === tag.id;
    });

    if (indexOf === -1) {
      if (data === tagsType.inquiryTagList)
      {
        const tagName = {
          inquiryTagName: tag.name
        }
        this.props.addInquiryTag(tagName).then(()=> {
          
        })
      }
      else if (data === tagsType.offerTagList)
      {
        const tagName = {
          offerTagName: tag.name
        }
        this.props.addOfferTag(tagName).then(()=> {

        })
      }
    } else if (data === tagsType.inquiryTagList){
        form.inquiry_tag.push(tag.id);
        form.inquiryTagList.push(tag);
        this.setState({ form });
      }
      else if (data === tagsType.offerTagList) {
        form.offer_tag.push(tag.id);
        form.offerTagList.push(tag);
        this.setState({ form });
      }
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
                <div className="form-title">
                  {Translations.left_sidebar_settings.edit_profile}
                </div>
                <div className="form-subtitle">
                  {Translations.editProfile.general_information}
                </div>
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
                  {Translations.modal_header.edit_profile_image}
                </div>
              </div>
            </div>
            <div className="general-information-wrapper">
              <div className="form-group margin-bottom-30">
                <span className="error-msg highlight">{this.state.error.username}</span>
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
              <span className="error-msg highlight">{this.state.error.name_company}</span>
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
              <span className="error-msg highlight">{this.state.error.category}</span>
                <label htmlFor="category">
                  {Translations.editProfile.category}
                </label>
                <Text
                  type="text"
                  className="form-control"
                  id="category"
                  name="category"
                  value={form.category}
                  onChange={this.handleChangeField}
                />
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
                <span className="error-msg highlight">{this.state.error.phone_number}</span>  
                <label htmlFor="phone-number">
                  {Translations.editProfile.phone_number}
                </label>
                <Text
                  type="text"
                  className="form-control"
                  id="phone_number"
                  name="phone_number"
                  value={form.phone_number}
                  onChange={this.handleChangeField}
                />
              </div>
              <div className="form-group margin-bottom-30">
                <span className="error-msg highlight">{this.state.error.email}</span>
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
                <span className="error-msg highlight">{this.state.error.website}</span>
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
                <span className="error-msg highlight">{this.state.error.profile_description}</span>
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
                <span className="error-msg highlight">{this.state.error.offer_tag}</span>
                <label htmlFor="offer-tag">
                  {Translations.editProfile.offer_tag}
                </label>
                <Tags
                  value={this.state.form.offerTagList}
                  onChange={this.handleOfferTagChange}
                  suggestion={this.state.suggestions.offerTagList}
                  handleAddition={this.handleAddition}
                  for={'offerTagList'}
                />
              </div>
              <div className="form-group margin-bottom-30">
                <span className="error-msg highlight">{this.state.error.inquiry_tag}</span>
                <label htmlFor="inquiry-tag">
                  {Translations.editProfile.inquiryTagList}
                </label>
                <Tags
                  value={this.state.form.inquiryTagList}
                  onChange={this.handleInquiryTagChange}
                  suggestion={this.state.suggestions.inquiryTagList}
                  handleAddition={this.handleAddition}
                  for={'inquiryTagList'}
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

const mapStateToProps = state => ({
  userDataByUsername: state.userDataByUsername,
  tags: state.tags
});

const mapDispatchToProps = {
  getUser,
  updateUserProfile,
  getOfferTag,
  getInquiryTag,
  addOfferTag,
  addInquiryTag
};

EditProfile.propTypes = {
  getUser: PropTypes.func,
  userDataByUsername: PropTypes.object,
  history: PropTypes.any,
  handleModalInfoShow: PropTypes.func.isRequired,
  image: PropTypes.any,
  updateUserProfile: PropTypes.any,
  getOfferTag: PropTypes.func,
  getInquiryTag: PropTypes.func,
  addOfferTag: PropTypes.func,
  addInquiryTag: PropTypes.func,
  tags: PropTypes.any
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfile);
