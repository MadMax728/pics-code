import React, { Component } from "react";
import { Translations } from "../../../lib/translations";

class DataDownloadPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        username: ""
      }
    };
  }

  render() {
    return (
      <div className="padding-rl-10 middle-section width-80">
        <div className="dashboard-middle-section margin-bottom-50">
          <div className="normal_title padding-15">
            {Translations.admin.Data_download}
          </div>
          <div className="user_download_wrapr">
            <div className="title_with_search_dropdown_button">
              <input
                type="search"
                name="username"
                id="username"
                placeholder={Translations.admin.UserName}
                className="flex2"
                onChange={this.handleChangeField}
              />
              <button className="wid30per" onClick={this.handleSubmit}>
                {Translations.admin.Download}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);
  };

  handleChangeField = event => {
    const { form } = this.state;
    form[event.target.name] = event.target.value;
    this.setState({ form });
  };

  // handelSubmit called when click on submit
  handleSubmit = e => {
    e.preventDefault();
  };

}

export default DataDownloadPage;
