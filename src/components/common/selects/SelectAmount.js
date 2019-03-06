import React, { Component } from "react";
import PropTypes from "prop-types";
import { getBackofficeSelect } from "../../../actions";
import { connect } from "react-redux";
import { Translations } from "../../../lib/translations";

class SelectAmount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountList: []
    };
  }

  render() {
    const { amountList } = this.state;
    const { value, className } = this.props;

    return (
      <select
        value={value}
        className={className}
        onChange={this.handleAmount}
        onBlur={this.handleAmount}
        options={amountList}
      >
        <option value="">{Translations.admin.amount}</option>
        {amountList.map(option => (
          <option value={option.id} key={option.id}>
            {option.voucherAmount}
          </option>
        ))}
      </select>
    );
  }

  componentDidMount = () => {
    this.props.getBackofficeSelect("amounts").then(() => {
      if (this.props.amountList) {
        this.setState({
          amountList: this.props.amountList
        });
      }
    });
  };

  componentWillUnmount = () => {
    this.setState({ amountList: [] });
  };

  handleAmount = event => {
    const { amountList } = this.props;
    const name = amountList.filter(c => c.id === event.target.value);
    const data = {
      id: event.target.value,
      name: name.length !== 0 ? name[0].voucherAmount : ""
    };
    this.props.handleSelect("amount", data);
  };
}

const mapStateToProps = state => ({
  amountList: state.selectData.amounts
});

const mapDispatchToProps = {
  getBackofficeSelect
};

const propTypes = {
  value: PropTypes.any,
  amountList: PropTypes.any,
  className: PropTypes.string,
  getBackofficeSelect: PropTypes.func.isRequired,
  handleSelect: PropTypes.func.isRequired
};

SelectAmount.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectAmount);
