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

  handleChangeDOB = event => {
    const { form } = this.state;
    form.dob[event.target.name] = event.target.value;
    this.setState({ form });
  };

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
                <div className="image-wrapr" />
                <Link to={""}>Edit profile image</Link>
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
                      value={form.dob.day}
                      min="1"
                      max="31"
                      pattern="[0-9]*"
                      onChange={this.handleChangeDOB}
                    />
                    <input
                      type="number"
                      name="mon"
                      value={form.dob.mon}
                      min="1"
                      pattern="[0-9]*"
                      max="12"
                      onChange={this.handleChangeDOB}
                    />
                    <input
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
                      <li onChange={this.handleChangeField}>
                        <input
                          type="radio"
                          id="male"
                          name="gender"
                          value="male"
                          defaultChecked={form.gender === "male"}
                          className="black_button"
                        />
                        <label htmlFor="male">Male</label>
                      </li>
                      <li onChange={this.handleChangeField}>
                        <input
                          type="radio"
                          id="female"
                          value="female"
                          name="gender"
                          defaultChecked={form.gender === "female"}
                        />
                        <label htmlFor="female">Female</label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="form-group margin-bottom-30">
                <label htmlFor="category">Category</label>
                <input
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
                <input
                  type="text"
                  className="form-control"
                  id="location"
                  name="location"
                  onChange={this.handleChangeField}
                />
              </div>
              <div className="form-group margin-bottom-30">
                <label htmlFor="phone-number">Phone number</label>
                <input
                  type="text"
                  className="form-control"
                  id="phone_number"
                  name="phone_number"
                  onChange={this.handleChangeField}
                />
              </div>
              <div className="form-group margin-bottom-30">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  name="email"
                  onChange={this.handleChangeField}
                />
              </div>
              <div className="form-group margin-bottom-30">
                <label htmlFor="website">Web site</label>
                <input
                  type="text"
                  className="form-control"
                  id="website"
                  name="website"
                  onChange={this.handleChangeField}
                />
              </div>
              <div className="form-group margin-bottom-30">
                <label htmlFor="description">Profile description</label>
                <input
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
                <input
                  type="text"
                  className="form-control"
                  id="offer_tag"
                  name="offer_tag"
                  onChange={this.handleChangeField}
                />
              </div>
              <div className="form-group margin-bottom-30">
                <label htmlFor="inquiry-tag">Inquiry tag</label>
                <input
                  type="text"
                  className="form-control"
                  id="inquiry_tag"
                  name="inquiry_tag"
                  onChange={this.handleChangeField}
                />
              </div>
            </div>
            <div className="form-subtitle">Social Network URL</div>
            <div className="personal-interests-wrapper">
              <div className="form-group margin-bottom-30">
                <label htmlFor="facebook">Facebook</label>
                <input
                  type="text"
                  className="form-control"
                  id="facebook"
                  name="facebook"
                  onChange={this.handleChangeField}
                />
              </div>
              <div className="form-group margin-bottom-30">
                <label htmlFor="instagram">Instagram</label>
                <input
                  type="text"
                  className="form-control"
                  id="instagram"
                  name="instagram"
                  onChange={this.handleChangeField}
                />
              </div>
              <div className="form-group margin-bottom-30">
                <label htmlFor="youtube">Youtube</label>
                <input
                  type="text"
                  className="form-control"
                  id="youtube"
                  name="youtube"
                  onChange={this.handleChangeField}
                />
              </div>
              <div className="form-group margin-bottom-30">
                <label htmlFor="linkedin">Linkedin</label>
                <input
                  type="text"
                  className="form-control"
                  id="linkedin"
                  name="linkedin"
                  onChange={this.handleChangeField}
                />
              </div>
              <div className="form-group margin-bottom-30">
                <label htmlFor="twitter">Twitter</label>
                <input
                  type="text"
                  className="form-control"
                  id="twitter"
                  name="twitter"
                  onChange={this.handleChangeField}
                />
              </div>
              <div className="form-group margin-bottom-30">
                <label htmlFor="tumblr">Tumblr</label>
                <input
                  type="text"
                  className="form-control"
                  id="tumblr"
                  name="tumblr"
                  onChange={this.handleChangeField}
                />
              </div>
              <div className="form-group margin-bottom-30">
                <label htmlFor="pintrest">Pintrest</label>
                <input
                  type="text"
                  className="form-control"
                  id="pintrest"
                  name="pintrest"
                  onChange={this.handleChangeField}
                />
              </div>
              <div className="form-group margin-bottom-30">
                <label htmlFor="google">Google+</label>
                <input
                  type="text"
                  className="form-control"
                  id="google"
                  name="google"
                  onChange={this.handleChangeField}
                />
              </div>
            </div>
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

export default EditProfile;
