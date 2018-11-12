import React, { Component } from "react";
import { company_campaigns_list } from "../../../../mock-data";
import { NewsFeeds } from "../../feeds";
import PropTypes from "prop-types";

class Company extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      company_campaigns: company_campaigns_list
    };
  }
  render() {
    const { company_campaigns } = this.state;
    const { handleModalShow, handleModalInfoShow } = this.props;
    return (
      <div className={"padding-rl-10 middle-section"}>
        <NewsFeeds
          campaigns={company_campaigns}
          handleModalShow={handleModalShow}
          handleModalInfoShow={handleModalInfoShow}
          isDescription={false}
          isInformation
        />
      </div>
    );
  }
}

Company.propTypes = {
  handleModalShow: PropTypes.func,
  handleModalInfoShow: PropTypes.func
};

export default Company;
