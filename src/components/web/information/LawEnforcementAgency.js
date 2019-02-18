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
class LawEnforcementAgency extends Component {
  constructor(props) {
    super(props);

    this.state = {
      law_agency_form: {
        name: "",
        agency: "",
        email: "",
        account_reporting: "",
        subject: "",
        image: "",
        file: "",
        fileType: "",
        text: ""
      },
      errors: {}
    };
  }

  render() {
    const { law_agency_form, errors } = this.state;
    return (
      <div className="padding-rl-10 middle-section width-80">
        <div className="cms-middle-section col-xs-12">
          <div className="panel-wrapper wid100">
            <div className="content-wrapper padding-rl-23">
              <div className="title">
                {Translations.service_law_agency.title}
              </div>
              <p>{Translations.service_law_agency.content}</p>
              <form>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <Label
                        htmlFor={Translations.service_law_agency.name}
                        value={Translations.service_law_agency.name}
                      />
                      <Input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        autoComplete="name"
                        value={law_agency_form.name ? law_agency_form.name : ""}
                        onChange={this.handleFieldChangeName}
                      />
                      {law_agency_form.name.length > 0 ? (
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
                        htmlFor={Translations.service_law_agency.agency}
                        value={Translations.service_law_agency.agency}
                      />
                      <Input
                        type="text"
                        className="form-control"
                        id="agency"
                        name="agency"
                        autoComplete="agency"
                        value={
                          law_agency_form.agency ? law_agency_form.agency : ""
                        }
                        onChange={this.handleFieldChangeagency}
                      />
                      {law_agency_form.agency.length > 0 ? (
                        <img src={images.checked} alt={"checked"} />
                      ) : (
                        <img src={images.error} alt={"error"} />
                      )}
                      <ErrorSpan value={errors.agency} />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <Label
                        htmlFor={Translations.service_law_agency.email}
                        value={Translations.service_law_agency.email}
                      />
                      <Input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        autoComplete="email"
                        value={
                          law_agency_form.email ? law_agency_form.email : ""
                        }
                        onChange={this.handleFieldChangeEmail}
                      />
                      {law_agency_form.email.length > 0 ? (
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
                          Translations.service_law_agency.account_reporting
                        }
                        value={
                          Translations.service_law_agency.account_reporting
                        }
                      />
                      <Input
                        type="text"
                        className="form-control"
                        id="account_reporting"
                        name="account_reporting"
                        autoComplete="account_reporting"
                        value={
                          law_agency_form.account_reporting
                            ? law_agency_form.account_reporting
                            : ""
                        }
                        onChange={this.handleFieldChangeAccountReporting}
                      />
                      {law_agency_form.email.length > 0 ? (
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
                        htmlFor={Translations.service_law_agency.subject}
                        value={Translations.service_law_agency.subject}
                      />
                      <Input
                        type="text"
                        className="form-control"
                        id="subject"
                        name="subject"
                        autoComplete="subject"
                        value={
                          law_agency_form.subject ? law_agency_form.subject : ""
                        }
                        onChange={this.handleFieldChangeSubject}
                      />
                      {law_agency_form.subject.length > 0 ? (
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
                        htmlFor={Translations.service_law_agency.upload}
                        value={Translations.service_law_agency.upload}
                      />
                      <input
                        type="file"
                        name="file-1"
                        id="file-1"
                        className=""
                        onChange={this.handleFile}
                      />
                      <Label
                        htmlFor={Translations.service_law_agency.select_file}
                        value={Translations.service_law_agency.select_file}
                      />
                      <ErrorSpan value={errors.file} />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="form-group">
                      <Label
                        htmlFor={Translations.service_law_agency.text}
                        value={Translations.service_law_agency.text}
                      />
                      <Textarea
                        type="text"
                        className="form-control full-width-textarea"
                        id="text"
                        name="text"
                        autoComplete="text"
                        value={law_agency_form.text ? law_agency_form.text : ""}
                        onChange={this.handleFieldChangeText}
                      />
                      {law_agency_form.text.length > 0 ? (
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
                        text={Translations.service_law_agency.send}
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

  handleFile = event => {
    const file = event.target.files[0];
    const reader = new FileReader();
    if (file.type.includes("image/jpeg") || file.type.includes("image/jpg")) {
      const currentThis = this;
      reader.readAsDataURL(file);
      reader.onloadend = function() {
        const { law_agency_form } = currentThis.state;
        law_agency_form.image = reader.result;
        law_agency_form.file = file;
        law_agency_form.fileType = true;
        currentThis.setState({ law_agency_form });
        currentThis.formValid();
      };
    } else {
      const currentThis = this;
      const { law_agency_form } = currentThis.state;
      law_agency_form.file = file;
      law_agency_form.fileType = false;
      currentThis.setState({ law_agency_form });
      this.formValid();
    }
  };

  handleFieldChangeName = event => {
    const { law_agency_form } = this.state;
    law_agency_form[event.values.name] = event.values.val;
    this.setState({ law_agency_form });
    this.formValid();
  };

  handleFieldChangeagency = event => {
    const { law_agency_form } = this.state;
    law_agency_form[event.values.name] = event.values.val;
    this.setState({ law_agency_form });
    this.formValid();
  };

  handleFieldChangeEmail = event => {
    const { law_agency_form } = this.state;
    law_agency_form[event.values.name] = event.values.val;
    this.setState({ law_agency_form });
    this.formValid();
  };

  handleFieldChangeAccountReporting = event => {
    const { law_agency_form } = this.state;
    law_agency_form[event.values.name] = event.values.val;
    this.setState({ law_agency_form });
    this.formValid();
  };

  handleFieldChangeSubject = event => {
    const { law_agency_form } = this.state;
    law_agency_form[event.values.name] = event.values.val;
    this.setState({ law_agency_form });
    this.formValid();
  };

  handleFieldChangeText = event => {
    const { law_agency_form } = this.state;
    law_agency_form[event.values.name] = event.values.val;
    this.setState({ law_agency_form });
    this.formValid();
  };

  formValid = () => {
    const errors = {};
    let isFormValid = true;
    const { law_agency_form } = this.state;

    if (law_agency_form.name.length === 0) {
      errors.name = Translations.service_law_agency.name_is_required;
      isFormValid = false;
    }
    if (law_agency_form.agency.length === 0) {
      errors.agency = Translations.service_law_agency.agency_is_required;
      isFormValid = false;
    }

    const isValidEmail = emailRegex.test(law_agency_form.email);
    if (!isValidEmail) {
      isFormValid = false;
      errors.email = Translations.service_law_agency.email_should_be_valid;
    }

    if (law_agency_form.email.length === 0) {
      errors.email = Translations.service_law_agency.email_is_required;
      isFormValid = false;
    }

    if (law_agency_form.account_reporting.length === 0) {
      errors.account_reporting =
        Translations.service_law_agency.account_is_required;
      isFormValid = false;
    }

    if (law_agency_form.subject.length === 0) {
      errors.subject = Translations.service_law_agency.subject_is_required;
      isFormValid = false;
    }

    if (law_agency_form.file !== "" && law_agency_form.fileType === false) {
      errors.file = Translations.service_law_agency.select_evidence;
      isFormValid = false;
    }

    if (law_agency_form.text.length === 0) {
      errors.text = Translations.service_law_agency.text_is_required;
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
    const { law_agency_form } = this.state;
    // console.log(law_agency_form);
  };
}

const mapStateToProps = state => ({
  searchData: state.searchData
});

const mapDispatchToProps = {
  getSearch
};

LawEnforcementAgency.propTypes = {
  searchData: PropTypes.any,
  history: PropTypes.any,
  getSearch: PropTypes.func,
  handleModalInfoMsgShow: PropTypes.any
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LawEnforcementAgency);
