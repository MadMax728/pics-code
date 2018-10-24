import React, { Component } from "react";
import * as images from "../../../../../../lib/constants/images";
import propTypes from "prop-types";
class StepOne extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { handleChangeField, form } = this.props;
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
            <div className="normal_title">Title of campaigns c</div>
            <div className="secondary_title">User name</div>
          </div>
          <form>
            <div className="form-group">
              <label htmlFor="title">Add title</label>
              <input type="text" name="title" onChange={handleChangeField} />
            </div>
            <div className="form-group">
              <label htmlFor="Location">Add Location</label>
              <input type="text" name="location" onChange={handleChangeField} />
            </div>
            <div className="form-group">
              <label htmlFor="Category">Add Category</label>
              <select onBlur={handleChangeField} name="categoty">
                <option value="Category 1">Category 1</option>
                <option value="Category 2">Category 2</option>
                <option value="Category 3">Category 3</option>
                <option value="Category 4">Category 4</option>
              </select>
            </div>
            <div className="subtitle">Application criteria</div>
            <div className="form-group">
              <label htmlFor="Target_group">Target group</label>
              <ul className="options target-options">
                <li onChange={handleChangeField}>
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
                <li onChange={handleChangeField}>
                  <input
                    type="radio"
                    id="femalemale"
                    name="target_group"
                    value="female-male"
                    defaultChecked={form.target_group === "Female & Male"}
                  />
                  <label htmlFor="femalemale">Female & Male</label>
                </li>
                <li onChange={handleChangeField}>
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                    defaultChecked={form.gender === "female"}
                  />
                  <label htmlFor="female">Female</label>
                </li>
                <li onChange={handleChangeField}>
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="male"
                    defaultChecked={form.gender === "male"}
                  />
                  <label htmlFor="male">Male</label>
                </li>
              </ul>
            </div>
            <div className="subtitle">Details of campaigns</div>
            <div className="form-group">
              <label htmlFor="Offer">Offer</label>
              <select onBlur={handleChangeField} name="offier">
                <option value="Offer 1">Offer 1</option>
                <option value="Offer 2">Offer 2</option>
                <option value="Offer 3">Offer 3</option>
                <option value="Offer 4">Offer 4</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="offer_tag">Offer tag</label>
              <input
                type="text"
                name="offer_tag"
                onChange={handleChangeField}
              />
            </div>
            <div className="form-group">
              <label htmlFor="Inquiry">Inquiry</label>
              <select onBlur={handleChangeField} name="inquiry">
                <option value="Inquiry 1">Inquiry 1</option>
                <option value="Inquiry 2">Inquiry 2</option>
                <option value="Inquiry 3">Inquiry 3</option>
                <option value="Inquiry 4">Inquiry 4</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="Inquiry_tag">Inquiry tag</label>
              <input
                type="text"
                name="inquiry_tag"
                onChange={handleChangeField}
              />
            </div>
          </form>
        </div>
        <div className="col-sm-6 no-padding right-side">
          <div className="box">
            <input
              type="file"
              name="file-2[]"
              id="file-2"
              className="inputfile inputfile-2"
              data-multiple-caption="{count} files selected"
              multiple=""
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
          </div>
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
  form: propTypes.any.isRequired
};

export default StepOne;
