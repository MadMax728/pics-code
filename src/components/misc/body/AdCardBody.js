import React from "react";
import PropTypes from "prop-types";
import { ImageItem, VideoItem, ReadMore } from "../../ui-kit";
import * as enumerations from "../../../lib/constants/enumerations";
import InformationCard from "../InformationCard";

const AdCardBody = ({ ad, isDescription, isInformation }) => {
  return (
    <div className="feed_content">
      <div className="feed_image">
        {ad.mediaType &&
          ad.mediaType === enumerations.mediaTypes.video && (
            <VideoItem id={ad.id} item={ad.video} />
          )}
        {(!ad.mediaType ||
          (ad.mediaType && ad.mediaType === enumerations.mediaTypes.image)) && (
          <ImageItem
            item={ad.image}
            isOtherCardExist={!isDescription && isInformation}
          />
        )}
        <a
          href={ad.insert_link}
          target="_blank"
          className="more-strip zIndex0"
          rel="noopener noreferrer"
        >
          More
        </a>
      </div>
      {ad &&
        isDescription &&
        ad.desc && (
          <div className="feed_description padding-10">
            <div className="normal_title">{ad.title}</div>
            <span className="secondary_title">
              <ReadMore text={ad.desc} min={50} ideal={50} max={50} />
            </span>
          </div>
        )}
      {ad && isInformation && <InformationCard item={ad} />}
    </div>
  );
};

AdCardBody.propTypes = {
  ad: PropTypes.object.isRequired,
  isDescription: PropTypes.bool.isRequired,
  isInformation: PropTypes.bool.isRequired
};

export default AdCardBody;
