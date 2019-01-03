import React, { Component } from "react";
import PropTypes from "prop-types";
import { getSelect } from "../../../actions";
import { connect } from "react-redux";
import { Translations } from "../../../lib/translations";

class SelectInquiry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inquiryList: []
    }
  }

  componentWillUnmount = () => {
    this.setState({inquiryList: []});
  }
  
  componentDidMount = () => {
    this.props.getSelect("inquiries").then(() => {
      if(this.props.inquiryList){
        this.setState({
          inquiryList: this.props.inquiryList
        });
      }
    });
  }
  
  handleInquiry = (event) => {
    this.props.handleSelect("inquiry",event.target.value);
  }
  
  render() {
    const { inquiryList } = this.state;
    const { value, className } = this.props;

    return (
      <select
        value={value}
        className={className}
        onChange={this.handleInquiry}
        onBlur={this.handleInquiry}
        options={inquiryList}
      >
        <option value="">{Translations.select_inquiry}</option>
        {inquiryList.map(option => (
          <option value={option.id} key={option.id}>
            {option.inquiryName}
          </option>
        ))}
      </select>
    );
  }
}

const mapStateToProps = state => ({
  inquiryList: state.selectData.inquiries
});

const mapDispatchToProps = {
  getSelect
};


const propTypes = {
  value: PropTypes.any,
  inquiryList: PropTypes.any,
  className: PropTypes.string,
  getSelect: PropTypes.func.isRequired,
  handleSelect: PropTypes.func.isRequired
};

SelectInquiry.propTypes = propTypes;


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectInquiry);
