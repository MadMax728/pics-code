import React, { Component } from "react";
import ReportedSearchBar from "../ReportedSearchBar";
import { pics_list } from "../../../../mock-data";

class PicsPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      pics_details: pics_list
    };
  }

  render() {
    const { pics_details } = this.state;

    return (
      <div className="padding-rl-10 middle-section">
        <ReportedSearchBar />
        {pics_details.map((pic, index) => (
          <div
            className={
              index % 2 ? "col-sm-6 pic-right-block" : "col-sm-6 pic-left-block"
            }
            key={pic.id}
          >
            <div className="backoffice-pics pic-block">
              <img src={pic.image} alt="pic_1" />
              <div className="name-wrapper">
                <div className="username">User name</div>
                <div className="name">
                  {pic.name}
                  {index}{" "}
                </div>
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
  }
}

export default PicsPage;
