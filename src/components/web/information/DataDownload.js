import React from "react";
import CMSContent from "../common/CMSContent";
import PropTypes from "prop-types";
import { Translations } from "../../../lib/translations";

const DataDownload = ({ history }) => {
  return (
    <CMSContent title={Translations.cms_menu.data_download} history={history} />
  );
};

DataDownload.propTypes = {
  history: PropTypes.any
};

export default DataDownload;
