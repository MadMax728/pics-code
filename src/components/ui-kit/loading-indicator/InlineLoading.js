import React from "react";
import PropTypes from "prop-types";
import { Translations } from "../../translations";

class InlineLoading extends React.Component {
  static propTypes = {
    message: PropTypes.string
  };

  static defaultProps = {
    message: Translations.loading_messages.loading_with_ellipsis
  };

  state = {
    isVisible: false
  };

  delayShowing = () => {
    this.timeout = setTimeout(() => {
      this.setState({ isVisible: true });
    }, 250);
  };

  componentDidMount() {
    this.delayShowing();
  }

  componentWillUnmount() {
    if (this.timeout) {
      clearInterval(this.timeout);
    }
  }

  render() {
    const { message } = this.props;
    const { isVisible } = this.state;

    return (
      isVisible && (
        <span>
          {message}
          <i className="fa fa-spinner fa-pulse" />
        </span>
      )
    );
  }
}

export default InlineLoading;
