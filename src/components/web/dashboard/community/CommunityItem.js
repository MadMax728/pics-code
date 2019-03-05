import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Translations } from "../../../../lib/translations";
import * as routes from "../../../../lib/constants/routes";
import { UserImageItem, Button, UserTitleItem } from "../../../ui-kit";

const CommunityItem = ({
  user,
  handleSubscribeAction,
  handleUnsubscribeAction,
  isLoading = false
}) => {
  return (
    <div className="community_wrapper">
      <div className="community-user-image">
        <Link to={`${routes.ABOUT_ROUTE}/${user.username}`}>
          <UserImageItem
            customClass={"img-circle img-responsive"}
            item={user.profileUrl}
          />
        </Link>
      </div>
      <div className="community-user-name">
        <Link to={`${routes.ABOUT_ROUTE}/${user.username}`}>
          <UserTitleItem title={user.name} username={user.username} />
        </Link>
      </div>
      <div className="community-subscribe">
        {user.isSubscribedTo ? (
          <Button
            className={`filled_button`}
            id={user.subscriberId}
            onClick={handleUnsubscribeAction}
            disabled={isLoading}
            text={Translations.profile_community_right_sidebar.Subscribed}
          />
        ) : (
          <Button
            className={`blue_button`}
            id={user.id}
            onClick={handleSubscribeAction}
            disabled={isLoading}
            text={Translations.profile_community_right_sidebar.Subscribe}
          />
        )}
      </div>
    </div>
  );
};

CommunityItem.propTypes = {
  user: PropTypes.any,
  handleSubscribeAction: PropTypes.any,
  handleUnsubscribeAction: PropTypes.any,
  isLoading: PropTypes.any
};

export default CommunityItem;
