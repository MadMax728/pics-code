import React, { Component } from "react";
import PropTypes from "prop-types";
import { deactivateAccount } from "../../../../actions/privacy";
import { connect } from "react-redux";

class ActionConfirmation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleModalHides = () => {
    this.props.handleModalHide();
    this.props.handleModalInfoHide();
    this.props.handleConfirmation(true);
  };

  handleModalAction = () => {
    this.props.handleModalHide();
    this.props.handleModalInfoHide();
    this.props.handleConfirmation(false);
  };

  render() {
    return (
      <div className={"col-xs-12 no-padding"}>
        <div className="col-sm-12 margin-bottom-10">Are you want to sure ?</div>
        <div className="col-sm-12">
          <button
            className="filled_button col-sm-6"
            onClick={this.handleModalHides}
          >
            Cancel
          </button>
          <button
            className="filled_button col-sm-6"
            onClick={this.handleModalAction}
          >
            Yes
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profilePrivacyData: state.profilePrivacyData
});

const mapDispatchToProps = {
  deactivateAccount
};

ActionConfirmation.propTypes = {
  deactivateAccount: PropTypes.func,
  handleModalHide: PropTypes.func,
  handleModalInfoHide: PropTypes.func,
  profilePrivacyData: PropTypes.any,
  handleConfirmation: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActionConfirmation);
