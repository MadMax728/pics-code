import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class DescriptionItem extends PureComponent {

  render() {
    const { desc } = this.props;
    return (
        <div className="text">
             <div dangerouslySetInnerHTML={{__html: desc}} />
        </div>
    );
  }
}

DescriptionItem.propTypes = {
   desc: PropTypes.string.isRequired,
};

export default DescriptionItem;
