import React, { Component } from "react";
import PropTypes from "prop-types";
import { deactivateAccount } from "../../../../actions/privacy";
import { connect } from "react-redux";
import { Translations } from "../../../../lib/translations";
import { Button } from "../../../ui-kit";

class ActionConfirmation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleModalHides = () => {
    this.props.handleModalHide();
    this.props.handleConfirmation(true);
  };

  handleModalAction = () => {
    this.props.handleModalHide();
    this.props.handleConfirmation(false);
  };

  render() {
    return (
      <div className={"col-xs-12 no-padding"}>
        <div className="col-sm-12 margin-bottom-10">{Translations.sure}</div>
        <div className="col-sm-12">
          <div className="row">
            <div className="col-md-6">
              <Button
                className="filled_button col-sm-6"
                onClick={this.handleModalHides}
                text={Translations.modal_header.cancel}
              />
            </div>
            <div className="col-md-6">
              <Button
                className="filled_button col-sm-6"
                onClick={this.handleModalAction}
                text={Translations.upload_modal.yes}
              />
            </div>
          </div>
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
