import React, { Component } from "react";
import { ReportedSearchBar } from "../../reported-search-bar";
import { users_list } from "../../../../mock-data";
class Users extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      users_details: users_list
    };
  }

  render() {
    const { users_details } = this.state;
    return (
      <div className="padding-rl-10 middle-section">
        <ReportedSearchBar />
        {users_details.map((user, index) => (
          <div
            className={
              index % 2 ? "col-sm-6 pic-right-block" : "col-sm-6 pic-left-block"
            }
            key={index}
          >
            <div className="backoffice-user pic-block">
              <img src={user.image} alt={user.image} />
              <div className="name-wrapper">
                <div className="username">User name</div>
                <div className="name">{user.name}</div>
                <button className="filled_button">Subscribe</button>
              </div>
              <div className="status backoffice-status">
                <div className="status-wrapper">
                  <div className="title">Date</div>
                  <div className="subtitle">{user.date}</div>
                </div>
                <div className="status-wrapper">
                  <div className="title">Reports</div>
                  <div className="subtitle">{user.reports}</div>
                </div>
                <div className="status-wrapper">
                  <div className="title">Status</div>
                  <div className="subtitle">{user.status}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Users;
