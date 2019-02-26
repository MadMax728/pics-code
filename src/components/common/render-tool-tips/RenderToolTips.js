import React from "react";
import PropTypes from "prop-types";
import { Button } from "../../ui-kit";

const RenderToolTips = ({ items, id, isLoading }) => {
  return (
    <div className="post-action-links">
      {items &&
        items.map(item => {
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
};

const propTypes = {
  id: PropTypes.any.isRequired,
  isLoading: PropTypes.bool,
  items: PropTypes.any.isRequired
};

RenderToolTips.propTypes = propTypes;

export default RenderToolTips;
