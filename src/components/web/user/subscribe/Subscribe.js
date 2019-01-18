import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { users_list } from "../../../../mock-data/users-list";
import { Translations } from "../../../../lib/translations";

class Subscribe extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log(users_list);
  }

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
          {users_list.map(user => {
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
                  <button
                    className="filled_button"
                    id={user.id}
                    onClick={this.handleSubscribeAction}
                  >
                    {Translations.top_bar_info_modal.subscribe_btn}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="col-sm-12">
          <button
            className="filled_button col-sm-6"
            onClick={this.handleModalHide}
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

Subscribe.propTypes = {
  handleModalHide: PropTypes.func,
  handleModalInfoHide: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Subscribe);