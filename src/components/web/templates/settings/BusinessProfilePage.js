import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Translations } from "../../../../lib/translations";

import * as images from "../../../../lib/constants/images";

class BusinessProfilePage extends Component {
  render() {
    return (
      <div className="padding-rl-10 middle-section width-80">
        <div className="bussiness-profile-form">
          <div className="form-title">
            {Translations.Business_profile.Business_profile}
          </div>
          <div className="business-title">
            {Translations.Business_profile.Business_profile_content}
          </div>
          <div className="col-sm-3 funtions-wrapper">
            <img src={images.info} alt={"info"} />
            <div className="functions-title">
              {Translations.Business_profile.Create}
              <br />
              <b>{Translations.Business_profile.ad}</b>
            </div>
          </div>
          <div className="col-sm-3 funtions-wrapper">
            <img
              src={images.opened_email_envelope}
              alt={"opened_email_envelope"}
            />
            <div className="functions-title">
              {Translations.Business_profile.Add}
              <br />
              <b>{Translations.Business_profile.email}</b>
            </div>
          </div>
          <div className="col-sm-3 funtions-wrapper">
            <img src={images.phone_receiver} alt={"phone_receiver"} />
            <div className="functions-title">
              {Translations.Business_profile.Add}
              <br />
              <b>{Translations.Business_profile.phone_number}</b>
            </div>
          </div>
          <div className="col-sm-3 funtions-wrapper">
            <img src={images.grid_world} alt={"grid_world"} />
            <div className="functions-title">
              {Translations.Business_profile.Add}
              <br />
              <b>{Translations.Business_profile.Website}</b>
            </div>
          </div>
          <div className="col-sm-12">
            <button className="gradient-button">
              <span>{Translations.Business_profile.Activate}</span>
            </button>
          </div>
          <div className="clearfix" />
          <div className="terms-conditions text-center">
            {
              Translations.Business_profile
                .By_clicking_on_register_you_agree_to_our
            }
            <Link to={""}>
              {Translations.information_menu.general_terms_and_conditions}
            </Link>
            ,<Link to={""}>{Translations.information_menu.terms_of_use}</Link>{" "}
            and
            <Link to={""}>
              {Translations.information_menu.data_protection_and_privacy_policy}
            </Link>
            .
          </div>
        </div>
      </div>
    );
  }
}

export default BusinessProfilePage;
