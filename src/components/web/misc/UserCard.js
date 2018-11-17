import React, { Component } from "react";
import propTypes from "prop-types";
import UserCardBody from "./body/UserCardBody";

class UserCard extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { item, index } = this.props;

    return (
      <div>
        <UserCardBody user={item} index={index} />
      </div>
    );
  }
}

UserCard.propTypes = {
  item: propTypes.object.isRequired,
  index: propTypes.object.isRequired
};

export default UserCard;
