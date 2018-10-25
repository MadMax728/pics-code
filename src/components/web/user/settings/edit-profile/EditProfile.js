import React, { Component } from "react";
import * as images from "../../../../../lib/constants/images";
import Social from "./Social";

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
        isConnectFacebook: false,
        instagram: "",
        isConnectInstagram: true,
        youtube: "",
        isConnectYoutube: false,
        twitter: "",
        isConnectTwitter: false
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

  handleSocialMediaConnect = e => {
    console.log("handleSocialMediaConnect");
    console.log(e.target.id);
  };

  handleSocialMediaChange = e => {
    console.log("handleSocialMediaChange");
    console.log(e.target.id);
  };

  handleSocialMediaRemove = e => {
    console.log("handleSocialMediaRemove");
    console.log(e.target.id);
  };

  handleOnKeyDown = () => {};

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
                <img src={images.pic_1} className="image-wrapr" alt="avatar" />
                <div className="input-file-container">
                  {/* <input className="input-file" id="my-file" type="file" /> */}
                  {/* <label tabindex="0" for="my-file" className="input-file-trigger">
                    Select a file...
                  </label> */}
                </div>
                <div>Edit profile image</div>
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
            <div className="personal-interests-wrapper col-xs-12 no-padding margin-b-25">
              <div className="form-group margin-bottom-15 social-media">
                {/* <label htmlFor="facebook">Facebook</label> */}
                <div className="social-link">
                  {/* <div className="link">www.facebook.com</div> */}
                  <span className="fa fa-facebook" />
                  <button type="button" className="btn-blu">
                    Subscribe
                  </button>
                  <div className="hidden-text">
                    hidden text
                    <span aria-hidden="true">x</span>
                  </div>
                  {/* <Social
                    handleOnKeyDown={this.handleOnKeyDown}
                    socialMedia={form.isConnectFacebook}
                    id={"facebook"}
                    handleSocialMediaChange={this.handleSocialMediaChange}
                    handleSocialMediaRemove={this.handleSocialMediaRemove}
                    handleSocialMediaConnect={this.handleSocialMediaConnect}
                  /> */}
                </div>
              </div>

              <div className="form-group margin-bottom-15 social-media">
                {/* <label htmlFor="instagram">Instagram</label> */}
                <div className="social-link">
                  {/* <div className="link">www.instagram.com</div> */}
                  <span className="fa fa-instagram" />
                  <button type="button" className="btn-blu">
                    Subscribe
                  </button>
                  <div className="hidden-text">
                    hidden text
                    <span aria-hidden="true">x</span>
                  </div>
                  {/* <Social
                    handleOnKeyDown={this.handleOnKeyDown}
                    socialMedia={form.isConnectInstagram}
                    id={"instagram"}
                    handleSocialMediaChange={this.handleSocialMediaChange}
                    handleSocialMediaRemove={this.handleSocialMediaRemove}
                    handleSocialMediaConnect={this.handleSocialMediaConnect}
                  /> */}
                </div>
              </div>
              <div className="form-group margin-bottom-15 social-media">
                {/* <label htmlFor="youtube">Youtube</label> */}
                <div className="social-link">
                  {/* <div className="link">www.youtube.com</div> */}
                  <span className="fa fa-youtube" />
                  <button type="button" className="btn-blu">
                    Subscribe
                  </button>
                  <div className="hidden-text">
                    hidden text
                    <span aria-hidden="true">x</span>
                  </div>
                  {/* <Social
                    handleOnKeyDown={this.handleOnKeyDown}
                    socialMedia={form.isConnectYoutube}
                    id={"youtube"}
                    handleSocialMediaChange={this.handleSocialMediaChange}
                    handleSocialMediaRemove={this.handleSocialMediaRemove}
                    handleSocialMediaConnect={this.handleSocialMediaConnect}
                  /> */}
                </div>
              </div>
              <div className="form-group margin-bottom-15 social-media">
                {/* <label htmlFor="twitter">Twitter</label> */}
                <div className="social-link">
                  {/* <div className="link">www.twitter.com</div> */}
                  <span className="fa fa-twitter" />
                  <button type="button" className="btn-blu">
                    Subscribe
                  </button>
                  <div className="hidden-text">
                    hidden text
                    <span aria-hidden="true">x</span>
                  </div>
                  {/* <Social
                    handleOnKeyDown={this.handleOnKeyDown}
                    socialMedia={form.isConnectTwitter}
                    id={"twitter"}
                    handleSocialMediaChange={this.handleSocialMediaChange}
                    handleSocialMediaRemove={this.handleSocialMediaRemove}
                    handleSocialMediaConnect={this.handleSocialMediaConnect}
                  /> */}
                </div>
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
