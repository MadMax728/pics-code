import React, { Component } from "react";
import { Text } from "../../../../ui-kit/CommonUIComponents";

class DataDownload extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        email: "",
        password: ""
      }
    };
  }

  handleChangeField = event => {
    const { form } = this.state;
    form[event.values.name] = event.values.val;
    this.setState({ form });
    console.log(this.state.form);
  };

  // handelSubmit called when click on submit
  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    const { form } = this.state;
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
                  <Text
                    type="text"
                    className="form-control"
                    id="email"
                    name="email"
                    onChange={this.handleChangeField}
                  />
                </div>
              </div>
              <div className="col-sm-5 padding-l-5 padding-r-5">
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <Text
                    type="text"
                    className="form-control"
                    id="password"
                    name="password"
                    onChange={this.handleChangeField}
                  />
                </div>
              </div>
              <div className="col-sm-2 padding-l-5 btn-wrapper">
                <div className="form-group">
                  <button className="blue_button" onClick={this.handleSubmit}>
                    Download
                  </button>
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
