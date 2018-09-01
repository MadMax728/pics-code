import React from "react";
import OnboardingSkelton from "./OnboardingSkeleton";

const ForgotPassword = () => (
  <OnboardingSkelton>
    {() => (
      <React.Fragment>
        <h3 className="text-center">Check your email account. </h3>
        <p>
          We sent you a confirmation email with a link.
          <br />
          Please click on the link to reset your password.
        </p>
        <h3 className="text-center">Didn´t receive an email?</h3>
        <p>
          Click <a href="#">here</a> to request another mail.
          {/*<img src="images/checked.svg" />*/}
        </p>
      </React.Fragment>
    )}
  </OnboardingSkelton>
);
export default ForgotPassword;
