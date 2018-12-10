import React, { Component } from "react";
import PropTypes from "prop-types";
import UserCardBody from "./body/UserCardBody";

class UserCard extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { 
      item: this.props.item,
      index: this.props.index
    }
  }

  handleSubscribed = () => {
    const item = this.state.item;
    item.isSubscribe = !item.isSubscribe;
    this.setState({ item });
  }

  render() {
    const { item, index } = this.state;

    return (
      <div>
        <UserCardBody user={item} index={index} handleSubscribed={this.handleSubscribed} />
      </div>
    );
  }
}

UserCard.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
};

export default UserCard;