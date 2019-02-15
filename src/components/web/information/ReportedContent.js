import React, { Component } from "react";
import * as images from "../../../lib/constants/images";
import * as routes from "../../../lib/constants/routes";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getSearch } from "../../../actions";
import { Translations } from "../../../lib/translations";
import {
  Input,
  Label,
  ErrorSpan,
  Button,
  Textarea,
  InlineLoading
} from "../../ui-kit";

const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
class ReportedContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      report_form: {
        name: "",
        username: "",
        email: "",
        account_reporting: "",
        subject: "",
        file: "",
        text: ""
      },
      errors: {}
    };
  }

  render() {
    const { report_form, errors } = this.state;
    return (
      <div className="padding-rl-10 middle-section width-80">
        <div className="cms-middle-section col-xs-12">
          <div className="panel-wrapper wid100">
            <div className="content-wrapper padding-rl-23">
              <div className="title">
                {Translations.service_report_problem.title}
              </div>
              <p>{Translations.service_report_problem.content}</p>
              <form>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <Label
                        htmlFor={Translations.service_report_problem.name}
                        value={Translations.service_report_problem.name}
                      />
                      <Input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        autoComplete="name"
                        value={report_form.name ? report_form.name : ""}
                        onChange={this.handleFieldChangeName}
                      />
                      {report_form.name.length > 0 ? (
                        <img src={images.checked} alt={"checked"} />
                      ) : (
                        <img src={images.error} alt={"error"} />
                      )}
                      <ErrorSpan value={errors.name} />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <Label
                        htmlFor={Translations.service_report_problem.username}
                        value={Translations.service_report_problem.username}
                      />
                      <Input
                        type="text"
                        className="form-control"
                        id="username"
                        name="username"
                        autoComplete="username"
                        value={report_form.username ? report_form.username : ""}
                        onChange={this.handleFieldChangeUsername}
                      />
                      {report_form.username.length > 0 ? (
                        <img src={images.checked} alt={"checked"} />
                      ) : (
                        <img src={images.error} alt={"error"} />
                      )}
                      <ErrorSpan value={errors.username} />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <Label
                        htmlFor={Translations.service_report_problem.email}
                        value={Translations.service_report_problem.email}
                      />
                      <Input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        autoComplete="email"
                        value={report_form.email ? report_form.email : ""}
                        onChange={this.handleFieldChangeEmail}
                      />
                      {report_form.email.length > 0 ? (
                        <img src={images.checked} alt={"checked"} />
                      ) : (
                        <img src={images.error} alt={"error"} />
                      )}
                      <ErrorSpan value={errors.email} />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <Label
                        htmlFor={
                          Translations.service_report_problem.account_reporting
                        }
                        value={
                          Translations.service_report_problem.account_reporting
                        }
                      />
                      <Input
                        type="text"
                        className="form-control"
                        id="account_reporting"
                        name="account_reporting"
                        autoComplete="account_reporting"
                        value={
                          report_form.account_reporting
                            ? report_form.account_reporting
                            : ""
                        }
                        onChange={this.handleFieldChangeAccountReporting}
                      />
                      {report_form.email.length > 0 ? (
                        <img src={images.checked} alt={"checked"} />
                      ) : (
                        <img src={images.error} alt={"error"} />
                      )}
                      <ErrorSpan value={errors.account_reporting} />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <Label
                        htmlFor={Translations.service_report_problem.subject}
                        value={Translations.service_report_problem.subject}
                      />
                      <Input
                        type="text"
                        className="form-control"
                        id="subject"
                        name="subject"
                        autoComplete="subject"
                        value={report_form.subject ? report_form.subject : ""}
                        onChange={this.handleFieldChangeSubject}
                      />
                      {report_form.subject.length > 0 ? (
                        <img src={images.checked} alt={"checked"} />
                      ) : (
                        <img src={images.error} alt={"error"} />
                      )}
                      <ErrorSpan value={errors.subject} />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <Label
                        htmlFor={Translations.service_report_problem.upload}
                        value={Translations.service_report_problem.upload}
                      />
                      <input
                        type="file"
                        name="file-1"
                        id="file-1"
                        onChange={this.handleFile}
                      />
                      {/* <input
                        type="file"
                        name="file-1"
                        id="file-1"
                        className="inputfile inputfile-1"
                      />
                      <Label
                        htmlFor={
                          Translations.service_report_problem.select_file
                        }
                        value={Translations.service_report_problem.select_file}
                      /> */}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="form-group">
                      <Label
                        htmlFor={Translations.service_report_problem.text}
                        value={Translations.service_report_problem.text}
                      />
                      <Textarea
                        type="text"
                        className="form-control full-width-textarea"
                        id="text"
                        name="text"
                        autoComplete="text"
                        value={report_form.text ? report_form.text : ""}
                        onChange={this.handleFieldChangeText}
                      />
                      {report_form.text.length > 0 ? (
                        <img src={images.checked} alt={"checked"} />
                      ) : (
                        <img src={images.error} alt={"error"} />
                      )}
                      <ErrorSpan value={errors.text} />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    {/* <div className="form-group capcha-wrapper">
                      <img
                        src={images.capcha}
                        alt={"capcha"}
                        className="capcha-img"
                      />
                    </div> */}
                    <div className="form-group button_wrapper">
                      <Button
                        className="black_button wid120"
                        onClick={this.handleSave}
                        text={Translations.service_report_problem.send}
                      />
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

  handleFile = file => {
    console.log(file);
    const reader = new FileReader();
    if (file.type.includes("image")) {
      console.log(file.type);
    }
  };

  handleFieldChangeName = event => {
    const { report_form } = this.state;
    report_form[event.values.name] = event.values.val;
    this.setState({ report_form });
    this.formValid();
  };

  handleFieldChangeUsername = event => {
    const { report_form } = this.state;
    report_form[event.values.name] = event.values.val;
    this.setState({ report_form });
    this.formValid();
  };

  handleFieldChangeEmail = event => {
    const { report_form } = this.state;
    report_form[event.values.name] = event.values.val;
    this.setState({ report_form });
    this.formValid();
  };

  handleFieldChangeAccountReporting = event => {
    const { report_form } = this.state;
    report_form[event.values.name] = event.values.val;
    this.setState({ report_form });
    this.formValid();
  };

  handleFieldChangeSubject = event => {
    const { report_form } = this.state;
    report_form[event.values.name] = event.values.val;
    this.setState({ report_form });
    this.formValid();
  };

  handleFieldChangeText = event => {
    const { report_form } = this.state;
    report_form[event.values.name] = event.values.val;
    this.setState({ report_form });
    this.formValid();
  };

  formValid = () => {
    const errors = {};
    let isFormValid = true;
    const { report_form } = this.state;

    if (report_form.name.length === 0) {
      errors.name = Translations.service_report_problem.name_is_required;
      isFormValid = false;
    }
    if (report_form.username.length === 0) {
      errors.username =
        Translations.service_report_problem.username_is_required;
      isFormValid = false;
    }

    const isValidEmail = emailRegex.test(report_form.email);
    if (!isValidEmail) {
      isFormValid = false;
      errors.email = Translations.service_report_problem.email_should_be_valid;
    }

    if (report_form.email.length === 0) {
      errors.email = Translations.service_report_problem.email_is_required;
      isFormValid = false;
    }

    if (report_form.account_reporting.length === 0) {
      errors.account_reporting =
        Translations.service_report_problem.account_is_required;
      isFormValid = false;
    }

    if (report_form.subject.length === 0) {
      errors.subject = Translations.service_report_problem.subject_is_required;
      isFormValid = false;
    }

    if (report_form.text.length === 0) {
      errors.text = Translations.service_report_problem.text_is_required;
      isFormValid = false;
    }
    this.setState({ errors: errors });
    return isFormValid;
  };

  handleSave = e => {
    e.preventDefault();
    if (!this.formValid()) {
      return false;
    }
    const { report_form } = this.state;
    // console.log(report_form);
  };
}

const mapStateToProps = state => ({
  searchData: state.searchData
});

const mapDispatchToProps = {
  getSearch
};

ReportedContent.propTypes = {
  searchData: PropTypes.any,
  history: PropTypes.any,
  getSearch: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReportedContent);
