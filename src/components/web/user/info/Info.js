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
      <div>
        <div>Your ad is pending review whitin the next 48 hours.</div>
        <div>
          <Button className="filled_button">Continue</Button>
        </div>
      </div>
    );
  }
}

export default StepOne;
