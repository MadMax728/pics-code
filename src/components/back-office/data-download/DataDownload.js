import React, { Component } from "react";

class DataDownload extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        username: ""
      }
    };
  }

  handleChangeField = event => {
    const { form } = this.state;
    form[event.target.name] = event.target.value;
    this.setState({ form });
    console.log(this.state.form);
  };

  // handelSubmit called when click on submit
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.form);
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="padding-rl-10 middle-section width-80">
        <div className="dashboard-middle-section margin-bottom-50">
          <div className="normal_title padding-15">Data download</div>
          <div className="user_download_wrapr">
            <div className="title_with_search_dropdown_button">
              <input
                type="search"
                name="username"
                id="username"
                placeholder="User name"
                className="flex2"
                onChange={this.handleChangeField}
              />
              <button className="wid30per" onClick={this.handleSubmit}>
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DataDownload;
