import React, { Component } from "react";
import { Text } from "../../../ui-kit/CommonUIComponents";
import { Auth } from "../../../../auth";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getDownloadData, getSearch } from "../../../../actions";
import * as images from "../../../../lib/constants/images";
import { Translations } from "../../../../lib/translations";
import * as routes from "../../../../lib/constants/routes";

class DataDownloadPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        email: "",
        password: ""
      },
      error: {}
    };
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);
  };

  componentWillReceiveProps = nextProps => {
    if (nextProps.searchData.searchKeyword) {
      this.props.getSearch("");
    }
    if (
      nextProps.searchData.searchKeyword !== this.props.searchData.searchKeyword
    ) {
      const searchKeyword = nextProps.searchData.searchKeyword;
      this.props.history.push(routes.ROOT_ROUTE + "?search=" + searchKeyword);
    }
  };

  formValid = () => {
    const errors = {};
    let isFormValid = true;
    const { form } = this.state;
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (form.email.length === 0) {
      errors.email = Translations.data_download.Email_is_required;
      isFormValid = false;
    }
    const isValidemail = emailRegex.test(form.email);
    if (!isValidemail) {
      isFormValid = false;
      errors.email = Translations.data_download.Email_ID_should_be_valid;
    }
    if (form.password.length === 0) {
      errors.password = Translations.data_download.Password_is_required;
      isFormValid = false;
    }
    this.setState({ error: errors });
    return isFormValid;
  };

  handleChangeField = event => {
    const { form } = this.state;
    form[event.values.name] = event.values.val;
    this.setState({ form });
    this.formValid();
  };

  // handelSubmit called when click on submit
  handleSubmit = e => {
    e.preventDefault();
    if (!this.formValid()) {
      return false;
    }
    const { form } = this.state;
    const data = {
      email: form.email,
      password: form.password
    };
    this.props.getDownloadData(data).then(() => {
      // To Do - On Download Data
    });
  };

  render() {
    const { form } = this.state;
    return (
      <div className="padding-rl-10 middle-section width-80">
        <div className="campaign-middle-section">
          <div className="data-download">
            <div className="normal_title padding-15">
              {Translations.data_download.page_title}
            </div>
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
                  <label htmlFor="email">
                    {Translations.data_download.Email}
                  </label>
                  <Text
                    type="text"
                    className="form-control"
                    id="email"
                    placeholder={Translations.data_download.Email}
                    name="email"
                    value={form.email ? form.email : ""}
                    onChange={this.handleChangeField}
                  />
                  {form.password.length === 0 ? (
                    <img src={images.error} alt={"error"} />
                  ) : (
                    <img src={images.checked} alt={"checked"} />
                  )}
                  <span className="error-msg form-field-error">
                    {this.state.error.email}
                  </span>
                </div>
              </div>
              <div className="col-sm-5 padding-l-5 padding-r-5">
                <div className="form-group">
                  <label htmlFor="password">
                    {Translations.data_download.Password}
                  </label>
                  <Text
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder={Translations.data_download.Password}
                    value={form.password ? form.password : ""}
                    onChange={this.handleChangeField}
                  />
                  {form.password.length === 0 ? (
                    <img src={images.error} alt={"error"} />
                  ) : (
                    <img src={images.checked} alt={"checked"} />
                  )}
                  <span className="error-msg form-field-error">
                    {this.state.error.password}
                  </span>
                </div>
              </div>
              <div className="col-sm-2 padding-l-5 btn-wrapper">
                <div className="form-group">
                  <button className="blue_button" onClick={this.handleSubmit}>
                    {Translations.data_download.Download}
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

const mapStateToProps = state => ({
  downloadData: state.downloadData,
  searchData: state.searchData
});

const mapDispatchToProps = {
  getDownloadData,
  getSearch
};

DataDownloadPage.propTypes = {
  getDownloadData: PropTypes.func,
  searchData: PropTypes.any,
  history: PropTypes.any,
  getSearch: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DataDownloadPage);
