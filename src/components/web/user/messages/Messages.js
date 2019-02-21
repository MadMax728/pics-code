import React, { Component } from "react";
import { Auth } from "../../../../auth";
import MLeftContainer from "./MLeftContainer";
import MRightContainer from "./MRightContainer";
import * as websocket from "../../../../websocket";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getUser } from "../../../../actions";

class Messages extends Component {
  constructor(props, context) {
    super(props, context);
    // get  user from local storage
    const storage = Auth.extractJwtFromStorage();
    // parse the user info
    const userInfo = JSON.parse(storage.userInfo) || {};
    let searchToken = null;
    if (this.props.location && this.props.location.search) {
      const searchQuery = new URLSearchParams(this.props.location.search);
      searchToken = searchQuery.get("new");
      //const data = { username: searchToken };
    }
    console.log(searchToken);
    this.state = {
      user: {},
      me: userInfo.id,
      isCreator: searchToken
    };
  }

  selectUser = newUser => {
    const { user } = this.state;
    if (!newUser || !newUser._id || (user && user._id === newUser._id)) return;
    this.setState({ user: newUser, messages: [] });
    websocket.join(newUser.id, this.state.me, this.state.me);
  };

  render() {
    const { user, me } = this.state;
    return (
      <div className="message-home">
        <div className="messages-left">
          <MLeftContainer
            selectUser={this.selectUser}
            me={me}
            isCreator={this.state.isCreator}
          />
        </div>
        <div className="messages-right">
          <MRightContainer user={user} me={me} />
        </div>
      </div>
    );
  }

  componentDidMount = () => {
    if (this.state.isCreator != null) {
      const data = { username: this.state.isCreator };
      this.props.getUser(data).then(() => {
        if (
          this.props.userDataByUsername &&
          this.props.userDataByUsername.user &&
          this.props.userDataByUsername.user.data
        ) {
          this.selectUser(this.props.userDataByUsername.user.data);
        }
      });
    }
  };
}

const mapStateToProps = state => ({
  userDataByUsername: state.userDataByUsername
});

const mapDispatchToProps = {
  getUser
};

Messages.propTypes = {
  location: PropTypes.any,
  getUser: PropTypes.func,
  userDataByUsername: PropTypes.object
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);
