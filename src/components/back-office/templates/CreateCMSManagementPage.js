import React, { Component } from "react";
import "../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Link } from "react-router-dom";
import * as routes from "../../../lib/constants/routes";
import { TextEditor } from "../../ui-kit/text-editor";
import { Translations } from "../../../lib/translations";
import { getCMSDetail, updateCMS, createCMS } from "../../../actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { modalType } from "../../../lib/constants/enumerations";

class CreateCMSManagementPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      form: {
        id: "",
        title: "",
        url: "",
        pageLanguage: Translations.languages.english,
        displayPage: Translations.cms.public,
        description: ""
      },
      isEdit: false,
    };
  }

  componentDidMount = () => {
    const isEdit = !!((this.props.match && this.props.match.params.id))
    this.setState({ isEdit });
    if (isEdit) {
      this.props.getCMSDetail(this.props.match.params.id).then(()=> {
        if(this.props.cmsManagementData && this.props.cmsManagementData.cmsDetail){
          this.setState({
            form: {...this.state.form,
              id: this.props.cmsManagementData.cmsDetail.id,
              title: this.props.cmsManagementData.cmsDetail.title,
              url: this.props.cmsManagementData.cmsDetail.url,
              language: this.props.cmsManagementData.cmsDetail.pageLanguage,
              display_page: this.props.cmsManagementData.cmsDetail.displayPage,
              description: this.props.cmsManagementData.cmsDetail.description
            }
          })
        }
      })
    }
  }

  handleChangeField = event => {
    const { form } = this.state;
    form[event.target.name] = event.target.value;
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
    if(this.validationForm()){
      if(isEdit) {
        const data = {
          id: form.id,
          url: form.url,
          description: form.description,
          displayPage: form.displayPage,
          language: form.pageLanguage,
          title: form.title
        }
        this.props.updateCMS(data).then(()=> {
          this.props.history.goBack();
        })
      }
      else {
        const data = {
          url: form.url,
          description: form.description,
          displayPage: form.displayPage,
          language: form.pageLanguage,
          title: form.title
        }
        this.props.createCMS(data).then(()=> {
          this.props.history.goBack();
        })
      }
    }
  };

  handleContentChange = (text) => {
    const { form } = this.state;
    form.description = text === "<p></p>"? "" : text;
    this.setState({ form });
  }

  handlePreview = () => {
    this.props.handleModalInfoDetailsShow(modalType.cmsPreview,this.state.form);
  }

  render() {
    const { form, isEdit } = this.state;
    return (
      <div className="padding-rl-10 middle-section width-80">
        <div className="create-cms-page-wrapr">
          <div className="page-heading col-xs-12 mar-btm-5">
            {isEdit? Translations.cms.edit : Translations.cms.create}
          </div>
          <form className="cms-form col-xs-12" onSubmit={this.handleSubmit}>
            <div className="form-row col-xs-12">
              <div className="form-col col-xs-6 no-padding res480">
                <label htmlFor="Title of page" className="col-xs">
                  {Translations.cms.title_of_page}
                </label>
                <input
                  type="text"
                  name="title"
                  defaultValue={form.title}
                  onChange={this.handleChangeField}
                />
              </div>
              <div className="form-col col-xs-6 no-padding-right res480">
                <label htmlFor="URL">{Translations.cms.url}</label>
                <input
                  type="text"
                  name="url"
                  defaultValue={form.url}
                  onChange={this.handleChangeField}
                />
              </div>
            </div>
            <div className="form-row marBtm30 col-xs-12">
              <div className="form-col col-xs-6 no-padding res480">
                <label htmlFor="Language">{Translations.cms.language}</label>
                <select name="language" id="" onBlur={this.handleChangeField} onChange={this.handleChangeField} value={form.pageLanguage} >
                  <option value="English">English</option>
                  <option value="German">German</option>
                </select>
                <span className="glyphicon glyphicon-triangle-bottom" />
              </div>
              <div className="form-col col-xs-6 no-padding-right res480">
                <label htmlFor="Display page">{Translations.cms.display_page}</label>
                <div className="choice-wrapr">
                  <div className="choice" onChange={this.handleChangeField}>
                    <input
                      type="radio"
                      name="display_page"
                      value={Translations.cms.public}
                      defaultChecked={form.displayPage === Translations.cms.public}
                    />
                    <label htmlFor="Public">{Translations.cms.public}</label>
                  </div>
                  <div className="choice" onChange={this.handleChangeField}>
                    <input
                      type="radio"
                      name="display_page"
                      value={Translations.cms.draft}
                      defaultChecked={form.displayPage === Translations.cms.draft}
                    />
                    <label htmlFor="Draft">{Translations.cms.draft}</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-row col-xs-12 res480">
              <TextEditor 
                handleContentChange={this.handleContentChange}
                contentText={form.description}
              />
            </div>
            <div className="form-row col-xs-12 marBtm0">
              <Link to={routes.BACK_OFFICE_CMS_MANAGMENT_ROUTE}>
                <button type="button" className="form-btn">
                {Translations.cms.cancle}
                </button>
              </Link>
              <button type="button" className="form-btn" onClick={this.handlePreview}>
                {Translations.cms.preview}
              </button>
              <button
                type="submit"
                className="form-btn"
              >
                {isEdit? Translations.cms.update : Translations.cms.save}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cmsManagementData: state.cmsManagementData
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
  history: PropTypes.any
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateCMSManagementPage);