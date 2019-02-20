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
class Feedback extends Component {
  constructor(props) {
    super(props);

    this.state = {
      feedback_form: {
        name: "",
        username: "",
        email: "",
        subject: "",
        text: ""
      },
      errors: {}
    };
  }

  render() {
    const { feedback_form, errors } = this.state;
    return (
      <div className="padding-rl-10 middle-section width-80">
        <div className="cms-middle-section col-xs-12">
          <div className="panel-wrapper wid100">
            <div className="content-wrapper padding-rl-23">
              <div className="title">{Translations.service_feedback.title}</div>
              <p>{Translations.service_feedback.content} </p>
              <form>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <Label
                        htmlFor={Translations.service_feedback.name}
                        value={Translations.service_feedback.name}
                      />
                      <Input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        autoComplete="name"
                        value={feedback_form.name ? feedback_form.name : ""}
                        onChange={this.handleFieldChangeName}
                      />
                      {feedback_form.name.length > 0 ? (
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
                        htmlFor={Translations.service_feedback.username}
                        value={Translations.service_feedback.username}
                      />
                      <Input
                        type="text"
                        className="form-control"
                        id="username"
                        name="username"
                        autoComplete="username"
                        value={
                          feedback_form.username ? feedback_form.username : ""
                        }
                        onChange={this.handleFieldChangeUsername}
                      />
                      {feedback_form.username.length > 0 ? (
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
                        htmlFor={Translations.service_feedback.email}
                        value={Translations.service_feedback.email}
                      />
                      <Input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        autoComplete="email"
                        value={feedback_form.email ? feedback_form.email : ""}
                        onChange={this.handleFieldChangeEmail}
                      />
                      {feedback_form.email.length > 0 ? (
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
                        htmlFor={Translations.service_feedback.subject}
                        value={Translations.service_feedback.subject}
                      />
                      <Input
                        type="text"
                        className="form-control"
                        id="subject"
                        name="subject"
                        autoComplete="subject"
                        value={
                          feedback_form.subject ? feedback_form.subject : ""
                        }
                        onChange={this.handleFieldChangeSubject}
                      />
                      {feedback_form.subject.length > 0 ? (
                        <img src={images.checked} alt={"checked"} />
                      ) : (
                        <img src={images.error} alt={"error"} />
                      )}
                      <ErrorSpan value={errors.subject} />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="form-group">
                      <Label
                        htmlFor={Translations.service_feedback.text}
                        value={Translations.service_feedback.text}
                      />
                      <Textarea
                        type="text"
                        className="form-control full-width-textarea"
                        id="text"
                        name="text"
                        autoComplete="text"
                        value={feedback_form.text ? feedback_form.text : ""}
                        onChange={this.handleFieldChangeText}
                      />
                      {feedback_form.text.length > 0 ? (
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
                        text={Translations.service_feedback.send}
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

  handleFieldChangeName = event => {
    const { feedback_form } = this.state;
    feedback_form[event.values.name] = event.values.val;
    this.setState({ feedback_form });
    this.formValid();
  };

  handleFieldChangeUsername = event => {
    const { feedback_form } = this.state;
    feedback_form[event.values.name] = event.values.val;
    this.setState({ feedback_form });
    this.formValid();
  };

  handleFieldChangeEmail = event => {
    const { feedback_form } = this.state;
    feedback_form[event.values.name] = event.values.val;
    this.setState({ feedback_form });
    this.formValid();
  };

  handleFieldChangeSubject = event => {
    const { feedback_form } = this.state;
    feedback_form[event.values.name] = event.values.val;
    this.setState({ feedback_form });
    this.formValid();
  };

  handleFieldChangeText = event => {
    const { feedback_form } = this.state;
    feedback_form[event.values.name] = event.values.val;
    this.setState({ feedback_form });
    this.formValid();
  };

  formValid = () => {
    const errors = {};
    let isFormValid = true;
    const { feedback_form } = this.state;

    if (feedback_form.name.length === 0) {
      errors.name = Translations.service_feedback.name_is_required;
      isFormValid = false;
    }
    if (feedback_form.username.length === 0) {
      errors.username = Translations.service_feedback.username_is_required;
      isFormValid = false;
    }

    const isValidEmail = emailRegex.test(feedback_form.email);
    if (!isValidEmail) {
      isFormValid = false;
      errors.email = Translations.service_feedback.email_should_be_valid;
    }

    if (feedback_form.email.length === 0) {
      errors.email = Translations.service_feedback.email_is_required;
      isFormValid = false;
    }

    if (feedback_form.subject.length === 0) {
      errors.subject = Translations.service_feedback.subject_is_required;
      isFormValid = false;
    }

    if (feedback_form.text.length === 0) {
      errors.text = Translations.service_feedback.text_is_required;
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
    const { feedback_form } = this.state;
  };
}

const mapStateToProps = state => ({
  searchData: state.searchData
});

const mapDispatchToProps = {
  getSearch
};

Feedback.propTypes = {
  searchData: PropTypes.any,
  history: PropTypes.any,
  getSearch: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feedback);
