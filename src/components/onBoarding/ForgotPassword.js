import React from "react";
import { connect } from "react-redux";
import { getResendEmail } from "../../reducers";
import { ForgotPasswordTypes } from "../../types";
import { handleResetEmail } from "../../actions";
import OnboardingSkelton from "./OnboardingSkeleton";

const ForgotPassword = ({ resendEmail, handleResetEmail }) => (
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
        {/*<a onClick={handleResetEmail(resendEmail)} onKeyDown={handleResetEmail(resendEmail)} tabIndex={0} role="link" >here</a> */}
        <p>
          Click <a href="/ref">here</a> to request another mail.
          {/*<img src="images/checked.svg" />*/}
        </p>
      </React.Fragment>
    )}
  </OnboardingSkelton>
);
ForgotPassword.propTypes = {
  ...ForgotPasswordTypes
};

const mapStateToProps = state => ({
  resendEmail: getResendEmail(state)
});
export default connect(
  mapStateToProps,
  { handleResetEmail }
)(ForgotPassword);
