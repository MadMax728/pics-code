import React, { Component } from "react";
import * as images from "../../../../../../lib/constants/images";

class StepTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="modal-body">
        <div className="col-sm-7 create-campaign-wrapper">
          <div className="title">Title</div>
          <input
            type="text"
            placeholder="Enter your campaign description here and add images and videos… "
          />
        </div>
        <div className="col-sm-5 no-padding disp-flex">
          <div className="editor-options">
            <ul className="editor-row">
              <li>
                <input type="radio" id="title" name="font" className="" />
                <label htmlFor="title" className="title-font">
                  Title
                </label>
              </li>
              <li>
                <input type="radio" id="heading" name="font" />
                <label htmlFor="heading" className="heading-font">
                  Heading
                </label>
              </li>
              <li className="border-right">
                <input type="radio" id="text" name="font" />
                <label htmlFor="text" className="text-font">
                  Text
                </label>
              </li>
              <li className="no-border">
                <button>
                  <img src={images.plus_button} alt={"plus_button"} />
                </button>
              </li>
            </ul>
            <ul className="editor-row">
              <li>
                <input type="checkbox" id="chk1" name="chk" value="all" />
                <label htmlFor="chk1">
                  <img src={images.alignment1} alt={"alignment1"} />
                </label>
              </li>
              <li>
                <input type="checkbox" id="chk2" name="chk" value="false" />
                <label htmlFor="chk2">
                  <img src={images.alignment2} alt={"alignment2"} />
                </label>
              </li>
              <li>
                <input type="checkbox" id="chk3" name="chk" value="true" />
                <label htmlFor="chk3">
                  <img src={images.alignment3} alt={"alignment3"} />
                </label>
              </li>
              <li>
                <input type="checkbox" id="chk4" name="chk" value="true" />
                <label htmlFor="chk4">
                  <img src={images.alignment4} alt={"alignment4"} />
                </label>
              </li>
            </ul>
            <ul className="editor-row">
              <li>
                <input type="checkbox" id="chk5" name="chk" value="all" />
                <label htmlFor="chk5">B</label>
              </li>
              <li>
                <input type="checkbox" id="chk6" name="chk" value="false" />
                <label htmlFor="chk6">
                  <i>I</i>
                </label>
              </li>
              <li>
                <input type="checkbox" id="chk7" name="chk" value="true" />
                <label htmlFor="chk7">U</label>
              </li>
              <li>
                <input type="checkbox" id="chk8" name="chk" value="true" />
                <label htmlFor="chk8">S</label>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default StepTwo;
