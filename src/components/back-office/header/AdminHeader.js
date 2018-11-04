import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as routes from "../../../lib/constants/routes";
import * as images from "../../../lib/constants/images";

class AdminHeader extends Component {
  render() {
    return (
      <header>
        <div className="custom-container">
          <div className="login-logo">
            <Link to={routes.ROOT_ROUTE}>
              <img src={images.loginLogo} alt={"login"} />
            </Link>
          </div>
        </div>
      </header>
    );
  }
}

export default AdminHeader;
