import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import LazyLoad from "react-lazyload";
import * as images from "../../../lib/constants/images";
import { UserImageItemLoader } from "../loading-indicator";

class ParticipantUserImageItem extends PureComponent {
  render() {
    const { item, customClass, ownerItem } = this.props;
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
          <span className="overap-pro-img">
            <img
              src={ownerItem ? ownerItem : images.image}
              alt="profile"
              className="img-circle img-responsive"
            />
          </span>
        </LazyLoad>
      </div>
    );
  }
}

ParticipantUserImageItem.propTypes = {
  item: PropTypes.string.isRequired,
  customClass: PropTypes.string,
  isLoading: PropTypes.bool,
  ownerItem: PropTypes.any
  // isOtherCardExist: PropTypes.bool.isRequired
};

export default ParticipantUserImageItem;
