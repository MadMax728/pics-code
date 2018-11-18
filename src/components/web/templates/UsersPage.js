import React from "react";
import UserCard from "../../web/misc/UserCard";

import { users_list } from "../../../mock-data";

class UsersRoot extends React.Component {
  constructor() {
    super();
    this.state = {
      users_list
    };
  }

  render() {
    const { users_list } = this.state;
    return (
      <div className="padding-rl-10 middle-section">
        <div className="user-wrapper">
          {users_list.map((user, index) => {
            const clearfixDiv =
              index % 2 === 0 ? <div className="clearfix" /> : null;
            return (
              <div key={index}>
                {clearfixDiv}
                <UserCard item={user} index={index} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default UsersRoot;
