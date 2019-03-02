import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import * as routes from "../../../../lib/constants/routes";
import { UserImageItem, Button, UserTitleItem } from "../../../ui-kit";

const CommunityItem = ({ user, handleActionClick, isLoading = false, classNames='', btnText= '' }) => {
  return (
    <div className="community_wrapper">
      <div className="community-user-image">
        <Link to={`${routes.ABOUT_ROUTE}/${user.username}`}>
            <UserImageItem 
              customClass={'img-circle img-responsive'} 
              item={user.profileUrl}>
            </UserImageItem>
        </Link>
      </div>
      <div className="community-user-name">
        <UserTitleItem title={user.name} username={user.username}></UserTitleItem>
      </div>
      <div className="community-subscribe">
        <Button
          className={classNames}
          id={user.id}
          onClick={handleActionClick}
          disabled={isLoading}
          text={btnText}
        />
      </div>
    </div>
  );
};

CommunityItem.propTypes = {
  user: PropTypes.any,
  handleActionClick: PropTypes.any,
  isLoading: PropTypes.any,
  classNames: PropTypes.any,
  btnText: PropTypes.any
};

export default CommunityItem;
