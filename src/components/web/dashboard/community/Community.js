import React from "react";
import * as images from "../../../../lib/constants/images";

const users = [
  {
    name: "Santosh Shinde",
    user_name: "santosh1",
    image: `${images.campaign1}`
  },
  {
    name: "Santosh Shinde",
    user_name: "santosh2",
    image: `${images.campaign2}`
  }
];

const Community = () => {
  return (
    <div>
      <div className="normal_title padding-15">Community</div>
      <div className="community">
        {users.map(user => {
          return (
            <div className="community_wrapper" key={user.user_name}>
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
