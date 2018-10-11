import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as routes from "../../../lib/constants/routes";

class CMSManagement extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="padding-rl-10 middle-section width-80">
        <div className="dashboard-middle-section margin-bottom-50">
          <div className="title_with_dropdown">
            <span>CMS management</span>
            <Link to={routes.BACK_OFFICE_CREATE_CMS_ROUTE}>
              <button className="expandDrop">
                <i className="glyphicon glyphicon-plus-sign" />
              </button>{" "}
            </Link>
            <select>
              <option>Language </option>
              <option>Option 1 </option>
              <option>Option 2 </option>
            </select>
          </div>
          <div className="dashboard-tbl">
            <table>
              <thead>
                <tr>
                  <th>Title of page</th>
                  <th>Language</th>
                  <th>Most recent change</th>
                  <th>Created by</th>
                  <th>Options</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Test</td>
                  <td>Test</td>
                  <td>Test</td>
                  <td>Test</td>
                  <td>
                    <Link to={""}>Edit</Link>
                    <Link to={""}>Preview</Link>
                  </td>
                  <td>
                    <span className="green-circle" />
                    Active
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default CMSManagement;
