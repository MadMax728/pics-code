import React, { Component } from "react";
import { withRouter } from "react-router";
import { logger } from "./index";
import PropTypes from "prop-types";

const withPageViewTracking = WrappedComponent => {
  const component = class extends Component {
    static displayName = `withPageViewTracking(${getDisplayName(
      WrappedComponent
    )})`;

    componentDidMount() {
      const history = this.props.history;
      logger.pageview(`${history.location.pathname}${history.location.search}`);

      this.historyUnlisten = history.listen(location => {
        logger.pageview(`${location.pathname}${location.search}`);
      });
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
  component.propTypes = {
    history: PropTypes.any
  };
  return withRouter(component);
};

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}
export default withPageViewTracking;
