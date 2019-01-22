import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import LazyLoad from 'react-lazyload';
import * as images from "../../../lib/constants/images";
import { UserImageItemLoader } from '../loading-indicator';

class UserImageItem extends PureComponent {

  render() {
    const { item, customClass } = this.props;
    return (
        <div className={`profile_image ${customClass}`}>
             <LazyLoad height={45} once offset={[-45, 0]} placeholder={<UserImageItemLoader />}>
                <img
                src={item ? item : images.image}
                alt="profile"
                className="img-circle img-responsive"
                />
            </LazyLoad>
        </div>
    );
  }
}

UserImageItem.propTypes = {
  item: PropTypes.string.isRequired,
  customClass: PropTypes.string,
  isLoading: PropTypes.bool,
  // isOtherCardExist: PropTypes.bool.isRequired
};

export default UserImageItem;