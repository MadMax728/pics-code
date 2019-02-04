import React, { Component } from "react";
import PropTypes from "prop-types";


class RenderToolTips extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { items, id, isLoading } = this.props;
    return (
      <div className="post-action-links">
        {items.map(item => {
          return (
            <button
              className="btn-comment-tooltip"
              type="button"
              disabled={isLoading}
              key={`${item.name}-${id}`}
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

  handleKeyPress = () => {};
}

const propTypes = {
  id: PropTypes.any.isRequired,
  isLoading: PropTypes.bool,
  items: PropTypes.any.isRequired
};

RenderToolTips.propTypes = propTypes;

export default RenderToolTips;
