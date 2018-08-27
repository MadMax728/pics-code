import React, { Component } from "react";
import * as images from "../../constants/images";

class OnboardingSkelton extends Component {
  state = {};
  render() {
    console.log("process.env.REACT_APP_CDN_URL", process.env.REACT_APP_CDN_URL);
    console.log("process.env", process.env);
    console.log("images.loginLog", images.loginLogo);
    return (
      <div className="login-process">
        <header>
          <div className="custom-container">
            <div className="login-logo">
              <a href="/">
                <img src={images.loginLogo} alt={"login"} />
              </a>
            </div>
            <ul className="login-header-menu">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Register</a>
              </li>
            </ul>
          </div>
        </header>
        <section>
          <div className="custom-container">
            <div className="login-wrapper">
              <h3 className="text-center">Do what you love</h3>
              <p>Register for free</p>
              <form>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="User name / Email"
                  />
                  <img src="images/checked.svg" />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                  />
                  <img src="images/error.svg" />
                </div>
                <div className="form-group">
                  <a href="">Forgot password</a>
                </div>
                <div className="form-group">
                  <button className="blue_button">Log in</button>
                </div>
              </form>
              <div className="app-download">
                <div>App download</div>
                <a href="#">
                  <img src="images/iphone.png" />
                </a>
                <a href="#">
                  <img src="images/andriod.png" />
                </a>
              </div>
            </div>
          </div>
        </section>
        <footer>
          <div className="custom-container">
            <ul>
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">Data Protechtion & Privacy Policy</a>
              </li>
              <li>
                <a href="#">Legal Notice</a>
              </li>
              <li>
                <a href="#">General terms & Conditions</a>
              </li>
              <li>
                <a href="#">NETZDG</a>
              </li>
              <li>
                <a href="#">Language</a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    );
  }
}

export default OnboardingSkelton;
