import React from "react";
import { Link } from "react-router-dom";

import * as images from "../../../../../lib/constants/images";

const About = () => {
  return (
    <div className="middle-section padding-rl-10">
      <div className="about-wrapper">
        <div className="general-info">
          <div className="section-title">General information </div>
          <ul>
            <li>
              <span>User name</span>
              <span>User name</span>
            </li>
            <li>
              <span>Name / Company</span>
              <span>Name / Company</span>
            </li>
            <li>
              <span>Date of Birth</span>
              <span>01.01.2000</span>
            </li>
            <li>
              <span>Gender</span>
              <span>Male / Female</span>
            </li>
            <li>
              <span>Category</span>
              <span>Example</span>
            </li>
            <li>
              <span>Location</span>
              <span>Example</span>
            </li>
            <li>
              <span>Phone number</span>
              <span>+49 131 000 000 000</span>
            </li>
            <li>
              <span>Email</span>
              <span>marc.bopp@picstagraph.com</span>
            </li>
            <li>
              <span>Web site</span>
              <span>www.picstagraph.com</span>
            </li>
            <li>
              <span>Profile description</span>
              <span>This is an example text.</span>
            </li>
          </ul>
        </div>
        <div className="personal-interest">
          <div className="section-title">Personal Interest</div>
          <div className="section-subtitle">Offer tag</div>
          <div className="tags-wrapper">
            <Link to={""}>Tag</Link>
            <Link to={""}>Tag</Link>
            <Link to={""}>Tag</Link>
            <Link to={""}>Tag</Link>
            <Link to={""}>Tag</Link>
            <Link to={""}>Tag</Link>
            <Link to={""}>Tag</Link>
            <Link to={""}>Tag</Link>
            <Link to={""}>Tag</Link>
          </div>
        </div>
        <div className="inquiry-tag">
          <div className="section-subtitle">Inquiry tag</div>
          <div className="tags-wrapper">
            <Link to={""}>Tag</Link>
            <Link to={""}>Tag</Link>
            <Link to={""}>Tag</Link>
            <Link to={""}>Tag</Link>
            <Link to={""}>Tag</Link>
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
              <Link to={""}>www.facebook.com</Link>
            </li>
            <li>
              <span>
                <img src={images.insta} alt={"insta"} />
              </span>
              <span className="social-title">Instagram</span>
              <Link to={""}>www.instagram.com</Link>
            </li>
            <li>
              <span>
                <img src={images.youtube} alt={"youtube"} />
              </span>
              <span className="social-title">Youtube</span>
              <Link to={""}>www.youtube.com</Link>
            </li>
            <li>
              <span>
                <img src={images.linkedin} alt={"linkedin"} />
              </span>
              <span className="social-title">Linkedin</span>
              <Link to={""}>www.linkedin.com</Link>
            </li>
            <li>
              <span>
                <img src={images.twitter} alt={"twitter"} />
              </span>
              <span className="social-title">Twitter</span>
              <Link to={""}>www.twitter.com</Link>
            </li>
            <li>
              <span>
                <img src={images.tumblr} alt={"tumblr"} />
              </span>
              <span className="social-title">Tumblr</span>
              <Link to={""}>www.tumblr.com</Link>
            </li>
            <li>
              <span>
                <img src={images.pintrest} alt={"pintrest"} />
              </span>
              <span className="social-title">Pintrest</span>
              <Link to={""}>www.pintrest.com</Link>
            </li>
            <li>
              <span>
                <img src={images.google} alt={"google"} />
              </span>
              <span className="social-title">Google+</span>
              <Link to={""}>www.google-plus.com</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
