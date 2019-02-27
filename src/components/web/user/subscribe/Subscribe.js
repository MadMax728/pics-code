import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Translations } from "../../../../lib/translations";
import { Button } from "../../../ui-kit";

class Subscribe extends Component {
  handleModalHide = () => {
    this.props.handleModalHide();
    this.props.handleModalInfoHide();
  };

  handleSubscribeAction = () => {
    this.props.handleModalHide();
    this.props.handleModalInfoHide();
  };

  render() {
    return (
      <div className={"col-xs-12 no-padding"}>
        <div className="col-sm-12 margin-bottom-10">
          {Translations.top_bar_info_modal.modal_title}
        </div>
        <div className="subscribe">
          {[].map(user => {
            const profile_route = "";
            return (
              <div className="subscribe_wrapper" key={user.id}>
                <div className="subscribe-user-image">
                  <Link to={profile_route}>
                    <img
                      src={user.profileUrl}
                      alt="campaign"
                      className="img-circle img-responsive"
                    />
                  </Link>
                </div>
                <div className="subscribe-user-name">
                  <Link to={profile_route}>
                    <div className="normal_title">{user.username}</div>
                    <div className="secondary_title">{"user.name"}</div>
                  </Link>
                </div>
                <div className="subscribe-user-name">
                  <Button
                    className="filled_button"
                    id={user.id}
                    onClick={this.handleSubscribeAction}
                    text={Translations.top_bar_info_modal.subscribe_btn}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="col-sm-12">
          <Button
            className="filled_button col-sm-6"
            onClick={this.handleModalHide}
            text={Translations.top_bar_info_modal.cancel}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

Subscribe.propTypes = {
  handleModalHide: PropTypes.func,
  handleModalInfoHide: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Subscribe);
