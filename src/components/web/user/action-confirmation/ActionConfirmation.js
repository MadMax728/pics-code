import React, { Component } from "react";
import PropTypes from "prop-types";
import { deleteSearchHistory } from "../../../../actions/privacy";
import { connect } from "react-redux";

class ActionConfirmation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleModalHides = () => {
    this.props.handleModalHide();
    this.props.handleModalInfoHide();
  };

  handleModalAction = () => {
    const historyId = "123";
    const paramData = { searchHistoryId: historyId };
    // this.props.deleteSearchHistory(paramData);
  };

  render() {
    const { modalInfoMsg } = this.props;
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
            {" "}
            Yes
          </button>
        </div>
      </div>
    );
  }
}

// const mapDispatchToProps = {
//   deleteSearchHistory
// };

ActionConfirmation.propTypes = {
  handleModalInfoHide: PropTypes.func,
  handleModalHide: PropTypes.func,
  modalInfoMsg: PropTypes.string,
  deleteSearchHistory: PropTypes.func
};

export default connect()(ActionConfirmation);
