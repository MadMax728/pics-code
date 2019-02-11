import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getCMSDetail, updateCMS, createCMS } from "../../../actions";

import { TextEditor } from "../../ui-kit/text-editor";

import { modalType } from "../../../lib/constants/enumerations";
import * as routes from "../../../lib/constants/routes";
import { Translations } from "../../../lib/translations";
import InlineLoading from "../../ui-kit/loading-indicator/InlineLoading";
import { Input, RadioButton, Button, Label } from "../../ui-kit";
import { SelectLanguage } from "../../common";

class CreateCMSManagementPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      searchKeyword: this.props.searchData.searchKeyword,      
      form: {
        id: "",
        title: "",
        url: "",
        pageLanguage: Translations.languages.english,
        displayPage: Translations.cms.public,
        description: ""
      },
      isEdit: false
    };
  }

  handleSelect = (isFor , selected) => {
    console.log(selected);
    
    const { form } = this.state;
    form.pageLanguage = selected
    this.setState({ form });
  }

  render() {
    const { form, isEdit } = this.state;
    const { cmsManagementData } = this.props;
    console.log(this.props);
    console.log(form.description);
    
    return (
      <div className="padding-rl-10 middle-section width-80">
        <div className="create-cms-page-wrapr">
          <div className="page-heading col-xs-12 mar-btm-5">
            {isEdit ? Translations.cms.edit : Translations.cms.create}
          </div>
          {
            cmsManagementData && cmsManagementData.isLoading && <InlineLoading />
          }
          <form className="cms-form col-xs-12" onSubmit={this.handleSubmit}>
            <div className="form-row col-xs-12">
              <div className="form-col col-xs-6 no-padding res480">
                <label htmlFor="Title of page" className="col-xs">
                  {Translations.cms.title_of_page}
                </label>
                <Input
                  type="text"
                  name="title"
                  value={form.title}
                  onChange={this.handleChangeField}
                />
              </div>
              <div className="form-col col-xs-6 no-padding-right res480">
                <label htmlFor="URL">{Translations.cms.url}</label>
                <Input
                  type="text"
                  name="url"
                  value={form.url}
                  onChange={this.handleChangeField}
                />
              </div>
            </div>
            <div className="form-row marBtm30 col-xs-12">
              <div className="form-col col-xs-6 no-padding res480">
                <label htmlFor="Language">{Translations.cms.language}</label>
                  <SelectLanguage
                    value={form.language}
                    handleSelect={this.handleSelect}
                  />
                <span className="glyphicon glyphicon-triangle-bottom" />
              </div>
              <div className="form-col col-xs-6 no-padding-right res480">
                <label htmlFor="Display page">{Translations.cms.display_page}</label>
                <div className="choice-wrapr">
                  <div className="choice">
                    <RadioButton
                      type="radio"
                      name="displayPage"
                      value={Translations.cms.public}
                      defaultChecked={form.displayPage === Translations.cms.public}
                      onChange={this.handleChangeField}
                    />
                    <Label htmlFor="Public" value={Translations.cms.public} />
                  </div>
                  <div className="choice">
                    <RadioButton
                      type="radio"
                      name="displayPage"
                      value={Translations.cms.draft}
                      defaultChecked={form.displayPage === Translations.cms.draft}
                      onChange={this.handleChangeField}
                    />  
                    <Label htmlFor="Draft" value={Translations.cms.draft} />
                  </div>
                </div>
              </div>
            </div>
            <div className="form-row col-xs-12 res480">
              <TextEditor
                handleContentChange={this.handleContentChange}
                contentText={form.description || ""}
              />
            </div>
            <div className="form-row col-xs-12 marBtm0">
              <Link to={routes.BACK_OFFICE_CMS_MANAGMENT_ROUTE}>
                <Button 
                  className="form-btn" 
                  text={Translations.cms.cancle}
                />
              </Link>
              <Button 
                className="form-btn" 
                onClick={this.handlePreview}
                text={Translations.cms.preview}
              />
              <Button 
                type="submit" 
                className="form-btn"
                text={isEdit ? Translations.cms.update : Translations.cms.save}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }

  componentDidMount = () => {
    const isEdit =
      !!(this.props.match && this.props.match.params.id);
    this.setState({ isEdit });
    if (isEdit) {
      this.props.getCMSDetail(this.props.match.params.id).then(() => {
        if (
          this.props.cmsManagementData &&
          this.props.cmsManagementData.cmsDetail
        ) {
          this.setState({
            form: {
              ...this.state.form,
              id: this.props.cmsManagementData.cmsDetail.id,
              title: this.props.cmsManagementData.cmsDetail.title,
              url: this.props.cmsManagementData.cmsDetail.url,
              language: this.props.cmsManagementData.cmsDetail.pageLanguage,
              display_page: this.props.cmsManagementData.cmsDetail.displayPage,
              description: this.props.cmsManagementData.cmsDetail.description
            }
          });
        }
      });
    }
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.searchData.searchKeyword !== prevState.searchKeyword) {
      nextProps.history.push(
        routes.ROOT_ROUTE + "?search=" + nextProps.searchData.searchKeyword
      );
    }
    return null;
  }

  handleChangeField = event => {
    console.log(event.values);    
    const { form } = this.state;
    form[event.values.name] = event.values.val;
    this.setState({ form });
  };

  validationForm = () => {
    const { form } = this.state;
    return form.title && form.pageLanguage && form.url && form.description;
  }

  // handelSubmit called when click on submit
  handleSubmit = e => {
    e.preventDefault();
    const { form, isEdit } = this.state;
    if (this.validationForm()) {
      if (isEdit) {
        const data = {
          id: form.id,
          url: form.url,
          description: form.description,
          displayPage: form.displayPage,
          language: form.pageLanguage,
          title: form.title
        };
        this.props.updateCMS(data).then(() => {
          this.props.history.goBack();
        });
      } else {
        const data = {
          url: form.url,
          description: form.description,
          displayPage: form.displayPage,
          language: form.pageLanguage,
          title: form.title
        };
        this.props.createCMS(data).then(() => {
          this.props.history.goBack();
        });
      }
    }
  };

  handleContentChange = text => {
    const { form } = this.state;
    form.description = text === "<p></p>" ? "" : text;;
    this.setState({ form });
  };

  handlePreview = () => {
    this.props.handleModalInfoDetailsShow(modalType.cmsPreview, this.state.form);
  }
}

const mapStateToProps = state => ({
  cmsManagementData: state.cmsManagementData,
  searchData: state.searchData
});

const mapDispatchToProps = {
  getCMSDetail,
  updateCMS,
  createCMS
};

CreateCMSManagementPage.propTypes = {
  getCMSDetail: PropTypes.func.isRequired,
  updateCMS: PropTypes.func.isRequired,
  createCMS: PropTypes.func.isRequired,
  handleModalInfoDetailsShow: PropTypes.func.isRequired,
  cmsManagementData: PropTypes.object,
  match: PropTypes.any,
  history: PropTypes.any,
  searchData: PropTypes.any
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateCMSManagementPage);
