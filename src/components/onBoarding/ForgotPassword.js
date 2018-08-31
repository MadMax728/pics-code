import React from "react";
import OnboardingSkelton from "./OnboardingSkeleton";

const ForgotPassword = () => (
  <OnboardingSkelton>
    {() => (
      <div>
        <div className="custom-container">
          <div className="login-wrapper">
            <h3 className="text-center">Check your email account. </h3>
            <p>
              We sent you a confirmation email with a link.
              <br />
              Please click on the link to reset your password.
            </p>
            <h3 className="text-center">Didn´t receive an email?</h3>
            <p>
              Click <a href="/mail">here</a> to request another mail.
              {/*<img src="images/checked.svg" alt={'checked'}/>*/}
            </p>
          </div>
        </div>
      </div>
    )}
  </OnboardingSkelton>
);
export default ForgotPassword;
