import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class InfoWrapperItem extends PureComponent {

  render() {
    const { title, value } = this.props;
    return (
        <div className="info_wrapper">
            <span className="normal_title">{title}: </span>
            <span className="secondary_title"> {value} </span>
        </div>
    );
  }
}

InfoWrapperItem.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.any,
};

export default InfoWrapperItem;
