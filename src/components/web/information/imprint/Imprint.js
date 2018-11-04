import React from "react";
import * as images from "../../../../lib/constants/images";

const Imprint = () => {
  return (
    <div className="padding-rl-10 middle-section width-80">
      <div className="cms-middle-section col-xs-12 no-padding backWhite">
        <div className="panel-wrapper col-xs-12">
          <div className="col-sm-6 content-wrapper">
            <div className="title">Imprint</div>
            <div className="contact-wrapper margin-bottom-10">
              Picstagraph GmbH
              <br />
              Dekan-Laist-Str.32
              <br />
              55129 Mainz
              <br />
              Germany
            </div>
            <div className="contact-wrapper margin-bottom-10">
              <div>
                Phone DE:{" "}
                <a href="tel:+49 151 12706187" className="no-underline">
                  +49 151 12706187
                </a>
              </div>
              <div>
                E-Mail:{" "}
                <a href="mailto:marcbopp@picstagraph.com">
                  marcbopp@picstagraph.com{" "}
                </a>
              </div>
            </div>
            <div className="contact-wrapper margin-bottom-10">
              Handelsregister HRB: 0000
            </div>
            <div className="contact-wrapper margin-bottom-10">
              Geschäftsführer: Marc Aurel Bopp
            </div>
            <div className="contact-wrapper margin-bottom-10">
              UST ID: DE 000000
            </div>
          </div>
          <div className="col-sm-6 no-padding text-center">
            <img
              src={images.imprint_logo_big}
              alt={"imprint_logo_big"}
              className="padding-50 logo-big"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Imprint;
