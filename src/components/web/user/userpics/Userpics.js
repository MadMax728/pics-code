import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Userpics extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleModalHides = () => {
    this.props.handleModalHide();
  };

  render() {
    const { picsData } = this.props;
    console.log(picsData);
    return (
      <div className={"col-xs-12 no-padding"}>
        <div className="col-sm-12 margin-bottom-10">User Pics</div>
        <div className="col-sm-12">
          <div className="row">
            <div className="col-md-6">
              <button
                className="filled_button col-sm-6"
                onClick={this.handleModalHides}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

Userpics.propTypes = {
  handleModalHide: PropTypes.func,
  picsData: PropTypes.any
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Userpics);
