import React from "react";
import { Modal } from "react-bootstrap";
import PropTypes from "prop-types";
import * as images from "../../../lib/constants/images";

const propTypes = {
  modalShow: PropTypes.bool,
  modalHeaderContent: PropTypes.element,
  modalBodyContent: PropTypes.element.isRequired,
  modalFooterContent: PropTypes.element,
  handleModalHide: PropTypes.func.isRequired,
  header: PropTypes.bool.isRequired,
  footer: PropTypes.bool.isRequired,
  closeBtn: PropTypes.bool.isRequired
};

const CustomBootstrapModal = ({
  modalShow,
  modalHeaderContent,
  modalBodyContent,
  modalFooterContent,
  handleModalHide,
  header,
  footer,
  closeBtn
}) => {
  return (
    <div className="custom-modal">
      <Modal
        show={modalShow}
        onHide={handleModalHide}
        className="modal fade messages-modal"
      >
        {closeBtn && (
          <button onClick={handleModalHide} className={"closeBtn"}>
            <img
              src={images.cross}
              alt={"cross"}
              style={{ height: "10px", width: "10px" }}
            />
          </button>
        )}
        {header && (
          <Modal.Header>
            {modalHeaderContent && modalHeaderContent}
          </Modal.Header>
        )}
        <Modal.Body>{modalBodyContent && modalBodyContent}</Modal.Body>
        {footer && (
          <Modal.Footer>
            {modalFooterContent && modalFooterContent}
          </Modal.Footer>
        )}
      </Modal>
    </div>
  );
};

CustomBootstrapModal.propTypes = propTypes;

export default CustomBootstrapModal;
