import React from "react";
import propTypes from "prop-types";
import { ImageItem, VideoItem, ReadMore } from "../../../ui-kit";
import * as enumerations from "../../../../lib/constants/enumerations";
import InformationCard from "../InformationCard";

const CampaignCardBody = ({ campaign, isDescription, isInformation }) => {
  return (
    <div className="feed_content">
      {campaign.typeContent &&
        campaign.typeContent.toLowerCase() ===
          enumerations.mediaTypes.video && (
          <VideoItem item={campaign.mediaUrl} />
        )}
      {(!campaign.typeContent ||
        (campaign.typeContent &&
          campaign.typeContent.toLowerCase() ===
            enumerations.mediaTypes.image)) && (
        <ImageItem
          item={campaign.mediaUrl}
          isOtherCardExist={!isDescription && isInformation}
        />
      )}
      {campaign &&
        isDescription &&
        campaign.description && (
          <div className="feed_description padding-15">
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
      {campaign && isInformation && <InformationCard item={campaign} />}
    </div>
  );
};

CampaignCardBody.propTypes = {
  campaign: propTypes.object.isRequired,
  isDescription: propTypes.bool.isRequired,
  isInformation: propTypes.bool.isRequired
};

export default CampaignCardBody;
