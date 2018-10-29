import React from "react";
import { Link } from "react-router-dom";
import * as images from "../../../../lib/constants/images";
import { aboutInfo } from "../../../../mock-data";

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
        <div class="social-link-wrapr col-xs-12 padding-lr-30">
          <div class="form-subtitle">Social Network URL</div>
          <div class="personal-interests-wrapper col-xs-12 no-padding margin-b-25">
            <div class="form-group margin-bottom-15 social-media">
              <div class="social-link">
                <span class="fa fa-facebook" />
                <span class="social-text">Facebook</span>
                <div>
                  <a
                    href="https://facebook.com/santosh.shinde.735944"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Profile
                  </a>
                  <span id="facebook" aria-hidden="true">
                    &nbsp; <i class="fa fa-times" />
                  </span>
                </div>
              </div>
            </div>
            <div class="form-group margin-bottom-15 social-media">
              <div class="social-link">
                <span class="fa fa-instagram" />
                <span class="social-text">Instagram</span>
                <button id="instagram" type="button" class="btn-blu">
                  Connect
                </button>
              </div>
            </div>
            <div class="form-group margin-bottom-15 social-media">
              <div class="social-link">
                <span class="fa fa-twitter" />
                <span class="social-text">Twitter</span>
                <button id="twitter" type="button" class="btn-blu">
                  Connect
                </button>
              </div>
            </div>
            <div class="form-group margin-bottom-15 social-media">
              <div class="social-link">
                <span class="fa fa-youtube" />
                <span class="social-text">Youtube</span>
                <button id="youtube" type="button" class="btn-blu">
                  Connect
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
