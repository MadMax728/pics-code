import React, { Component } from "react";
import propTypes from "prop-types";

class ContentView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={"modal-body"}>
        <div className="col-sm-12">
          Your ad is pending review whitin the next 48 hours.
        </div>
        <div className="col-sm-12">
          <button className="filled_button" onClick={this.handleModalHides}>
            Continue
          </button>
        </div>
      </div>
    );
  }
}

export default ContentView;
