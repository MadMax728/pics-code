import React from "react";
import CMSContent from "../common/CMSContent";
import PropTypes from "prop-types";

const DataDownload = ({ history }) => {
  return <CMSContent title={'Data Download'} history={history}/>
}

DataDownload.propTypes = {
  history: PropTypes.any,
};

export default DataDownload;