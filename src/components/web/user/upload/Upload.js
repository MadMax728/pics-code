import React, { Component } from "react";
import * as images from "../../../../lib/constants/images";
import propTypes from "prop-types";
import { HashTagUsername } from "../../../common";

class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChangeField = event => {
    this.props.handleChangeField(event);
  };

  render() {
    const { form, handleSetState } = this.props;
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
              <label htmlFor="Location">Add Location</label>
              <input
                type="text"
                name="add_location"
                onChange={this.handleChangeField}
              />
            </div>
            <div className="form-group">
              <label htmlFor="Category">Add Category</label>
              <select name="add_category" onBlur={this.handleChangeField}>
                <option value={"category_1"}>Category 1</option>
                <option value={"category_2"}>Category 2</option>
                <option value={"category_3"}>Category 3</option>
                <option value={"category_4"}>Category 4</option>
              </select>
            </div>
            <div className="form-group no-margin">
              <label htmlFor="description">Add description</label>
              <HashTagUsername
                className="form-control"
                type="text"
                name="add_decription"
                handleSetState={handleSetState}
                value={form.add_decription}
              />
            </div>
          </form>
        </div>
        <div className="col-sm-6 no-padding">
          <div className="image-wrapper">
            {/* <div className="progress-bar-wrapper">
              <div className="progress blue">
                <span className="progress-left">
                  <span className="progress-bar" />
                </span>
                <span className="progress-right">
                  <span className="progress-bar" />
                </span>
                <div className="progress-value">90%</div>
              </div>
            </div> */}
            <ul className="progress">
              <li data-percent="90%">
                <svg viewBox="-10 -10 220 220">
                  <g
                    fill="none"
                    stroke-width="20"
                    transform="translate(100,100)"
                  >
                    <path
                      d="M 0,-100 A 100,100 0 0,1 86.6,-50"
                      stroke="url(#cl1)"
                    />
                    <path
                      d="M 86.6,-51 A 100,100 0 0,1 86.6,50"
                      stroke="url(#cl2)"
                    />
                    <path
                      d="M 86.6,49 A 100,100 0 0,1 0,100"
                      stroke="url(#cl3)"
                    />
                    <path
                      d="M 0,101 A 100,100 0 0,1 -86.6,50"
                      stroke="url(#cl4)"
                    />
                    <path
                      d="M -86.6,51 A 100,100 0 0,1 -86.6,-50"
                      stroke="url(#cl5)"
                    />
                    <path
                      d="M -86.6,-49 A 100,100 0 0,1 0,-100"
                      stroke="url(#cl6)"
                    />
                  </g>
                </svg>
                <svg viewBox="-10 -10 220 220">
                  <path
                    d="M200,100 C200,44.771525 155.228475,0 100,0 C44.771525,0 0,44.771525 0,100 C0,155.228475 44.771525,200 100,200 C155.228475,200 200,155.228475 200,100 Z"
                    stroke-dashoffset="629"
                  />
                </svg>
              </li>
            </ul>
            <svg width="0" height="0">
              <defs>
                <linearGradient
                  id="cl1"
                  gradientUnits="objectBoundingBox"
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="1"
                >
                  <stop stop-color="#1f58a6" />
                  <stop offset="100%" stop-color="#1a64af" />
                </linearGradient>
                <linearGradient
                  id="cl2"
                  gradientUnits="objectBoundingBox"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop stop-color="#1a64af" />
                  <stop offset="100%" stop-color="#166fb7" />
                </linearGradient>
                <linearGradient
                  id="cl3"
                  gradientUnits="objectBoundingBox"
                  x1="1"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop stop-color="#166fb7" />
                  <stop offset="100%" stop-color="#1177bd" />
                </linearGradient>
                <linearGradient
                  id="cl4"
                  gradientUnits="objectBoundingBox"
                  x1="1"
                  y1="1"
                  x2="0"
                  y2="0"
                >
                  <stop stop-color="#1177bd" />
                  <stop offset="100%" stop-color="#0e82c5" />
                </linearGradient>
                <linearGradient
                  id="cl5"
                  gradientUnits="objectBoundingBox"
                  x1="0"
                  y1="1"
                  x2="0"
                  y2="0"
                >
                  <stop stop-color="#0e82c5" />
                  <stop offset="100%" stop-color="#098aca" />
                </linearGradient>
                <linearGradient
                  id="cl6"
                  gradientUnits="objectBoundingBox"
                  x1="0"
                  y1="1"
                  x2="1"
                  y2="0"
                >
                  <stop stop-color="#098aca" />
                  <stop offset="100%" stop-color="#029ad6" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="add-wrapper">
            <img src={images.plus_button} alt={"plus_button"} />
          </div>
        </div>
      </div>
    );
  }
}

Upload.propTypes = {
  handleChangeField: propTypes.func.isRequired,
  handleSetState: propTypes.func.isRequired,
  form: propTypes.any.isRequired
};

export default Upload;
