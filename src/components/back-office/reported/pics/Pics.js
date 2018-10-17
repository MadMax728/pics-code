import React from "react";

import * as images from "../../../../lib/constants/images";
import { ReportedSearchBar } from "../../reported-search-bar";

const pics_details = [
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

const Pics = () => {
  return (
    <div className="padding-rl-10 middle-section">
      <ReportedSearchBar />
      {pics_details.map((pic, index) => (
        <div
          className={
            index % 2 ? "col-sm-6 pic-right-block" : "col-sm-6 pic-left-block"
          }
          key={index}
        >
          <div className="backoffice-pics pic-block">
            <img src={pic.user.image} alt="pic_1" />
            <div className="name-wrapper">
              <div className="username">User name</div>
              <div className="name">{pic.user.name}</div>
            </div>
            <div className="status backoffice-status">
              <div className="status-wrapper">
                <div className="title">Date</div>
                <div className="subtitle">{pic.date}</div>
              </div>
              <div className="status-wrapper">
                <div className="title">Reports</div>
                <div className="subtitle">{pic.reports}</div>
              </div>
              <div className="status-wrapper">
                <div className="title">Status</div>
                <div className="subtitle">{pic.status}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Pics;
