import React, { Component } from "react";
import Tabs from "react-bootstrap/lib/Tabs";
import Tab from "react-bootstrap/lib/Tab";
import { LikeYou } from "./like-you";
import { Requests } from "./requests";
import { NotificationsList } from "./notifications-list";

class Notifications extends Component {
  render() {
    return (
      <div className="notification-mega-wrapper">
        {" "}
        {/* you can change the className name if you want */}
        <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
          {/* for Notification Tab */}
          <Tab
            tabClassName="tab-header"
            eventKey={1}
            title={<p className="tab-title">{`Notifications`}</p>}
          >
            <NotificationsList />
          </Tab>
          {/* for Like you tab */}
          <Tab
            tabClassName="tab-header"
            eventKey={2}
            title={<p className="tab-title">{`Like you`}</p>}
          >
            <LikeYou />
          </Tab>
          {/* for Requests tab */}
          <Tab
            tabClassName="tab-header"
            eventKey={3}
            title={<p className="tab-title">{`Requests`}</p>}
          >
            <Requests />
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default Notifications;
