import React, { Component } from "react";
import { NewsFeeds } from "../../feeds";
import { user_profile_campaigns_list } from "../../../../mock-data";

class UserProfile extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  render() {
    return (
      <div className={"middle-section padding-rl-10"}>
        <NewsFeeds campaigns={user_profile_campaigns_list} />
      </div>
    );
  }
}

export default UserProfile;
