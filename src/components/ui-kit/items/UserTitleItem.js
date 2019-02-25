import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class UserTitleItem extends PureComponent {
  render() {
    const { title, username, date, category } = this.props;
    return (
      <div className="titles_wrapper">
        <div className="normal_title">{title}</div>
        {username && <div className="secondary_title">{username}</div>}
        {date && (
          <div className="grey_title">
            {date} in {category || `Category`}
          </div>
        )}
      </div>
    );
  }
}

UserTitleItem.propTypes = {
  title: PropTypes.string.isRequired,
  username: PropTypes.string,
  date: PropTypes.string,
  category: PropTypes.string,
  isLoading: PropTypes.bool
};

export default UserTitleItem;
