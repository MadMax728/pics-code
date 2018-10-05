import React, { Component } from "react";
import { Collapse } from "react-bootstrap";
class Support extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      open: false,
      current: "1"
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleCollapse = e => {
    this.setState({ open: !this.state.open, current: e.target.id });
  };

  handleKeyDown = () => {};

  render() {
    const { open, current } = this.state;
    return (
      <div className="padding-rl-10 middle-section width-80">
        <div className="cms-middle-section">
          <div className="panel-wrapper">
            <div className="content-wrapper">
              <div className="title">Support</div>
              <div className="sub-title">Generel questions</div>
              <div
                className="panel-group support-accordion"
                id="general-question1"
              >
                <div className="panel panel-default">
                  <div className="panel-heading active">
                    <h4 className="panel-title">
                      <div
                        className="accordion-toggle"
                        onKeyDown={this.handleKeyDown}
                        onClick={this.handleCollapse}
                        id={"1"}
                        role="button"
                        tabIndex="0"
                      >
                        What is Picstagraph?
                      </div>
                    </h4>
                  </div>
                  <Collapse in={current === "1" && open}>
                    <div style={{ border: "0", paddingLeft: "25px" }}>
                      This text is an example. This text is an example. This
                      text is an example. This text is an example. This text is
                      an example.
                    </div>
                  </Collapse>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading active">
                    <h4 className="panel-title">
                      <div
                        className="accordion-toggle"
                        onKeyDown={this.handleKeyDown}
                        onClick={this.handleCollapse}
                        id={"2"}
                        role="button"
                        tabIndex="0"
                      >
                        What is Picstagraph?
                      </div>
                    </h4>
                  </div>
                  <Collapse in={current === "2" && open}>
                    <div style={{ border: "0", paddingLeft: "25px" }}>
                      This text is an example. This text is an example. This
                      text is an example. This text is an example. This text is
                      an example.
                    </div>
                  </Collapse>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading active">
                    <h4 className="panel-title">
                      <div
                        className="accordion-toggle"
                        onKeyDown={this.handleKeyDown}
                        onClick={this.handleCollapse}
                        id={"3"}
                        role="button"
                        tabIndex="0"
                      >
                        What is Picstagraph?
                      </div>
                    </h4>
                  </div>
                  <Collapse in={current === "3" && open}>
                    <div style={{ border: "0", paddingLeft: "25px" }}>
                      This text is an example. This text is an example. This
                      text is an example. This text is an example. This text is
                      an example.
                    </div>
                  </Collapse>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading active">
                    <h4 className="panel-title">
                      <div
                        className="accordion-toggle"
                        onKeyDown={this.handleKeyDown}
                        onClick={this.handleCollapse}
                        id={"4"}
                        role="button"
                        tabIndex="0"
                      >
                        What is Picstagraph?
                      </div>
                    </h4>
                  </div>
                  <Collapse in={current === "4" && open}>
                    <div style={{ border: "0", paddingLeft: "25px" }}>
                      This text is an example. This text is an example. This
                      text is an example. This text is an example. This text is
                      an example.
                    </div>
                  </Collapse>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Support;
