import React from "react";
import { Link } from "react-router-dom";
import { LoginHeader } from "../header";
import * as routes from "../../../lib/constants/routes";
import * as images from "../../../lib/constants/images";

const LoginPassword = () => {
  return (
    <div className="login-process">
      <LoginHeader />
      <section>
        <div className="custom-container">
          <div className="login-wrapper backoffice-login">
            <h3 className="text-center">Backoffice log in</h3>
            <p>Please enter your password here. </p>
            <form>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  autoComplete="new-password"
                />
                <img src={images.error} alt={"error"} />
              </div>
              <div className="form-group">
                <Link
                  to={routes.BACK_OFFICE_ROOT_ROUTE}
                  className="blue_button margin-0"
                >
                  Log in
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginPassword;
