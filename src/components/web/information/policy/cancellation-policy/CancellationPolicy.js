import React, { Component } from "react";

class CancellationPolicy extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="padding-rl-10 middle-section width-80">
        <div className="cms-middle-section">
          <div className="panel-wrapper">
            <div className="content-wrapper">
              <div className="title">Cancellation Policy</div>
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

export default CancellationPolicy;
