import React, { Component } from "react";
import PropTypes from "prop-types";
import { getSelect } from "../../../actions";
import { connect } from "react-redux";
import { Translations } from "../../../lib/translations";

class SelectDailyBudget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dailyBudgetList: []
    }
  }

  componentWillUnmount = () => {
    this.setState({dailyBudgetList: []});
  }

  componentDidMount = () => {
    this.props.getSelect("dailyBudgets").then(() => {
      if(this.props.dailyBudgetList){
        this.setState({
          dailyBudgetList: this.props.dailyBudgetList
        });
      }
    });
  }
  
  handleOffer = (event) => {
    this.props.handleSelect("budget", event.target.value);
  }
  
  render() {
    const { dailyBudgetList } = this.state;
    const { value, className } = this.props;
    
    return (
      <select
        value={value}
        className={className}
        onChange={this.handleOffer}
        onBlur={this.handleOffer}
        options={dailyBudgetList}
      >
        <option value="">{Translations.select_daily_budget}</option>
        {dailyBudgetList.map(option => (
          <option value={option.amount} key={option.id}>
            {option.dailyBudget}
          </option>
        ))}
      </select>
    );
  }
}

const mapStateToProps = state => ({
  dailyBudgetList: state.selectData.dailyBudgets
});

const mapDispatchToProps = {
  getSelect
};


const propTypes = {
  value: PropTypes.any,
  dailyBudgetList: PropTypes.any,
  className: PropTypes.string,
  getSelect: PropTypes.func.isRequired,
  handleSelect: PropTypes.func.isRequired
};

SelectDailyBudget.propTypes = propTypes;


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectDailyBudget);
