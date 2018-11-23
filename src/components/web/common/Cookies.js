import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as images from "../../../lib/constants/images";
import * as routes from "../../../lib/constants/routes";
import { Translations } from "../../../lib/translations";

class Cookies extends Component {
  render() {
    return (
      <section>
        <div className="custom-container">
          <div className="cookies-section">
            {Translations.base_footer.better}{" "}
            <Link to={routes.COOKIES_ROUTE}>
              {Translations.base_footer.cookies}
            </Link>
            .{Translations.base_footer.agree}.
            <img src={images.cross} alt={"cross"} />
          </div>
        </div>
      </section>
    );
  }
}

export default Cookies;
