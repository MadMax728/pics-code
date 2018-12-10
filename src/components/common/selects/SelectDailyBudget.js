import React, { Component } from "react";
import PropTypes from "prop-types";
import { getDailyBudget } from "../../../actions";
import { connect } from "react-redux";

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
    this.props.getDailyBudget().then(() => {
      if(this.props.dailyBudgetList && this.props.dailyBudgetList.dailyBudgets){
        this.setState({
          dailyBudgetList: this.props.dailyBudgetList.dailyBudgets
        });
      }
    });
  }
  
  handleOffer = (event) => {
    this.props.handleSelect("daily_budget", event.target.value);
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
        <option value="">{"Select Daily Budget"}</option>
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
  dailyBudgetList: state.selectData
});

const mapDispatchToProps = {
  getDailyBudget
};


const propTypes = {
  value: PropTypes.any,
  dailyBudgetList: PropTypes.any,
  className: PropTypes.string,
  getDailyBudget: PropTypes.func.isRequired,
  handleSelect: PropTypes.func.isRequired
};

SelectDailyBudget.propTypes = propTypes;


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectDailyBudget);
