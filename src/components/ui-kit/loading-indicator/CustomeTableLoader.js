import React from "react";
import PropTypes from "prop-types";

const CustomeTableLoader = ({ count }) => {
  return (
    <div className="feed_wrapper">
      <div className="feed_footer">
        <table className="table table-striped table-hover table-condensed">
          <thead>
            <tr>
              <th>
                <div className="messages">
                  <span className="count gray_box" />
                </div>
              </th>
              <th>
                <div className="messages">
                  <span className="count gray_box" />
                </div>
              </th>
              <th>
                <div className="messages">
                  <span className="count gray_box" />
                </div>
              </th>
              <th>
                <div className="messages">
                  <span className="count gray_box" />
                </div>
              </th>
              <th>
                <div className="messages">
                  <span className="count gray_box" />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {Array(count)
              .fill()
              .map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <div className="messages">
                        <span className="count gray_box" />
                      </div>
                    </td>
                    <td>
                      <div className="messages">
                        <span className="count gray_box" />
                      </div>
                    </td>
                    <td>
                      <div className="messages">
                        <span className="count gray_box" />
                      </div>
                    </td>
                    <td>
                      <div className="messages">
                        <span className="count gray_box" />
                      </div>
                    </td>
                    <td>
                      <div className="messages">
                        <span className="count gray_box" />
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

CustomeTableLoader.defaultProps = {
  count: 5
};

CustomeTableLoader.propTypes = {
  count: PropTypes.number
};

export default CustomeTableLoader;
