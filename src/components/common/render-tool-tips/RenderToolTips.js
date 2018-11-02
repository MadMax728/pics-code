import React, { Component } from "react";
import PropTypes from "prop-types";
import { ToolTip } from "../../ui-kit";

const propTypes = {
  id: PropTypes.any.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      handleEvent: PropTypes.func.isRequired
    }).isRequired
  ).isRequired
};

class RenderToolTips extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { items, id } = this.props;

    return (
      <div className="post-action-links">
        {items.map((item, index) => {
          return (
            <div key={index} onClick={item.handleEvent} id={id}>
              {item.name}
            </div>
          );
        })}
      </div>
    );
  }
}

RenderToolTips.propTypes = propTypes;

export default RenderToolTips;
