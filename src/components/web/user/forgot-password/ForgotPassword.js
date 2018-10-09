import React from "react";
import { OnBoardingSkeleton } from "../on-boarding-skeleton";

const ForgotPassword = () => (
  <OnBoardingSkeleton>
    {() => (
      <React.Fragment>
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
      </React.Fragment>
    )}
  </OnBoardingSkeleton>
);

export default ForgotPassword;
