import React, { Component } from "react";
import PropTypes from "prop-types";
import { ToolTip } from "../../ui-kit";

const propTypes = {
  id: PropTypes.any.isRequired,
  isLoading: PropTypes.bool,
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

  handleKeyPress = () => {};

  render() {
    const { items, id, isLoading } = this.props;
    return (
      <div className="post-action-links">
        {items.map((item, index) => {
          return (
            <button
              className="btn-comment-tooltip"
              type="button"
              disabled={isLoading}
              key={index}
              onClick={item.handleEvent}
              id={id}
              onKeyDown={item.handleEvent}
            >
              {item.name}
            </button>
          );
        })}
      </div>
    );
  }
}

RenderToolTips.propTypes = propTypes;

export default RenderToolTips;
