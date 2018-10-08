import React from "react";
import * as images from "../../../../lib/constants/images";

const OurMission = () => {
  return (
    <div className="padding-rl-10 middle-section width-80">
      <div className="cms-middle-section">
        <div className="panel-wrapper">
          <div className="col-sm-6 content-wrapper">
            <div className="title">Our Vision</div>
            <p>
              This text is an example text. This text is an example text.This
              text is an example text.This text is an example text.This text is
              an example text.This text is an example text.This text is an
              example text.This text is an example text.
            </p>
            <p>
              This text is an example text. This text is an example text.This
              text is an example text.This text is an example text.This text is
              an example text.This text is an example text.This text is an
              example text.This text is an example text.
            </p>
          </div>
          <div className="col-sm-6 no-padding">
            <img src={images.vision} alt={"vision"} className="width-100" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
