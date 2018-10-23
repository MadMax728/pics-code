import React, { Component } from "react";
import * as images from "../../../../../lib/constants/images";
import { Link } from "react-router-dom";
class EditProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        username: "",
        name_company: "",
        dob: "",
        gender: "male",
        category: "",
        location: "",
        phone_number: "",
        email: "",
        website: "",
        profile_description: "",
        offer_tag: "",
        inquiry_tag: "",
        facebook: "",
        instagram: "",
        youtube: "",
        linkedin: "",
        twitter: "",
        tumblr: "",
        pintrest: "",
        google: ""
      }
    };
  }

  handleCity = () => {};

  handleGender = () => {};

  handleChangeField = event => {
    const { form } = this.state;
    form[event.target.name] = event.target.value;
    this.setState({ form });
    console.log(this.state.form);
  };

  // handelSubmit called when click on submit
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.form);
  };

  render() {
    const { form } = this.state;

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
                {/* <div className="image-wrapr" /> */}
                <img src={images.pic_1} className="image-wrapr" alt="avatar" />
                <div className="input-file-container">
                  <input className="input-file" id="my-file" type="file" />
                  <label className="input-file-trigger">
                    Edit profile image
                  </label>
                </div>
                {/* <Link to={""}>Edit profile image</Link> */}
              </div>
            </div>
            <div className="general-information-wrapper">
              <div className="form-group margin-bottom-30">
                <label htmlFor="username">User name</label>
                <input
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
                <input
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
                    <input
                      type="number"
                      name="day"
                      value="1"
                      min="1"
                      max="31"
                      onChange={this.handleCity}
                    />
                    <input
                      type="number"
                      name="month"
                      value="1"
                      min="1"
                      max="12"
                      onChange={this.handleCity}
                    />
                    <input
                      type="number"
                      name="year"
                      value="2000"
                      min="1950"
                      max="2050"
                      onChange={this.handleCity}
                    />
                  </div>
                </div>
                <div className="col-sm-6 padding-l-5">
                  <div className="form-group margin-bottom-30">
                    <label htmlFor="country">Gender</label>
                    <ul className="options">
                      <li>
                        <input
                          type="radio"
                          id="male"
                          name="amount"
                          className="black_button"
                          checked
                          onChange={this.handleGender}
                        />
                        <label htmlFor="male">Male</label>
                      </li>
                      <li>
                        <input type="radio" id="female" name="amount" />
                        <label htmlFor="female">Female</label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="form-group margin-bottom-30">
                <label htmlFor="category">Category</label>
                <input type="text" className="form-control" id="category" />
              </div>
              <div className="form-group margin-bottom-30">
                <label htmlFor="location" className="margin-bottom-13">
                  Location
                </label>
                <input type="text" className="form-control" id="location" />
              </div>
              <div className="form-group margin-bottom-30">
                <label htmlFor="phone-number">Phone number</label>
                <input type="text" className="form-control" id="phone-number" />
              </div>
              <div className="form-group margin-bottom-30">
                <label htmlFor="email">Email</label>
                <input type="text" className="form-control" id="email" />
              </div>
              <div className="form-group margin-bottom-30">
                <label htmlFor="website">Web site</label>
                <input type="text" className="form-control" id="website" />
              </div>
              <div className="form-group margin-bottom-30">
                <label htmlFor="description">Profile description</label>
                <input type="text" className="form-control" id="description" />
              </div>
            </div>
            <div className="form-subtitle">Personal interests</div>
            <div className="personal-interests-wrapper">
              <div className="form-group margin-bottom-30">
                <label htmlFor="offer-tag">Offer tag</label>
                <input type="text" className="form-control" id="offer-tag" />
              </div>
              <div className="form-group margin-bottom-30">
                <label htmlFor="inquiry-tag">Inquiry tag</label>
                <input type="text" className="form-control" id="inquiry-tag" />
              </div>
            </div>
            <div className="form-subtitle">Social Network URL</div>
            <div className="personal-interests-wrapper">
              <div className="form-group margin-bottom-30">
                <label htmlFor="facebook">Facebook</label>
                <input type="text" className="form-control" id="facebook" />
              </div>
              <div className="form-group margin-bottom-30">
                <label htmlFor="instagram">Instagram</label>
                <input type="text" className="form-control" id="instagram" />
              </div>
              <div className="form-group margin-bottom-30">
                <label htmlFor="youtube">Youtube</label>
                <input type="text" className="form-control" id="youtube" />
              </div>
              <div className="form-group margin-bottom-30">
                <label htmlFor="linkedin">Linkedin</label>
                <input type="text" className="form-control" id="linkedin" />
              </div>
              <div className="form-group margin-bottom-30">
                <label htmlFor="twitter">Twitter</label>
                <input type="text" className="form-control" id="twitter" />
              </div>
              <div className="form-group margin-bottom-30">
                <label htmlFor="tumblr">Tumblr</label>
                <input type="text" className="form-control" id="tumblr" />
              </div>
              <div className="form-group margin-bottom-30">
                <label htmlFor="pintrest">Pintrest</label>
                <input type="text" className="form-control" id="pintrest" />
              </div>
              <div className="form-group margin-bottom-30">
                <label htmlFor="google">Google+</label>
                <input type="text" className="form-control" id="google" />
              </div>
            </div>
            <div className="form-group margin-bottom-30">
              <button className="black_button">save</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default EditProfile;
