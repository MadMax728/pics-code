import React, { Component } from "react";
import PropTypes from "prop-types";
import { getInquiry } from "../../../actions";
import { connect } from "react-redux";

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
    this.props.getInquiry().then(() => {
      if(this.props.inquiryList && this.props.inquiryList.inquirys){
        this.setState({
          inquiryList: this.props.inquiryList.inquirys
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
        <option value="">{"select"}</option>
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
  inquiryList: state.selectData
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
