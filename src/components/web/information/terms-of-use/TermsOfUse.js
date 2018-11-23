import React, { Component } from "react";

class TermsOfUse extends Component {
  componentDidMount = () => {
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <div className="padding-rl-10 middle-section width-80">
        <div className="cms-middle-section col-xs-12 no-padding">
          <div className="panel-wrapper wid100">
            <div className="content-wrapper padding-rl-23">
              <div className="title">Terms of Use</div>
              <p>
                This text is an example text. This text is an example text.This
                text is an example text.This text is an example text.This text
                is an example text.This text is an example text.This text is an
                example text.
              </p>
              <div className="sub-title">This text is an example</div>
              <ul className="policy-points">
                <li>
                  <div className="question">What is Picstagraph?</div>
                  <div className="answer">
                    This text is an example. This text is an example. This text
                    is an example. This text is an example. This text is an
                    example. This text is an example.This text is an example.
                  </div>
                </li>
                <li>
                  <div className="question">What is Picstagraph?</div>
                  <div className="answer">
                    This text is an example. This text is an example. This text
                    is an example. This text is an example. This text is an
                    example. This text is an example.This text is an example.
                  </div>
                </li>
                <li>
                  <div className="question">What is Picstagraph?</div>
                  <div className="answer">
                    This text is an example. This text is an example. This text
                    is an example. This text is an example. This text is an
                    example. This text is an example.This text is an example.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TermsOfUse;
