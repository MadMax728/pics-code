import React from "react";
import PropTypes from "prop-types";
import { ImageItem, VideoItem, ReadMore } from "../../ui-kit";
import * as enumerations from "../../../lib/constants/enumerations";

const MediaCardBody = ({ item, isDescription }) => {
  return (
    <div className="feed_content">
      <div className="feed_image">
        {item.typeContent &&
          item.typeContent.toLowerCase() === enumerations.mediaTypes.image && (
            <ImageItem item={item.mediaUrl} isOtherCardExist={false} />
          )}
        {item.typeContent &&
          item.typeContent.toLowerCase() === enumerations.mediaTypes.video && (
            <VideoItem id={item.id} item={item.mediaUrl} />
          )}
      </div>
      {item &&
        isDescription &&
        item.description && (
          <div className="feed_description padding-15">
            <span className="secondary_title">
              <ReadMore
                text={item.description}
                min={50}
                ideal={50}
                max={50}
              />
            </span>
          </div>
        )}
    </div>
  );
};

MediaCardBody.propTypes = {
  item: PropTypes.object.isRequired,
  isDescription: PropTypes.bool.isRequired
};

export default MediaCardBody;
