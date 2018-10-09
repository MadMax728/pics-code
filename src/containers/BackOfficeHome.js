import React, { Component } from "react";

import {
  LeftSideBarBackOffice,
  BackOfficeHomeRoute
} from "../components/common";

class BackOfficeHome extends Component {
  render() {
    return (
      <div>
        <section>
          <div className="container">
            <div className="row">
              <div className="left_menu_second no-padding">
                <LeftSideBarBackOffice getFilter={this.getFilter} />
              </div>

              <div>
                <BackOfficeHomeRoute
                  handleModalInfoShow={this.handleModalInfoShow}
                />
              </div>

              <div className="right_bar no-padding" />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default BackOfficeHome;
