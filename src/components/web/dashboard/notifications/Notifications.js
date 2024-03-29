import React, { Component } from "react";
import Tabs from "react-bootstrap/lib/Tabs";
import Tab from "react-bootstrap/lib/Tab";
import { Requests, NotificationsList } from "./notification";
import { Translations } from "../../../../lib/translations";
import PropTypes from "prop-types";

class Notifications extends Component {
  render() {
    const { history, handleToggle } = this.props;
    return (
      <div className="notification-mega-wrapper">
        {" "}
        {/* you can change the className name if you want */}
        <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
          {/* for Notification Tab */}
          <Tab
            tabClassName="tab-header"
            eventKey={1}
            title={
              <p className="tab-title">
                {Translations.notification.notification}
              </p>
            }
          >
            <NotificationsList history={history} handleToggle={handleToggle} />
          </Tab>
          {/* for Requests tab */}
          {/* <Tab
            tabClassName="tab-header"
            eventKey={3}
            title={
              <p className="tab-title">{Translations.notification.request}</p>
            }
          >
            <Requests />
          </Tab> */}
        </Tabs>
      </div>
    );
  }
}

Notifications.propTypes = {
  history: PropTypes.any,
  handleToggle: PropTypes.any
};

export default Notifications;
