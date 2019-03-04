import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Translations } from "../../../../lib/translations";
import * as routes from "../../../../lib/constants/routes";
import { UserImageItem, Button, UserTitleItem } from "../../../ui-kit";

const CommunityItem = ({ user, handleSubscribe, handleUnSubscribe, isLoading = false}) => {
  return (
    <div className="community_wrapper">
      <Link to={`${routes.ABOUT_ROUTE}/${user.username}`}>
        <div className="community-user-image">
          <UserImageItem 
            customClass={'img-circle img-responsive'} 
            item={user.profileUrl}>
          </UserImageItem>
        </div>
        <div className="community-user-name">
          <UserTitleItem 
            title={user.name} 
            username={user.username}>
          </UserTitleItem>
        </div>
      </Link>
      <div className="community-subscribe"> 
        {
          user.isSubscribed ? (
            <Button
              className={`filled_button`}
              id={user.subscribedId}
              onClick={handleUnSubscribe}
              disabled={isLoading}
              text={Translations.profile_community_right_sidebar.Subscribed}
          />
          ) : (
            <Button
              className={`blue_button`}
              id={user.id}
              onClick={handleSubscribe}
              disabled={isLoading}
              text={Translations.profile_community_right_sidebar.Subscribe}
          />
          )
        }
      </div>
    </div>
  );
};

CommunityItem.propTypes = {
  user: PropTypes.any,
  handleSubscribe: PropTypes.any,
  handleUnSubscribe: PropTypes.any,
  isLoading: PropTypes.any,
};

export default CommunityItem;
