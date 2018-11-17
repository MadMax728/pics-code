import React from "react";
import propTypes from "prop-types";
import { VideoItem } from "../../../ui-kit";
import * as enumerations from "../../../../lib/constants/enumerations";

const VideoCardBody = ({ video }) => {
  return (
    <div className="feed_content">
      <div className="feed_image">
        {video.mediaType &&
          video.mediaType === enumerations.mediaTypes.video && (
            <VideoItem item={video.video} />
          )}
      </div>
    </div>
  );
};

VideoCardBody.propTypes = {
  video: propTypes.object.isRequired
};

export default VideoCardBody;
