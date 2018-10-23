import React from "react";
import PropTypes from "prop-types";
import { Translations } from "../../../lib/translations";

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
          <section className="loader-wrapr">
            <div className="loader loader-14">
              <svg
                className="loader-star star-small"
                version="1.1"
                x="0px"
                y="0px"
                width="23.172px"
                height="23.346px"
                viewBox="0 0 23.172 23.346"
              >
                <ellipse
                  className="ground"
                  cx="11"
                  cy="11"
                  rx="10"
                  ry="10"
                  fill="#029bd7"
                />
              </svg>
              <svg
                className="loader-star star-big"
                version="1.1"
                x="0px"
                y="0px"
                width="23.172px"
                height="23.346px"
                viewBox="0 0 23.172 23.346"
              >
                <ellipse
                  className="ground"
                  cx="11"
                  cy="11"
                  rx="10"
                  ry="10"
                  fill="#1f58a6"
                />
              </svg>
            </div>
          </section>
        </span>
      )
    );
  }
}

export default InlineLoading;
