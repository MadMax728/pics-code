import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as images from "../../../lib/constants/images";
import * as routes from "../../../lib/constants/routes";
import { Translations } from "../../../lib/translations";

class Cookies extends Component {
  render() {
    return (
      <section className="col-xs-12 no-padding cookie-wrapr">
        <div className="custom-container col-xs-12 no-padding">
          <div className="cookies-section col-xs-12">
            {Translations.base_footer.better}{" "}
            <Link to={routes.COOKIES_ROUTE}>
              {Translations.base_footer.cookies}
            </Link>
            .{Translations.base_footer.agree}.
            {/* <img src={images.cross} alt={"cross"} /> */}
            <Link to={routes.COOKIES_ROUTE} className="readmore">
              Read more
            </Link>
            <button type="button" className="cookie_btn">
              Got it!
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default Cookies;
