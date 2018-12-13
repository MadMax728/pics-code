import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getDashboard } from "../../../../actions";
class Community extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      usersList: null
    };
  }

  componentDidMount = () => {
    this.props.getDashboard("user").then(()=> {
      if(this.props.usersList){
        this.setState({usersList: this.props.usersList})
      }
    });
  }

  handleSubscribed = e => {
    const { usersList } = this.state;
    usersList.filter(
      user =>
        user.id === e.target.id &&
        (user.isSubscribe = !user.isSubscribe)
    );
    this.setState({ usersList });
  };

  render() {
    const { usersList, isLoading } = this.state;

    return (
      <div>
        <div className="normal_title padding-15">Community</div>
        <div className="community">
          { usersList && !isLoading &&
             usersList.map((user) => {
            const profile_route = user.isOwner
              ? `/news-feed`
              : `/news-feed/${user.username}`;
            return (
              <div className="community_wrapper" key={user.id}>
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
                    <div className="secondary_title">{'user.name'}</div>
                  </Link>
                </div>
                {user.isSubscribe ? (
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

const mapStateToProps = state => ({
  usersList: state.dashboardData.user,
  isLoading: state.dashboardData.isLoading,
  error: state.dashboardData.error
});

const mapDispatchToProps = {
  getDashboard
};

Community.propTypes = {
  getDashboard: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  usersList: PropTypes.any,
  // error: PropTypes.any
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Community);
