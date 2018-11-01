import React, { Component } from "react";
import * as images from "../../../../../lib/constants/images";
import propTypes from "prop-types";
import { ImageCropper } from "../../../../ui-kit";

class StepOne extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  uploadPhoto = e => {
    this.props.uploadFile(e, "photo");
  };

  render() {
    const {
      handleChangeField,
      form,
      uploadFile,
      isFor,
      handleEditImage
    } = this.props;
    console.log(form.image);

    return (
      <div className="modal-body">
        <div className="col-sm-6 upload-form">
          <div className="no-padding profile_image">
            <img
              src={images.image}
              alt="image1"
              className="img-circle img-responsive"
            />
          </div>
          <div className="user-title">
            <div className="normal_title">Title of campaigns</div>
            <div className="secondary_title">User name</div>
          </div>
          <form>
            <div className="form-group">
              <label htmlFor="title">Add title</label>
              <input
                type="text"
                value={this.props.form.title}
                name="title"
                onChange={handleChangeField}
              />
            </div>
            <div className="form-group">
              <label htmlFor="Location">Add Location</label>
              <input
                type="text"
                value={this.props.form.location}
                name="location"
                onBlur={handleChangeField}
              />
            </div>
            <div className="form-group">
              <label htmlFor="Category">Add Category</label>
              <select
                name="category"
                value={this.props.form.category}
                onBlur={handleChangeField}
              >
                <option>Select category</option>
                <option>Category 1</option>
                <option>Category 2</option>
                <option>Category 3</option>
                <option>Category 4</option>
              </select>
            </div>
            <div className="subtitle">Application criteria</div>
            {isFor && (
              <div>
                <div className="form-group">
                  <label htmlFor="Procedure">Procedure</label>
                  <ul className="options">
                    <li onChange={handleChangeField} className="wid49">
                      <input
                        type="radio"
                        id="public"
                        name="procedure"
                        className="black_button"
                        value="public"
                        defaultChecked={form.procedure === "public"}
                      />
                      <label htmlFor="public">Public</label>
                    </li>
                    <li onChange={handleChangeField} className="wid49">
                      <input
                        type="radio"
                        id="anonymous"
                        name="procedure"
                        value="anonymous"
                        defaultChecked={form.procedure === "anonymous"}
                      />
                      <label htmlFor="anonymous">Anonymous</label>
                    </li>
                  </ul>
                </div>
                <div className="form-group">
                  <label htmlFor="Type">Type</label>
                  <ul className="options">
                    <li onChange={handleChangeField} className="wid49">
                      <input
                        type="radio"
                        id="video"
                        name="type"
                        className="black_button"
                        value="video"
                        defaultChecked={form.type === "video"}
                      />
                      <label htmlFor="video">Video</label>
                    </li>
                    <li onChange={handleChangeField} className="wid49">
                      <input
                        type="radio"
                        id="image"
                        name="type"
                        value="image"
                        defaultChecked={form.type === "image"}
                      />
                      <label htmlFor="image">Image</label>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            <div className="form-group">
              <label htmlFor="Target_group">Target group</label>
              <ul className="options target-options">
                <li onChange={handleChangeField} className="wid49">
                  <input
                    type="radio"
                    id="company"
                    name="target_group"
                    className="black_button"
                    value="company"
                    defaultChecked={form.target_group === "company"}
                  />
                  <label htmlFor="company">Company</label>
                </li>
                <li onChange={handleChangeField} className="wid49">
                  <input
                    type="radio"
                    id="female-male"
                    value="female-male"
                    name="target_group"
                    defaultChecked={form.target_group === "female-male"}
                  />
                  <label htmlFor="femalemale">Female & Male</label>
                </li>
                <li onChange={handleChangeField} className="wid49">
                  <input
                    type="radio"
                    id="female"
                    name="target_group"
                    value="female"
                    defaultChecked={form.target_group === "female"}
                  />
                  <label htmlFor="female">Female</label>
                </li>
                <li onChange={handleChangeField} className="wid49">
                  <input
                    type="radio"
                    id="male"
                    name="target_group"
                    value="male"
                    defaultChecked={form.target_group === "male"}
                  />
                  <label htmlFor="male">Male</label>
                </li>
              </ul>
            </div>
            <div className="subtitle">Details of campaigns</div>
            <div className="form-group">
              <label htmlFor="Offer">Offer</label>
              <select
                name="offer"
                value={this.props.form.offer}
                onBlur={handleChangeField}
              >
                <option>Select offer</option>
                <option>Offer 1</option>
                <option>Offer 2</option>
                <option>Offer 3</option>
                <option>Offer 4</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="offer_tag">Offer tag</label>
              <input
                type="text"
                name="offer_tag"
                value={this.props.form.offer_tag}
                onChange={handleChangeField}
              />
            </div>
            <div className="form-group">
              <label htmlFor="Inquiry">Inquiry</label>
              <select
                name="inquiry"
                value={this.props.form.inquiry}
                onBlur={handleChangeField}
              >
                <option>Select Inquiry</option>
                <option>Inquiry 1</option>
                <option>Inquiry 2</option>
                <option>Inquiry 3</option>
                <option>Inquiry 4</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="Inquiry_tag">Inquiry tag</label>
              <input
                type="text"
                name="inquiry_tag"
                value={this.props.form.inquiry_tag}
                onChange={handleChangeField}
              />
            </div>
          </form>
        </div>
        <div className="col-sm-6 no-padding right-side">
          <ImageCropper
            image={form.image}
            handleEditImage={handleEditImage}
            isCircle={false}
            ref={this.imageCrop}
          />
          {/* <div className="box">
            {this.props.form.photo !== "" ? (
              <img src={this.props.form.photo} alt="" />
            ) : (
              ""
            )}
            <input
              type="file"
              name="file-2[]"
              id="file-2"
              className="inputfile inputfile-2"
              data-multiple-caption="{count} files selected"
              multiple=""
              onChange={this.uploadPhoto}
            />
            <label htmlFor="file-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="17"
                viewBox="0 0 20 17"
              >
                <path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z" />
              </svg>
              <br /> <span>Upload title image</span>
            </label>
          </div> */}
          <div className="add-wrapper">
            <img src={images.plus_button} alt={"plus_button"} />
          </div>
        </div>
      </div>
    );
  }
}

StepOne.propTypes = {
  handleChangeField: propTypes.func.isRequired,
  form: propTypes.any.isRequired,
  isFor: propTypes.bool.isRequired,
  uploadFile: propTypes.func.isRequired
};

export default StepOne;
