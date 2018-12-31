import React, { Component } from "react";
import PropTypes from "prop-types";
import { getBackofficeSelect } from "../../../actions";
import { connect } from "react-redux";
import { Translations }  from "../../../lib/translations";

class SelectNumber extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberList: []
    }
  }

  componentWillUnmount = () => {
    this.setState({numberList: []});
  }

  componentDidMount = () => {
    this.props.getBackofficeSelect("numbers").then(() => {
      if(this.props.numberList){
        this.setState({
          numberList: this.props.numberList
        });
      }
    });
  }
  
  handleNumber = (event) => {
    this.props.handleSelect("number",event.target.value);
  }
  
  render() {
    const { numberList } = this.state;
    const { value, className } = this.props;

    return (
      <select
        value={value}
        className={className}
        onChange={this.handleNumber}
        onBlur={this.handleNumber}
        options={numberList}
      >
        <option value="">{Translations.admin.number}</option>
        {numberList.map(option => (
          <option value={option.id} key={option.id}>
            {option.voucherNumber}
          </option>
        ))}
      </select>
    );
  }
}

const mapStateToProps = state => ({
  numberList: state.selectData.numbers
});

const mapDispatchToProps = {
  getBackofficeSelect
};


const propTypes = {
  value: PropTypes.any,
  numberList: PropTypes.any,
  className: PropTypes.string,
  getBackofficeSelect: PropTypes.func.isRequired,
  handleSelect: PropTypes.func.isRequired
};

SelectNumber.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectNumber);
