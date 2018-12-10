import React, { Component } from "react";
import * as images from "../../../../lib/constants/images";

class LawEnforcementAgency extends Component {
  componentDidMount = () => {
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <div className="padding-rl-10 middle-section width-80">
        <div className="cms-middle-section col-xs-12">
          <div className="panel-wrapper wid100">
            <div className="content-wrapper padding-rl-23">
              <div className="title">Law Enforcement Agency</div>
              <p>
                This text is an example text. This text is an example text.This
                text is an example text.This text is an example text.This text
                is an example text.This text is an example text.This text is an
                example text. This text is an example text.This text is an
                example text.This text is an example text.This text is an
                example text.This text is an example text.This text is an
                example text.This text is an example text. This text is an
                example text.This text is an example text.This text is an
                example text.This text is an example text.This text is an
                example text.This text is an example text.This text is an
                example text.
              </p>
              <form>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor={"Your name"}>Your name</label>
                      <input type="text" name="name" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor={"Your username "}>Your username </label>
                      <input type="text" name="username" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor={"Your email "}>Your email </label>
                      <input type="email" name="email" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor={"The account"}>
                        {`The account that you're reporting`}{" "}
                      </label>
                      <input type="text" name="account" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor={"Subject"}>Subject</label>
                      <input type="text" name="subject" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor={"Upload evidence (jpeg)"}>
                        Upload evidence (jpeg)
                      </label>
                      <input
                        type="file"
                        name="file-1[]"
                        id="file-1"
                        className="inputfile inputfile-1"
                      />
                      <label htmlFor="file-1">
                        <span>Select file</span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label htmlFor={"Text"}>Text</label>
                      <textarea className="full-width-textarea" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="form-group capcha-wrapper">
                      <img
                        src={images.capcha}
                        alt={"capcha"}
                        className="capcha-img"
                      />
                    </div>
                    <div className="form-group button_wrapper">
                      <button className="black_button wid120">Send</button>
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

export default LawEnforcementAgency;
