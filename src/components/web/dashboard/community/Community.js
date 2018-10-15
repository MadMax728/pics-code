import React from "react";
import { users_list } from "../../../../mock-data";

const Community = () => {
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
              <div className="community-subscribe">
                <button className="blue_button">Subscribed</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Community;
