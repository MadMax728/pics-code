import React, { Component } from "react";
import PropTypes from "prop-types";

class MessageBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isView: false
    };
  }

  render() {
    const { message } = this.props;
    const { isView } = this.state;

    return (
      <div>
        {isView && (
          <div className="login_pop_up" id="note">
            {message}
          </div>
        )}
      </div>
    );
  }

  componentDidMount = () => {
    // this.timer = setInterval(() =>  this.setState(prevState => ({ isView: !prevState.isView })), 2000);
  };
}

MessageBar.propTypes = {
  message: PropTypes.string.isRequired
};

export default MessageBar;
