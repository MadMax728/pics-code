import React, { Component } from "react";
import PropTypes from "prop-types";
import { ToolTip } from "../../ui-kit";


class ThreeDots extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      id,
      role,
      dataTip,
      dataClass,
      getContent,
      effect,
      delayHide,
      delayShow,
      delayUpdate,
      place,
      border,
      type
    } = this.props;

    return (
      <div>
        <div
          data-for={id}
          role={role}
          data-tip={dataTip}
          data-class={dataClass}
        >
          • • •
        </div>
        <ToolTip
          id={id}
          getContent={getContent}
          effect={effect}
          delayHide={delayHide}
          delayShow={delayShow}
          delayUpdate={delayUpdate}
          place={place}
          border={border}
          type={type}
        />
      </div>
    );
  }
}

const propTypes = {
  id: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  dataTip: PropTypes.string.isRequired,
  dataClass: PropTypes.string.isRequired,
  getContent: PropTypes.any.isRequired,
  effect: PropTypes.string.isRequired,
  delayHide: PropTypes.number.isRequired,
  delayShow: PropTypes.number.isRequired,
  delayUpdate: PropTypes.number.isRequired,
  place: PropTypes.string.isRequired,
  border: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired
};

ThreeDots.propTypes = propTypes;

export default ThreeDots;
