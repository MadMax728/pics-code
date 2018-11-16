import React, { Component } from "react";
import { Link } from "react-router-dom";

import * as images from "../../../../lib/constants/images";

class BusinessProfilePage extends Component {
  render() {
    return (
      <div className="padding-rl-10 middle-section width-80">
        <div className="bussiness-profile-form">
          <div className="form-title">Business profile</div>
          <div className="business-title">
            By activating the business profile, you will get access to the
            following functions:{" "}
          </div>
          <div className="col-sm-3 funtions-wrapper">
            <img src={images.info} alt={"info"} />
            <div className="functions-title">
              Create
              <br />
              <b>ad</b>
            </div>
          </div>
          <div className="col-sm-3 funtions-wrapper">
            <img
              src={images.opened_email_envelope}
              alt={"opened_email_envelope"}
            />
            <div className="functions-title">
              Add
              <br />
              <b>Email</b>
            </div>
          </div>
          <div className="col-sm-3 funtions-wrapper">
            <img src={images.phone_receiver} alt={"phone_receiver"} />
            <div className="functions-title">
              Add
              <br />
              <b>phone number</b>
            </div>
          </div>
          <div className="col-sm-3 funtions-wrapper">
            <img src={images.grid_world} alt={"grid_world"} />
            <div className="functions-title">
              Add
              <br />
              <b>Website</b>
            </div>
          </div>
          <div className="col-sm-12">
            <button className="gradient-button">
              <span>Activate bussiness profile</span>
            </button>
          </div>
          <div className="clearfix" />
          <div className="terms-conditions text-center">
            By clicking on register you agree to our
            <Link to={""}>General Terms &amp; Conditions</Link>,
            <Link to={""}>Terms of Use</Link> and
            <Link to={""}>Data Protection &amp; Privacy Policy</Link>.
          </div>
        </div>
      </div>
    );
  }
}

export default BusinessProfilePage;
