import React, { Component } from "react";
import { users_list } from "../../../../mock-data";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

class Community extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      users_list
    };
  }

  handleSubscribed = e => {
    const users_list = this.state.users_list;
    users_list.filter(
      user =>
        user.id === e.target.id &&
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
            const profile_route = user.isOwner
              ? `/news-feed`
              : `/news-feed/${user.id}`;
            return (
              <div className="community_wrapper" key={index}>
                <div className="community-user-image">
                  <Link to={profile_route}>
                    <img
                      src={user.profileUrl}
                      alt="campaign"
                      className="img-circle img-responsive"
                    />
                  </Link>
                </div>
                <div className="community-user-name">
                  <Link to={profile_route}>
                    <div className="normal_title">{user.username}</div>
                    <div className="secondary_title">{user.name}</div>
                  </Link>
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
