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
        <div className="social-networks">
          <div className="section-title">Social Networks</div>
          <ul>
            <li>
              <span>
                <img src={images.facebook} alt={"facebook"} />
              </span>
              <span className="social-title">Facebook</span>
              <Link to={""}>{aboutInfo.social_network.facebook}</Link>
            </li>
            <li>
              <span>
                <img src={images.insta} alt={"insta"} />
              </span>
              <span className="social-title">Instagram</span>
              <Link to={""}>{aboutInfo.social_network.instagram}</Link>
            </li>
            <li>
              <span>
                <img src={images.youtube} alt={"youtube"} />
              </span>
              <span className="social-title">Youtube</span>
              <Link to={""}>{aboutInfo.social_network.youtube}</Link>
            </li>
            <li>
              <span>
                <img src={images.linkedin} alt={"linkedin"} />
              </span>
              <span className="social-title">Linkedin</span>
              <Link to={""}>{aboutInfo.social_network.linkedIn}</Link>
            </li>
            <li>
              <span>
                <img src={images.twitter} alt={"twitter"} />
              </span>
              <span className="social-title">Twitter</span>
              <Link to={""}>{aboutInfo.social_network.twitter}</Link>
            </li>
            <li>
              <span>
                <img src={images.tumblr} alt={"tumblr"} />
              </span>
              <span className="social-title">Tumblr</span>
              <Link to={""}>{aboutInfo.social_network.tumblr}</Link>
            </li>
            <li>
              <span>
                <img src={images.pintrest} alt={"pintrest"} />
              </span>
              <span className="social-title">Pintrest</span>
              <Link to={""}>{aboutInfo.social_network.pintrest}</Link>
            </li>
            <li>
              <span>
                <img src={images.google} alt={"google"} />
              </span>
              <span className="social-title">Google+</span>
              <Link to={""}>{aboutInfo.social_network.googlePlus}</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
