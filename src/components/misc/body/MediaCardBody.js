import React from "react";
import PropTypes from "prop-types";
import { ImageItem, VideoItem, ReadMore } from "../../ui-kit";
import * as enumerations from "../../../lib/constants/enumerations";

const MediaCardBody = ({ item, isDescription, isLoading }) => {
  return (
    <div className="feed_content">
      <div className="feed_image">
        {item.typeContent &&
          item.typeContent.toLowerCase() === enumerations.mediaTypes.image && (
            <ImageItem
              item={item.mediaUrl}
              classNames={`img-responsive widthHeightAuto`}
              userName={item.userName}
              isOtherCardExist={false}
              isLoading={isLoading}
            />
          )}
        {item.typeContent &&
          item.typeContent.toLowerCase() === enumerations.mediaTypes.video && (
            <VideoItem
              id={item.id}
              item={item.mediaUrl}
              isLoading={isLoading}
            />
          )}
      </div>
      {item && isDescription && item.description && (
        <div className="feed_description news-feed-data padding-15">
          <span className="secondary_title">
            <ReadMore text={item.description} min={50} ideal={50} max={50} />
          </span>
        </div>
      )}
    </div>
  );
};

MediaCardBody.propTypes = {
  item: PropTypes.object.isRequired,
  isDescription: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default MediaCardBody;
