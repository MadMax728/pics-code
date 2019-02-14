import React, { Component } from "react";
import PropTypes from "prop-types";
import { getInquiry } from "../../../actions";
import { connect } from "react-redux";
import * as enumerations from "../../../lib/constants/enumerations";
import { Translations } from "../../../lib/translations";

const inquiryList = [
  {
    id: enumerations.inquiry.images,
    value: Translations.inquiry.images
  },
  {
    id: enumerations.inquiry.videos,
    value: Translations.inquiry.videos
  },
  {
    id: enumerations.inquiry.blogs,
    value: Translations.inquiry.blogs
  },
  {
    id: enumerations.inquiry.audio,
    value: Translations.inquiry.audio
  },
  {
    id: enumerations.inquiry.skills,
    value: Translations.inquiry.skills
  },
  {
    id: enumerations.inquiry.custom_work,
    value: Translations.inquiry.custom_work
  }
];

class SelectInquiry extends Component {
  render() {
    const { value, className, inquiryList } = this.props;
    return (
      <select
        value={value}
        className={className}
        onChange={this.handleInquiry}
        onBlur={this.handleInquiry}
        options={inquiryList}
      >
        <option value="">{Translations.select_inquiry}</option>
        {inquiryList && inquiryList.map(option => (
          <option value={option.id} key={option.id}>
            {option.value}
          </option>
        ))}
      </select>
    );
  }

  componentDidMount = () => {
    this.props.getInquiry(inquiryList);
  }

  handleInquiry = (event) => {
    const { inquiryList } = this.props;
    const name = inquiryList.filter(c => c.id === event.target.value);
    const data = {
      id: event.target.value,
      name: (name.length !== 0) ? name[0].value : ""
    }
    this.props.handleSelect("inquiry", data);
  };
}

const mapStateToProps = state => ({
  inquiryList: state.selectData.inquiries
});

const mapDispatchToProps = {
  getInquiry
};


const propTypes = {
  value: PropTypes.any,
  inquiryList: PropTypes.any,
  className: PropTypes.string,
  getInquiry: PropTypes.func.isRequired,
  handleSelect: PropTypes.func.isRequired
};

SelectInquiry.propTypes = propTypes;


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectInquiry);
