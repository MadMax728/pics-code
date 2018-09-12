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
          <Tab eventKey={1} title="Notifications" className={``}>
            <NotificationsList />
          </Tab>
          {/* for Like you tab */}
          <Tab eventKey={2} title="Like you" className={``}>
            <LikeYou />
          </Tab>
          {/* for Requests tab */}
          <Tab eventKey={3} title="Requests" className={``}>
            <Requests />
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default Notifications;
