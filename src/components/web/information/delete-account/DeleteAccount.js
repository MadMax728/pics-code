import React, { Component } from "react";
import * as images from "../../../../lib/constants/images";

class DeleteAccount extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="padding-rl-10 middle-section width-80">
        <div className="cms-middle-section">
          <div className="panel-wrapper">
            <div className="content-wrapper">
              <div className="title">Delete Account</div>
              <p>
                This text is an example text. This text is an example text.This
                text is an example text.This text is an example text.This text
                is an example text.This text is an example text.This text is an
                example text.
              </p>
              <form>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor={"Username / Email "}>
                        Username / Email{" "}
                      </label>
                      <input type="text" name="username" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor={"Password"}>Password</label>
                      <input type="text" name="password" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor={"Repeat password"}>Repeat password</label>
                      <input type="password" name="rpassword" />
                    </div>
                  </div>
                  <div className="col-sm-6 margin-top-25">
                    <div className="form-group capcha-wrapper">
                      <img
                        src={images.capcha}
                        alt={"capcha"}
                        className="capcha-img"
                      />
                    </div>
                    <div className="form-group button_wrapper col-md-12 col-sm-6">
                      <button className="black_button grayBtn">
                        Delete account
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DeleteAccount;
