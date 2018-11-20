import React from "react";
import propTypes from "prop-types";
import { SocialNetworks } from "../../templates/settings/edit-profile";
import { Link } from "react-router-dom";
import { Translations } from "../../../../lib/translations";
import { aboutInfo } from "../../../../mock-data";

const AboutCardBody = ({ about }) => {
  return (
    <div>
      <div className="about-wrapper">
        <div className="general-info">
          <div className="section-title">
            {Translations.about.general_information}
          </div>
          <ul>
            <li>
              <span>{Translations.about.username}</span>
              <span>{aboutInfo.general_information.username}</span>
            </li>
            <li>
              <span>{Translations.about.name_company}</span>
              <span>{aboutInfo.general_information.name}</span>
            </li>
            <li>
              <span>{Translations.about.date_of_birth}</span>
              <span>{aboutInfo.general_information.dob}</span>
            </li>
            <li>
              <span>{Translations.about.gender}</span>
              <span>{aboutInfo.general_information.gender}</span>
            </li>
            <li>
              <span>{Translations.about.category}</span>
              <span>{aboutInfo.general_information.category}</span>
            </li>
            <li>
              <span>{Translations.about.location}</span>
              <span>{aboutInfo.general_information.location}</span>
            </li>
            <li>
              <span>{Translations.about.phone_number}</span>
              <span>{aboutInfo.general_information.phone_number}</span>
            </li>
            <li>
              <span>{Translations.about.email}</span>
              <span>{aboutInfo.general_information.email}</span>
            </li>
            <li>
              <span>{Translations.about.web_site}</span>
              <span>{aboutInfo.general_information.web_site}</span>
            </li>
            <li>
              <span>{Translations.about.profile_description}</span>
              <span>{aboutInfo.general_information.profile_description}</span>
            </li>
          </ul>
        </div>
        <div className="personal-interest">
          <div className="section-title">
            {Translations.about.personal_interest}
          </div>
          <div className="section-subtitle">{Translations.about.offer_tag}</div>
          <div className="tags-wrapper">
            {aboutInfo.personal_interest.offer_tag.map((offer, index) => {
              return (
                <Link to={""} key={index}>
                  {offer.name}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="inquiry-tag">
          <div className="section-subtitle">
            {Translations.about.inquiry_tag}
          </div>
          <div className="tags-wrapper">
            {aboutInfo.personal_interest.inquiry_tag.map((inquiry, index) => {
              return (
                <Link to={""} key={index}>
                  {inquiry.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className="about-social-wrapr col-xs-12 no-padding">
        <SocialNetworks userId={"123"} isOwnerProfile={false} />
      </div>
    </div>
  );
};

AboutCardBody.propTypes = {
  about: propTypes.object.isRequired
};

export default AboutCardBody;
