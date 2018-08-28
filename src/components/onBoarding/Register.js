import React, { Component } from "react";
import OnboardingSkelton from "./OnboardingSkeleton";
class Register extends Component {
  state = {};
  render() {
    return (
      <OnboardingSkelton
        topHeader={"Do what you love"}
        subHeader={"Register for free"}
        showDownloadStore
      >
        {({ onSubmitLogin }) => (
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="User name"
              />
              <img src="images/checked.svg" alt={"checked"} />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
              />
              <img src="images/error.svg" alt={"checked"} />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
              />
              <img src="images/checked.svg" alt={"checked"} />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Repeat Password"
              />
              <img src="images/error.svg" alt={"error"} />
            </div>
            <div className="form-group">
              <ul className="options">
                <li>
                  <input
                    type="radio"
                    id="male"
                    name="amount"
                    className="black_button"
                    checked
                  />
                  <label htmlFor="male">Male</label>
                </li>
                <li>
                  <input type="radio" id="female" name="amount" />
                  <label htmlFor="female">Female</label>
                </li>
              </ul>
            </div>
            <div className="form-group">
              <button className="blue_button">Register</button>
            </div>
          </form>
        )}
      </OnboardingSkelton>
    );
  }
}

export default Register;
