import React from "react";
import { Modal } from "react-bootstrap";
import PropTypes from "prop-types";
import * as images from "../../../lib/constants/images";

const propTypes = {};

const ImageCropper = ({}) => {
  return (
    <div className="custom-modal">
      <Modal
        show={modalShow}
        onHide={handleModalHide}
        className={modalClassName}
      >
        {closeBtn && (
          <button onClick={handleModalHide} className={"closeBtn"}>
            <img
              src={images.white_close}
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

ImageCropper.propTypes = propTypes;

export default ImageCropper;
