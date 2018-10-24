import React, { Component } from "react";
import propTypes from "prop-types";

class Social extends Component {
  render() {
    const { socialMedia, id } = this.props;

    return (
      <div>
        {socialMedia ? (
          <div className="change-trash">
            <div
              className="connect-text-green"
              onClick={this.props.handleSocialMediaChange}
              id={id}
              role={"button"}
              tabIndex={"0"}
              onKeyDown={this.props.handleOnKeyDown}
            >
              Change
            </div>
            <div
              className="trash-icon"
              onClick={this.props.handleSocialMediaRemove}
              id={id}
              role={"button"}
              tabIndex={"0"}
              onKeyDown={this.props.handleOnKeyDown}
            >
              <i className="fa fa-trash" />
            </div>
          </div>
        ) : (
          <div
            className="connect-text-red"
            onClick={this.props.handleSocialMediaConnect}
            id={id}
            role={"button"}
            tabIndex={"0"}
            onKeyDown={this.props.handleOnKeyDown}
          >
            Connet
          </div>
        )}
      </div>
    );
  }
}

Social.propTypes = {
  socialMedia: propTypes.bool.isRequired,
  id: propTypes.string.isRequired,
  handleSocialMediaChange: propTypes.func.isRequired,
  handleSocialMediaRemove: propTypes.func.isRequired,
  handleSocialMediaConnect: propTypes.func.isRequired,
  handleOnKeyDown: propTypes.func.isRequired
};

export default Social;
