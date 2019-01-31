import React from "react";
import PropTypes from "prop-types";
import { ImageItem, VideoItem, ReadMore } from "../../ui-kit";
import * as enumerations from "../../../lib/constants/enumerations";
import InformationCard from "../InformationCard";

const CampaignCardBody = ({
  campaign,
  isDescription,
  isInformation,
  isLoading
}) => {
  return (
    <div className="feed_content">
      {(!campaign.typeContent ||
        (campaign.typeContent &&
          campaign.typeContent.toLowerCase() ===
            enumerations.mediaTypes.image)) && (
        <ImageItem
          item={campaign.mediaUrl}
          userName={campaign.userName}
          isOtherCardExist={!isDescription && isInformation}
          isLoading={isLoading}
        />
      )}
      {campaign && isDescription && campaign.description && (
        <div className="feed_description news-feed-data padding-15">
          <span className="secondary_title">
            <ReadMore
              text={campaign.description}
              min={50}
              ideal={50}
              max={50}
            />
          </span>
        </div>
      )}
      {campaign && isInformation && (
        <InformationCard item={campaign} type={`campaign`} />
      )}
    </div>
  );
};

CampaignCardBody.propTypes = {
  campaign: PropTypes.object.isRequired,
  isDescription: PropTypes.bool.isRequired,
  isInformation: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default CampaignCardBody;
