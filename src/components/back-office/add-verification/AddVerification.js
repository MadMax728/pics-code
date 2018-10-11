import React, { Component } from "react";
import { Link } from "react-router-dom";

class AddVerification extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="padding-rl-10 middle-section width-80">
        <div className="dashboard-middle-section margin-bottom-50">
          <div className="normal_title padding-15">Add admin</div>
          <div className="title_with_search_dropdown_button">
            <input
              type="search"
              name=""
              id=""
              placeholder="Search in users"
              className="flex2"
            />
            <Link to={""} className="wid30per">
              Add
            </Link>
          </div>
          <div className="dashboard-tbl">
            <table>
              <thead>
                <tr>
                  <th>User name</th>
                  <th>Name</th>
                  <th>Admin status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Bobinho</td>
                  <td>Marc Aurel Bopp</td>
                  <td>
                    <Link to={""}>Remove Verification</Link>
                  </td>
                </tr>
                <tr>
                  <td>Bobinho</td>
                  <td>Marc Aurel Bopp</td>
                  <td>
                    <Link to={""}>Remove Verification</Link>
                  </td>
                </tr>
                <tr>
                  <td>Bobinho</td>
                  <td>Marc Aurel Bopp</td>
                  <td>
                    <Link to={""}>Remove Verification</Link>
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

export default AddVerification;
