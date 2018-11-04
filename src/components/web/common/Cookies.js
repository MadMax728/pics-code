import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as images from "../../../lib/constants/images";

class Cookies extends Component {
  render() {
    return (
      <section>
        <div className="custom-container">
          <div className="cookies-section">
            For a better user experience we use <Link to={""}>Cookies</Link>. By
            using picstagraph you do agree.
            <img src={images.cross} alt={"cross"} />
          </div>
        </div>
      </section>
    );
  }
}

export default Cookies;
