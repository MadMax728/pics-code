import React from "react";
import propTypes from "prop-types";
import { ImageItem, VideoItem } from "../../../ui-kit";
import * as enumerations from "../../../../lib/constants/enumerations";

const MediaCardBody = ({ item }) => {
  return (
    <div className="feed_content">
      <div className="feed_image">
        {item.typeContent &&
          item.typeContent.toLowerCase() === enumerations.mediaTypes.image && (
            <ImageItem item={item.mediaUrl} isOtherCardExist={false} />
          )}
        {item.typeContent &&
          item.typeContent.toLowerCase() === enumerations.mediaTypes.video && (
            <VideoItem item={item.mediaUrl} />
          )}
      </div>
    </div>
  );
};

MediaCardBody.propTypes = {
  item: propTypes.object.isRequired
};

export default MediaCardBody;
