import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button } from "../../ui-kit";


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
              <Button
                className="btn-comment-tooltip"
                type="button"
                disabled={isLoading}
                onClick={item.handleEvent}
                id={id}
                text={item.name}
                key={`${item.name}-${id}`}
              />
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
