import React from "react";
import PropTypes from "prop-types";
import * as images from "../../../lib/constants/images";

const NoDataFoundRightSidebar = ( {
    image
}) => {
    return (
        <div className="feed_wrapper" >
            <div className="datanotfound-wrapper" >
                <img src={image} alt="no_data_image" className="img-responsive"/>
            </div>
        </div>
    );
}

NoDataFoundRightSidebar.propTypes = {
    image: PropTypes.string
};


NoDataFoundRightSidebar.defaultProps = {
    image: `${images.no_community_pic}`
};

export default NoDataFoundRightSidebar;
