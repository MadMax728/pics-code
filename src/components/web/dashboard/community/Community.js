import React, { Component } from "react";
import { users_list } from "../../../../mock-data";
import propTypes from "prop-types";

class Community extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      users_list
    };
  }

  handleSubscribed = e => {
    console.log("dasjbdhja");

    const users_list = this.state.users_list;
    users_list.filter(
      user =>
        user.id === parseInt(e.target.id) &&
        (user.subscribed = !user.subscribed)
    );
    this.setState({ users_list });

    // let data = users_list.filter(f => {
    //   return f.id === e.target.id;
    // });

    // if (data[0].subscribed === true) {
    //   this.props.handleMessageBar("You have successfully subscribed");
    // } else {
    //   this.props.handleMessageBar("You have successfully unsubscribed");
    // }
  };

  render() {
    const { users_list } = this.state;

    return (
      <div>
        <div className="normal_title padding-15">Community</div>
        <div className="community">
          {users_list.map((user, index) => {
            return (
              <div className="community_wrapper" key={index}>
                <div className="community-user-image">
                  <img
                    src={user.image}
                    alt="campaign"
                    className="img-circle img-responsive"
                  />
                </div>
                <div className="community-user-name">
                  <div className="normal_title">{user.user_name}</div>
                  <div className="secondary_title">{user.name}</div>
                </div>
                {user.subscribed ? (
                  <div className="community-subscribe">
                    <button
                      className="filled_button"
                      id={user.id}
                      onClick={this.handleSubscribed}
                    >
                      Subscribe
                    </button>
                  </div>
                ) : (
                  <div className="community-subscribe">
                    <button
                      className="blue_button"
                      id={user.id}
                      onClick={this.handleSubscribed}
                    >
                      Subscribed
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

Community.propTypes = {
  handleMessageBar: propTypes.func.isRequired
};

export default Community;
