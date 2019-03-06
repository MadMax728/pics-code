import React from "react";
import CMSContent from "../common/CMSContent";
import PropTypes from "prop-types";
import { Translations } from "../../../lib/translations";

const CommunityGuidelines = ({ history }) => {
  return (
    <CMSContent
      title={Translations.information_menu.community_guidelines}
      history={history}
    />
  );
};

CommunityGuidelines.propTypes = {
  history: PropTypes.any
};

export default CommunityGuidelines;
