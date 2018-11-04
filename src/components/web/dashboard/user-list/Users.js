import React from "react";

import { users_list } from "../../../../mock-data";

class Users extends React.Component {
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
                <div
                  className={
                    index % 2 === 0
                      ? "col-sm-6 pic-left-block"
                      : "col-sm-6 pic-right-block"
                  }
                >
                  <div className="pic-block">
                    <img src={user.image} alt={"pic-1"} />
                    <div className="name-wrapper">
                      <div className="username">{user.username}</div>
                      <div className="name">{user.name}</div>
                      <button className="filled_button">Subscribe</button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Users;
