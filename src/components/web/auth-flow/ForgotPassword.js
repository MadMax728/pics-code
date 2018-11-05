import React from "react";
import { BaseHeader, BaseFooter } from "../common";
import { Translations } from "../../../lib/translations";
import { Link } from "react-router-dom";

const ForgotPassword = () => (
  <div className="login-process">
    <BaseHeader />
    <section>
      <div className="custom-container">
        <div className="login-wrapper">
          <h3 className="text-center">
            {Translations.forgot_password.email_account}{" "}
          </h3>
          <p>
            {Translations.forgot_password.confirm_email}
            <br />
            {Translations.forgot_password.reset_email}
          </p>
          <h3 className="text-center">
            {Translations.forgot_password.didnt_receive}
          </h3>
          {/*<a onClick={handleResetEmail(resendEmail)} onKeyDown={handleResetEmail(resendEmail)} tabIndex={0} role="link" >here</a> */}
          <p>
            {Translations.forgot_password.click}{" "}
            <Link to={"/"}>{Translations.forgot_password.here}</Link>{" "}
            {Translations.forgot_password.request}
            {/*<img src="images/checked.svg" />*/}
          </p>
        </div>
      </div>
    </section>
    <BaseFooter className={"custom-container"} />
  </div>
);

export default ForgotPassword;
