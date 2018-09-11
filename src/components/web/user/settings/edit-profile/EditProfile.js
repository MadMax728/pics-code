import React, { Component } from "react";
import * as images from "../../../../../lib/constants/images";

class EditProfile extends Component {
  handleCity = () => {};

  handleGender = () => {};

  render() {
    return (
      <div className="padding-rl-10 middle-section width-80">
        <div className="edit-profile-form">
          <form action="">
            <div className="form-title">Edit profile</div>
            <div className="form-subtitle">General information</div>
            <div className="general-information-wrapper">
              <div className="form-group">
                <label htmlFor="username">User name</label>
                <input type="text" className="form-control" id="username" />
                <img src={images.checked} alt={"checked"} />
              </div>
              <div className="form-group">
                <label htmlFor="name">Name/Company</label>
                <input type="text" className="form-control" id="name" />
              </div>
              <div className="col-2">
                <div className="col-sm-6 padding-r-5">
                  <div className="form-group">
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
                  <div className="form-group">
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
              <div className="form-group">
                <label htmlFor="category">Category</label>
                <input type="text" className="form-control" id="category" />
              </div>
              <div className="form-group">
                <label htmlFor="location">Location</label>
                <input type="text" className="form-control" id="location" />
              </div>
              <div className="form-group">
                <label htmlFor="phone-number">Phone number</label>
                <input type="text" className="form-control" id="phone-number" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" className="form-control" id="email" />
              </div>
              <div className="form-group">
                <label htmlFor="website">Web site</label>
                <input type="text" className="form-control" id="website" />
              </div>
              <div className="form-group">
                <label htmlFor="description">Profile description</label>
                <input type="text" className="form-control" id="description" />
              </div>
            </div>
            <div className="form-subtitle">Personal interests</div>
            <div className="personal-interests-wrapper">
              <div className="form-group">
                <label htmlFor="offer-tag">Offer tag</label>
                <input type="text" className="form-control" id="offer-tag" />
              </div>
              <div className="form-group">
                <label htmlFor="inquiry-tag">Inquiry tag</label>
                <input type="text" className="form-control" id="inquiry-tag" />
              </div>
            </div>
            <div className="form-subtitle">Social Network URL</div>
            <div className="personal-interests-wrapper">
              <div className="form-group">
                <label htmlFor="facebook">Facebook</label>
                <input type="text" className="form-control" id="facebook" />
              </div>
              <div className="form-group">
                <label htmlFor="instagram">Instagram</label>
                <input type="text" className="form-control" id="instagram" />
              </div>
              <div className="form-group">
                <label htmlFor="youtube">Youtube</label>
                <input type="text" className="form-control" id="youtube" />
              </div>
              <div className="form-group">
                <label htmlFor="linkedin">Linkedin</label>
                <input type="text" className="form-control" id="linkedin" />
              </div>
              <div className="form-group">
                <label htmlFor="twitter">Twitter</label>
                <input type="text" className="form-control" id="twitter" />
              </div>
              <div className="form-group">
                <label htmlFor="tumblr">Tumblr</label>
                <input type="text" className="form-control" id="tumblr" />
              </div>
              <div className="form-group">
                <label htmlFor="pintrest">Pintrest</label>
                <input type="text" className="form-control" id="pintrest" />
              </div>
              <div className="form-group">
                <label htmlFor="google">Google+</label>
                <input type="text" className="form-control" id="google" />
              </div>
            </div>
            <div className="form-group">
              <button className="black_button">save</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default EditProfile;
