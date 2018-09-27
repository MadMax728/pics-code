import React, { Component } from "react";
import * as images from "../../../../../lib/constants/images";

class StepOne extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
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
              <input type="text" name="title" />
            </div>
            <div className="form-group">
              <label htmlFor="Location">Add Location</label>
              <input type="text" name="location" />
            </div>
            <div className="form-group">
              <label htmlFor="Radius">Add Radius</label>
              <select>
                <option>10</option>
                <option>20</option>
                <option>30</option>
                <option>30</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="Category">Add Category</label>
              <select>
                <option>Category 1</option>
                <option>Category 2</option>
                <option>Category 3</option>
                <option>Category 4</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="Description">Add Description</label>
              <textarea className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="target">Add target group</label>
              <ul className="options">
                <li className="full-width-input-wrapper">
                  <input
                    type="radio"
                    id="male-female"
                    name="target"
                    className="black_button"
                  />
                  <label htmlFor="male-female">Male & Female</label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="male"
                    name="target"
                    className="black_button"
                  />
                  <label htmlFor="male">Male</label>
                </li>
                <li>
                  <input type="radio" id="female" name="target" />
                  <label htmlFor="female">Female</label>
                </li>
              </ul>
            </div>
            <div className="subtitle">Define details</div>
            <div className="form-group">
              <label htmlFor="call">Add call to action button</label>
              <select>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="Insert_link">Insert link</label>
              <input type="text" name="offer-tag" />
            </div>
          </form>
        </div>
        <div className="col-sm-6 no-padding right-side ads-right-section">
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

export default StepOne;
