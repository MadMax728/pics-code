import React from "react";
import PropTypes from "prop-types";
import * as images from "../../../lib/constants/images";
const NoDataFoundCenterPage = ({ handleRefresh }) => {
    return (
        <div className="feed_wrapper">
            <div className="datanotfound-wrapper" >
                <div className="notfound-footer">
                    <div className="col-md-12 text-center">
                        <img src={images.no_data_pic} width="100%" className="no-data-css" alt="no_data_image"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

NoDataFoundCenterPage.propTypes = {
    handleRefresh: PropTypes.func
};

export default NoDataFoundCenterPage;
