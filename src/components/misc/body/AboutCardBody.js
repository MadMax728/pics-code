import React from "react";
import PropTypes from "prop-types";
import { SocialNetworks } from "../../web/templates/settings/edit-profile";
import { Link } from "react-router-dom";
import { Translations } from "../../../lib/translations";
import { Auth } from "../../../auth";
import { DateFormat } from "../../Factory";
import moment from "moment";

const AboutCardBody = ({ about }) => {
  const storage = Auth.extractJwtFromStorage();
  let userInfo = null;
  if (storage) {
    userInfo = JSON.parse(storage.userInfo);
  }
  const selectedUserType = "creator";
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
              <span>{about.username}</span>
            </li>
            <li>
              <span>
                {userInfo && userInfo.userType === selectedUserType
                  ? Translations.about.user
                  : Translations.about.name_company}
              </span>
              <span>{about.name}</span>
            </li>
            {userInfo && userInfo.userType === selectedUserType ? (
              <li>
                <span>{Translations.about.date_of_birth}</span>
                <span>
                  {moment
                    .unix(about.birthDate)
                    .format(Translations.date_format.date)}
                </span>
              </li>
            ) : (
              ""
            )}
            {userInfo && userInfo.userType === selectedUserType ? (
              <li>
                <span>{Translations.about.gender}</span>
                <span>{about.gender}</span>
              </li>
            ) : (
              ""
            )}
            <li>
              <span>{Translations.about.category}</span>
              <span>{about.category && about.category[0].categoryName}</span>
            </li>
            <li>
              <span>{Translations.about.location}</span>
              <span>{about.location && about.location.address}</span>
            </li>
            <li>
              <span>{Translations.about.phone_number}</span>
              <span>{about.phone_number}</span>
            </li>
            <li>
              <span>{Translations.about.email}</span>
              <span>{about.email}</span>
            </li>
            <li>
              <span>{Translations.about.web_site}</span>
              <span>{about.website}</span>
            </li>
          </ul>
        </div>

        <div className="profile-description">
          <div className="section-title">
            {Translations.about.profile_description}
          </div>
          <div className="profile-content">{about.profileDescription}</div>
        </div>

        <div className="personal-interest">
          <div className="section-title">
            {Translations.about.personal_interest}
          </div>
          <div className="section-subtitle">{Translations.about.offer_tag}</div>
          <div className="tags-wrapper">
            {about &&
              about.offerTagList &&
              about.offerTagList.length &&
              about.offerTagList.map(offer => {
                return (
                  <Link to={""} key={offer.id}>
                    {offer.offerTagName}
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
            {about &&
              about.inquiryTagList.length !== undefined &&
              about.inquiryTagList.map(inquiry => {
                return (
                  <Link to={""} key={inquiry.id}>
                    {inquiry.inquiryTagName}
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
  about: PropTypes.object.isRequired
};

export default AboutCardBody;
