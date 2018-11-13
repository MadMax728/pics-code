import React, { Component } from "react";
import { NewsFeeds } from "../../feeds";
import { campaigns_list } from "../../../../mock-data";
import PropTypes from "prop-types";

class UserProfile extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      user_profile_campaigns_list: campaigns_list
    };
  }

  render() {
    const { handleModalShow, handleModalInfoShow } = this.props;
    const { user_profile_campaigns_list } = this.state;
    return (
      <div className={"middle-section padding-rl-10"}>
        {user_profile_campaigns_list && (
          <NewsFeeds
            campaigns={user_profile_campaigns_list}
            handleModalShow={handleModalShow}
            handleModalInfoShow={handleModalInfoShow}
            isDescription
            isInformation={false}
          />
        )}
      </div>
    );
  }
}

UserProfile.propTypes = {
  handleModalShow: PropTypes.func,
  handleModalInfoShow: PropTypes.func
};

export default UserProfile;
