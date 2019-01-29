import React, { Component } from "react";
import { Collapse } from "react-bootstrap";
import * as routes from "../../../lib/constants/routes";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getSearch } from "../../../actions";
class Support extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      open: false,
      current: "1"
    };
  }

  render() {
    const { open, current } = this.state;
    return (
      <div className="padding-rl-10 middle-section width-80">
        <div className="cms-middle-section col-xs-12">
          <div className="panel-wrapper col-xs-12 no-padding">
            <div className="content-wrapper padding-rl-23">
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

  componentDidMount = () => {
    window.scrollTo(0, 0);
  };

  componentWillReceiveProps = nextProps => {
    if (nextProps.searchData.searchKeyword) {
      this.props.getSearch("");
    }
    if (
      nextProps.searchData.searchKeyword !== this.props.searchData.searchKeyword
    ) {
      const searchKeyword = nextProps.searchData.searchKeyword;
      this.props.history.push(routes.ROOT_ROUTE + "?search=" + searchKeyword);
    }
  };

  handleCollapse = e => {
    this.setState({ open: !this.state.open, current: e.target.id });
  };

  handleKeyDown = () => {};
}

const mapStateToProps = state => ({
  searchData: state.searchData
});

const mapDispatchToProps = {
  getSearch
};

Support.propTypes = {
  searchData: PropTypes.any,
  history: PropTypes.any,
  getSearch: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Support);
