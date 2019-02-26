import React from "react";
import PropTypes from "prop-types";
import { ImageItem, VideoItem, ReadMore } from "../../ui-kit";
import * as enumerations from "../../../lib/constants/enumerations";
import InformationCard from "../InformationCard";

const AdCardBody = ({ ad, isDescription, isInformation, isLoading }) => {
  return (
    <div className="feed_content">
      <div className="feed_image">
        {ad.typeContent &&
          ad.typeContent.toLowerCase() === enumerations.mediaTypes.video && (
            <VideoItem id={ad.id} item={ad.mediaUrl} isLoading={isLoading} />
          )}
        {(!ad.typeContent ||
          (ad.typeContent &&
            ad.typeContent.toLowerCase() ===
              enumerations.mediaTypes.image)) && (
          <ImageItem
            item={ad.mediaUrl}
            userName={ad.userName}
            classNames={`embed-responsive embed-responsive-16by9`}
            isOtherCardExist={!isDescription && isInformation}
            isLoading={isLoading}
          />
        )}
        <a
          href={ad.insertLink}
          target="_blank"
          className="more-strip zIndex0"
          rel="noopener noreferrer"
        >
          {ad.callToAction ? ad.callToAction : "Ad"}
        </a>
      </div>
      {ad && isDescription && ad.description && (
        <div className="feed_description news-feed-data padding-10">
          <span className="secondary_title">
            <ReadMore text={ad.description} min={50} ideal={50} max={50} />
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
  isInformation: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default AdCardBody;
