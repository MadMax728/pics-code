import React from "react";
import { Modal } from "react-bootstrap";
import PropTypes from "prop-types";
import * as images from "../../../lib/constants/images";
import { Button } from "../../ui-kit";

const propTypes = {
  modalShow: PropTypes.bool,
  modalHeaderContent: PropTypes.element,
  modalBodyContent: PropTypes.element.isRequired,
  modalFooterContent: PropTypes.element,
  handleModalHide: PropTypes.func.isRequired,
  header: PropTypes.bool.isRequired,
  footer: PropTypes.bool.isRequired,
  closeBtn: PropTypes.bool.isRequired,
  modalClassName: PropTypes.string.isRequired
};

const InfoBootstrapModal = ({
  modalShow,
  modalHeaderContent,
  modalBodyContent,
  modalFooterContent,
  handleModalHide,
  header,
  footer,
  closeBtn,
  modalClassName
}) => {
  return (
    <div className="custom-modal">
      <Modal
        show={modalShow}
        onHide={handleModalHide}
        backdrop={false}
        className={modalClassName}
      >
        {closeBtn && (
          <Button
            onClick={handleModalHide}
            className={"closeBtn"}
            text={
              <img
                src={images.cross}
                alt={"cross"}
                style={{ height: "10px", width: "10px" }}
              />
            }
          />
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

InfoBootstrapModal.propTypes = propTypes;

export default InfoBootstrapModal;
