import React, { Component } from "react";
import PropTypes from "prop-types";
import { getBackofficeSelect } from "../../../actions";
import { connect } from "react-redux";
import { Translations } from "../../../lib/translations";

class SelectPeriod extends Component {
  constructor(props) {
    super(props);
    this.state = {
      periodList: []
    }
  }

  render() {
    const { periodList } = this.state;
    const { value, className } = this.props;

    return (
      <select
        value={value}
        className={className}
        onChange={this.handlePeriod}
        onBlur={this.handlePeriod}
        options={periodList}
      >
        <option value="">{Translations.admin.period}</option>
        {periodList.map(option => (
          <option value={option.id} key={option.id}>
            {option.voucherPeriod}
          </option>
        ))}
      </select>
    );
  }

  componentDidMount = () => {
    this.props.getBackofficeSelect("periods").then(() => {
      if (this.props.periodList) {
        this.setState({
          periodList: this.props.periodList
        });
      }
    });
  }

  componentWillUnmount = () => {
    this.setState({ periodList: [] });
  }

  handlePeriod = (event) => {
    const { periodList } = this.props;
    const data = {
      id: event.target.value,
      name: periodList.filter(c => c.id === event.target.value)[0].voucherPeriod
    }
    this.props.handleSelect("period", data);
  };
}

const mapStateToProps = state => ({
  periodList: state.selectData.periods
});

const mapDispatchToProps = {
  getBackofficeSelect
};


const propTypes = {
  value: PropTypes.any,
  periodList: PropTypes.any,
  className: PropTypes.string,
  getBackofficeSelect: PropTypes.func.isRequired,
  handleSelect: PropTypes.func.isRequired
};

SelectPeriod.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectPeriod);
