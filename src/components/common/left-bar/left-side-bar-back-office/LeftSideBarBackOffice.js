import React, { Component } from "react";
import { Route } from "react-router-dom";
import * as routes from "../../../../lib/constants/routes";

import propTypes from "prop-types";
import { SideBarSettingBackOffice } from "../../menu";

class LeftSideBarBackOffice extends Component {
  render() {
    return (
      <div>
        <Route
          path={routes.BACK_OFFICE_ROOT_ROUTE}
          exact
          component={SideBarSettingBackOffice}
        />
      </div>
    );
  }
}

LeftSideBarBackOffice.propTypes = {
  getFilter: propTypes.func
};

export default LeftSideBarBackOffice;
