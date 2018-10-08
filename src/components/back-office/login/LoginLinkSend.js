import React from "react";
import { Link } from "react-router-dom";
import { LoginHeader } from "../header";
import * as routes from "../../../lib/constants/routes";

const LoginLinkSend = () => {
  return (
    <div className="login-process">
      <LoginHeader />
      <section>
        <div className="custom-container">
          <div className="login-wrapper backoffice-login">
            <h3 className="text-center">Backoffice log in</h3>
            <p>Send password to admin´s email address. </p>
            <form>
              <div className="form-group">
                <Link to={routes.LOGIN_PASSWORD_ROUTE} className="blue_button">
                  Send
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginLinkSend;
