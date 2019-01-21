import React from "react";
import PropTypes from "prop-types";

const NoDataFoundCenterPage = ({handleRefresh}) => {
    return (
        <div className="feed_wrapper">
            <div className="datanotfound-wrapper" >
                <div className="notfound-body">
                    <div className="notfound-title col-sm-8 col-xs-8">
                        <p>No Data Found</p>
                    </div>
                    <div className="notfound-btn-wrapper col-sm-2 col-xs-2">
                        <button className="data-btns" id="1" ><i className="fa fa-plus-square" aria-hidden="true"></i></button>
                    </div>
                    <div className="notfound-btn-wrapper col-sm-2 col-xs-2">
                        <button className="data-btns" id="2" onClick={handleRefresh} onKeyDown={handleRefresh} ><i className="fa fa-refresh" aria-hidden="true"></i></button>
                    </div>
                </div>
                <div className="notfound-footer">
                    <div className="col-md-12"><span>Do Post</span>on Picstagraph</div>
                </div>
            </div>
        </div>
    );
}

NoDataFoundCenterPage.propTypes = {
    handleRefresh: PropTypes.func
};

export default NoDataFoundCenterPage;
