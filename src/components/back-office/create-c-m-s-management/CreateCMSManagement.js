import React, { Component } from "react";
import { Editor } from "react-draft-wysiwyg";
import "../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
class CreateCMSManagement extends Component {
  render() {
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
                <input type="text" />
              </div>
              <div className="form-col col-xs-6 no-padding-right res480">
                <label htmlFor="URL">URL</label>
                <input type="text" />
              </div>
            </div>
            <div className="form-row marBtm30 col-xs-12">
              <div className="form-col col-xs-6 no-padding res480">
                <label htmlFor="Language">Language</label>
                <select name="" id="">
                  <option value="">Item1</option>
                  <option value="">Item2</option>
                  <option value="">Item3</option>
                </select>
                <span className="glyphicon glyphicon-triangle-bottom" />
              </div>
              <div className="form-col col-xs-6 no-padding-right res480">
                <label htmlFor="Display page">Display page</label>
                <div className="choice-wrapr">
                  <div className="choice">
                    <input type="radio" name="choice" />
                    <label htmlFor="Public">Public</label>
                  </div>
                  <div className="choice">
                    <input type="radio" name="choice" />
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
              <button type="button" className="form-btn">
                Cancel
              </button>
              <button type="button" className="form-btn">
                Preview
              </button>
              <button type="button" className="form-btn">
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
