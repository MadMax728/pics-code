import React from "react";
import { ReportedSearchBar } from "../reported-search-bar";
import * as images from "../../../../lib/constants/images";

const users_details = [
  {
    user: {
      name: "Santosh Shinde",
      image: `${images.pic_1}`,
      isOwner: true
    },
    date: "10.10.2000",
    reports: "1",
    status: "Processed",
    id: 1
  },
  {
    user: {
      name: "Sagar Vaghela",
      image: `${images.pic_2}`,
      isOwner: false
    },
    date: "10.08.2001",
    reports: "2",
    status: "OutStanding",
    id: 2
  }
];

const Users = () => {
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
            <img src={user.user.image} alt={user.user.image} />
            <div className="name-wrapper">
              <div className="username">User name</div>
              <div className="name">{user.user.name}</div>
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
};

export default Users;
