import React, { Component } from "react";
import { Editor } from "react-draft-wysiwyg";
import "../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Link } from "react-router-dom";
import * as routes from "../../../lib/constants/routes";

class CreateCMSManagement extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      form: {
        title: "",
        url: "",
        language: "",
        displal_page: "public",
        description: ""
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

  render() {
    const { form } = this.state;
    return (
      <div className="padding-rl-10 middle-section width-80">
        <div className="create-cms-page-wrapr">
          <div className="page-heading col-xs-12 mar-btm-5">
            Create new CMS page
          </div>
          <form className="cms-form col-xs-12 ">
            <div className="form-row col-xs-12">
              <div className="form-col col-xs-6 no-padding res480">
                <label htmlFor="Title of page" className="col-xs">
                  Title of page
                </label>
                <input
                  type="text"
                  name="title"
                  onChange={this.handleChangeField}
                />
              </div>
              <div className="form-col col-xs-6 no-padding-right res480">
                <label htmlFor="URL">URL</label>
                <input
                  type="text"
                  name="url"
                  onChange={this.handleChangeField}
                />
              </div>
            </div>
            <div className="form-row marBtm30 col-xs-12">
              <div className="form-col col-xs-6 no-padding res480">
                <label htmlFor="Language">Language</label>
                <select name="language" id="" onBlur={this.handleChangeField}>
                  <option value="">Item1</option>
                  <option value="">Item2</option>
                  <option value="">Item3</option>
                </select>
                <span className="glyphicon glyphicon-triangle-bottom" />
              </div>
              <div className="form-col col-xs-6 no-padding-right res480">
                <label htmlFor="Display page">Display page</label>
                <div className="choice-wrapr">
                  <div className="choice" onChange={this.handleChangeField}>
                    <input
                      type="radio"
                      name="displal_page"
                      value="public"
                      defaultChecked={form.displal_page === "public"}
                    />
                    <label htmlFor="Public">Public</label>
                  </div>
                  <div className="choice" onChange={this.handleChangeField}>
                    <input
                      type="radio"
                      name="displal_page"
                      value="default"
                      defaultChecked={form.displal_page === "default"}
                    />
                    <label htmlFor="Default">Default</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-row col-xs-12 res480">
              <Editor
                toolbarOnFocus
                wrapperClassName="wrapper-class"
                editorClassName="editor-class"
                toolbarClassName="toolbar-class"
              />
            </div>
            <div className="form-row col-xs-12 marBtm0">
              <Link to={routes.BACK_OFFICE_CMS_MANAGMENT_ROUTE}>
                <button type="button" className="form-btn">
                  Cancel
                </button>
              </Link>
              <button type="button" className="form-btn">
                Preview
              </button>
              <button
                type="button"
                className="form-btn"
                onClick={this.handleSubmit}
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateCMSManagement;
