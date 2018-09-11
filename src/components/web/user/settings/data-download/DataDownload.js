import React, { Component } from "react";

class DataDownload extends Component {
  render() {
    return (
      <div className="padding-rl-10 middle-section width-80">
        <div className="campaign-middle-section">
          <div className="data-download">
            <div className="normal_title padding-15">Daten- Download</div>
            <p>
              This text is an example. This text is an example. This text is an
              example. This text is an example. This text is an example. This
              text is an example. This text is an example.{" "}
            </p>

            <p>
              This text is an example. This text is an example. This text is an
              example. This text is an example. This text is an example. This
              text is an example. This text is an example.{" "}
            </p>

            <p>
              This text is an example. This text is an example. This text is an
              example. This text is an example. This text is an example. This
              text is an example. This text is an example.{" "}
            </p>

            <form>
              <div className="col-sm-5 padding-r-5 email-wrapper">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="text" className="form-control" id="email" />
                </div>
              </div>
              <div className="col-sm-5 padding-l-5 padding-r-5">
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="text" className="form-control" id="password" />
                </div>
              </div>
              <div className="col-sm-2 padding-l-5 btn-wrapper">
                <div className="form-group">
                  <button className="blue_button">Download</button>
                </div>
              </div>
            </form>
            <div className="clearfix" />
            <p>
              This text is an example. This text is an example. This text is an
              example.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default DataDownload;
