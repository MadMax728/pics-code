import React, { Component } from "react";
import OnboardingSkelton from "./OnboardingSkeleton";
import * as images from "../../constants/images";

class Login extends Component {
  state = {};
  render() {
    return (
      <OnboardingSkelton
        topHeader={"Do what you love"}
        subHeader={"Register for free"}
        showDownloadStore
      >
        {() => (
          <form>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="User name / Email"
              />
              <img src={images.checked} alt={"checked"} />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
              />
              <img src={images.error} alt={"error"} />
            </div>
            <div className="form-group">
              {/* <a href="">Forgot password</a> */}
            </div>
            <div className="form-group">
              <button className="blue_button">Log in</button>
            </div>
          </form>
        )}
      </OnboardingSkelton>
    );
  }
}

export default Login;
