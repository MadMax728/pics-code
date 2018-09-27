import React, { Component } from "react";
import * as images from "../../../../lib/constants/images";
import { Button } from "../../../ui-kit";

class StepOne extends Component {
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
          <Button className="filled_button">Continue</Button>
        </div>
      </div>
    );
  }
}

export default StepOne;
