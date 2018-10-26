import React from "react";
import { BaseHeader, BaseFooter } from "../common";

const ForgotPassword = () => (
  <div className="login-process">
    <BaseHeader />
    <section>
      <div className="custom-container">
        <div className="login-wrapper">
          <h3 className="text-center">Check your email account. </h3>
          <p>
            We sent you a confirmation email with a link.
            <br />
            Please click on the link to reset your password.
          </p>
          <h3 className="text-center">Didn´t receive an email?</h3>
          {/*<a onClick={handleResetEmail(resendEmail)} onKeyDown={handleResetEmail(resendEmail)} tabIndex={0} role="link" >here</a> */}
          <p>
            Click <a href="/ref">here</a> to request another mail.
            {/*<img src="images/checked.svg" />*/}
          </p>
        </div>
      </div>
    </section>
    <BaseFooter className={"custom-container"} />
  </div>
);

export default ForgotPassword;
