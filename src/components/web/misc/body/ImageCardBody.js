import React from "react";
import propTypes from "prop-types";
import { ImageItem } from "../../../ui-kit";
import * as enumerations from "../../../../lib/constants/enumerations";

const ImageCardBody = ({ image }) => {
  return (
    <div className="feed_content">
      <div className="feed_image">
        {(!image.mediaType ||
          (image.mediaType &&
            image.mediaType === enumerations.mediaTypes.image)) && (
          <ImageItem item={image.image} isOtherCardExist={false} />
        )}
      </div>
    </div>
  );
};

ImageCardBody.propTypes = {
  image: propTypes.object.isRequired
};

export default ImageCardBody;
