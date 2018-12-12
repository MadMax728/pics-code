import React, { Component } from "react";
import { CustomBootstrapModal } from "../../../ui-kit";
import PropTypes from "prop-types";
import { Share } from "../../user";

class ShareModal extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    const { handleModalInfoHide, modalInfoShow } = this.props;
    return (
      <CustomBootstrapModal
        modalClassName={"modal fade share-popup"}
        header={false}
        footer={false}
        modalShow={modalInfoShow}
        closeBtn={false}
        handleModalHide={handleModalInfoHide}
        modalBodyContent={<Share handleModalInfoHide={handleModalInfoHide} />}
      />
      // <ul className="share-side-popup">
      //   <li className="share-side-popup-item">
      //     <Link to={routes.SETTINGS_EDIT_PROFILE_ROUTE}>
      //       <span className="fa fa-facebook"></span>
      //      </Link>
      //   </li>
      //   <li className="share-side-popup-item">
      //     <Link to={routes.SETTINGS_EDIT_PROFILE_ROUTE}>
      //       <span className="fa fa-instagram"></span>
      //      </Link>
      //   </li>
      //   <li className="share-side-popup-item">
      //     <Link to={routes.SETTINGS_EDIT_PROFILE_ROUTE}>
      //       <span className="fa fa-youtube"></span>
      //      </Link>
      //   </li>
      //   <li className="share-side-popup-item">
      //     <Link to={routes.SETTINGS_EDIT_PROFILE_ROUTE}>
      //       <span className="fa fa-twitter"></span>
      //      </Link>
      //   </li>
      // </ul>
    );
  }
}

ShareModal.propTypes = {
  handleModalInfoHide: PropTypes.func,
  modalInfoShow: PropTypes.bool
};

export default ShareModal;
