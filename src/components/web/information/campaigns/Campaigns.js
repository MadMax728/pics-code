import React from "react";
import * as images from "../../../../lib/constants/images";

const CampaignsInformation = () => {
  return (
    <div className="padding-rl-10 middle-section width-80">
      <div className="cms-middle-section col-xs-12 no-padding">
        <div className="panel-wrapper mar-btm-5">
          <div className="col-sm-6 content-wrapper padding-rl-23">
            <div className="title">Campaign - Companies</div>
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
            <img
              src={images.campaign_1}
              alt={"campaign_1"}
              className="width-100"
            />
          </div>
        </div>
        <div className="panel-wrapper mar-btm-5">
          <div className="col-sm-6 content-wrapper padding-rl-23">
            <div className="title">Campaign - Creators</div>
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
            <img
              src={images.campaign_2}
              alt={"campaign_2"}
              className="width-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignsInformation;