import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import LazyLoad from "react-lazyload";
import * as images from "../../../lib/constants/images";
import { UserImageItemLoader } from "../loading-indicator";

class UserImageItem extends PureComponent {
  render() {
    const {
      item,
      customClass,
      isParticipant,
      campaignUserProfile
    } = this.props;
    return (
      <div className={`profile_image ${customClass}`}>
        <LazyLoad
          height={45}
          once
          offset={[-45, 0]}
          placeholder={<UserImageItemLoader />}
        >
          <img
            src={item ? item : images.image}
            alt="profile"
            className="img-circle img-responsive"
          />
          {isParticipant && (
            <span className="overap-pro-img">
              <img
                src={campaignUserProfile ? campaignUserProfile : images.image}
                alt="profile"
                className="img-circle img-responsive"
              />
            </span>
          )}
        </LazyLoad>
      </div>
    );
  }
}

UserImageItem.propTypes = {
  item: PropTypes.string.isRequired,
  isParticipant: PropTypes.bool,
  campaignUserProfile: PropTypes.string,
  customClass: PropTypes.string,
  isLoading: PropTypes.bool
  // isOtherCardExist: PropTypes.bool.isRequired
};

UserImageItem.defaultProps = {
  isParticipant: false
};

export default UserImageItem;
