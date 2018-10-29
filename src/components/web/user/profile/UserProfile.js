import React, { Component } from "react";
import { NewsFeeds } from "../../feeds";
import { user_profile_campaigns_list } from "../../../../mock-data";
import PropTypes from "prop-types";

class UserProfile extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  render() {
    const { handleModalShow } = this.props;
    return (
      <div className={"middle-section padding-rl-10"}>
        <NewsFeeds
          campaigns={user_profile_campaigns_list}
          handleModalShow={handleModalShow}
        />
      </div>
    );
  }
}

UserProfile.propTypes = {
  handleModalShow: PropTypes.func
};

export default UserProfile;
