import React from "react";
import { Link } from "react-router-dom";
import * as images from "../../../../lib/constants/images";
import { aboutInfo } from "../../../../mock-data";
import { SocialNetworks } from "../../templates/settings/edit-profile";

const About = () => {
  return (
    <div className="middle-section padding-rl-10">
      <div className="about-wrapper">
        <div className="general-info">
          <div className="section-title">General information </div>
          <ul>
            <li>
              <span>User name</span>
              <span>{aboutInfo.general_information.username}</span>
            </li>
            <li>
              <span>Name / Company</span>
              <span>{aboutInfo.general_information.name}</span>
            </li>
            <li>
              <span>Date of Birth</span>
              <span>{aboutInfo.general_information.dob}</span>
            </li>
            <li>
              <span>Gender</span>
              <span>{aboutInfo.general_information.gender}</span>
            </li>
            <li>
              <span>Category</span>
              <span>{aboutInfo.general_information.category}</span>
            </li>
            <li>
              <span>Location</span>
              <span>{aboutInfo.general_information.location}</span>
            </li>
            <li>
              <span>Phone number</span>
              <span>{aboutInfo.general_information.phone_number}</span>
            </li>
            <li>
              <span>Email</span>
              <span>{aboutInfo.general_information.email}</span>
            </li>
            <li>
              <span>Web site</span>
              <span>{aboutInfo.general_information.web_site}</span>
            </li>
            <li>
              <span>Profile description</span>
              <span>{aboutInfo.general_information.profile_description}</span>
            </li>
          </ul>
        </div>
        <div className="personal-interest">
          <div className="section-title">Personal Interest</div>
          <div className="section-subtitle">Offer tag</div>
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
          <div className="section-subtitle">Inquiry tag</div>
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

export default About;
