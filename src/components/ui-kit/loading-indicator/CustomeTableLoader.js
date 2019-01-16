import React from "react";
import * as images from "../../../lib/constants/images";
import PropTypes from "prop-types";

const CustomeTableLoader = ({ count }) => {
    return Array(count).fill().map((item, index) => {
        return (
            <div className="feed_wrapper" key={index}>
                <div className="feed_footer">
                    <table className="table table-striped table-hover table-condensed">
                        <thead>
                            <th><div className="messages"><span className="count gray_box"></span></div></th>
                            <th><div className="messages"><span className="count gray_box"></span></div></th>
                            <th><div className="messages"><span className="count gray_box"></span></div></th>
                            <th><div className="messages"><span className="count gray_box"></span></div></th>
                            <th><div className="messages"><span className="count gray_box"></span></div></th>
                        </thead>
                        <tbody>
                            <tr>
                                <td><div className="messages"><span className="count gray_box"></span></div></td>
                                <td><div className="messages"><span className="count gray_box"></span></div></td>
                                <td><div className="messages"><span className="count gray_box"></span></div></td>
                                <td><div className="messages"><span className="count gray_box"></span></div></td>
                                <td><div className="messages"><span className="count gray_box"></span></div></td>
                            </tr>
                            <tr>
                                <td><div className="messages"><span className="count gray_box"></span></div></td>
                                <td><div className="messages"><span className="count gray_box"></span></div></td>
                                <td><div className="messages"><span className="count gray_box"></span></div></td>
                                <td><div className="messages"><span className="count gray_box"></span></div></td>
                                <td><div className="messages"><span className="count gray_box"></span></div></td>
                            </tr>
                            <tr>
                                <td><div className="messages"><span className="count gray_box"></span></div></td>
                                <td><div className="messages"><span className="count gray_box"></span></div></td>
                                <td><div className="messages"><span className="count gray_box"></span></div></td>
                                <td><div className="messages"><span className="count gray_box"></span></div></td>
                                <td><div className="messages"><span className="count gray_box"></span></div></td>
                            </tr>
                            <tr>
                                <td><div className="messages"><span className="count gray_box"></span></div></td>
                                <td><div className="messages"><span className="count gray_box"></span></div></td>
                                <td><div className="messages"><span className="count gray_box"></span></div></td>
                                <td><div className="messages"><span className="count gray_box"></span></div></td>
                                <td><div className="messages"><span className="count gray_box"></span></div></td>
                            </tr>
                            <tr>
                                <td><div className="messages"><span className="count gray_box"></span></div></td>
                                <td><div className="messages"><span className="count gray_box"></span></div></td>
                                <td><div className="messages"><span className="count gray_box"></span></div></td>
                                <td><div className="messages"><span className="count gray_box"></span></div></td>
                                <td><div className="messages"><span className="count gray_box"></span></div></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    });
}

CustomeTableLoader.defaultProps = {
    count: 1
};

CustomeTableLoader.propTypes = {
    count: PropTypes.number
}

export default CustomeTableLoader;
