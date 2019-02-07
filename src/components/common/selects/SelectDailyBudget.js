import React, { Component } from "react";
import PropTypes from "prop-types";
import { getSelect } from "../../../actions";
import { connect } from "react-redux";
import { Translations } from "../../../lib/translations";
import * as enumerations from "../../../lib/constants/enumerations";

//dailyBudgetForCampaigns //dailyBudgetForAds
class SelectDailyBudget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dailyBudgetList: []
    };
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
          <option value={option.id} key={option.id}>
            {option.label}
          </option>
        ))}
      </select>
    );
  }

  componentDidMount = () => {
    const { isFor } = this.props;
    let dailyBudgetList = [];
    if (isFor === "campaign") {
      dailyBudgetList = enumerations.dailyBudgetForCampaigns;
    } else if (isFor === "ad") {
      dailyBudgetList = enumerations.dailyBudgetForAds;
    }
    this.setState({
      dailyBudgetList
    });

    // this.props.getSelect("dailyBudgets").then(() => {
    //   if (this.props.dailyBudgetList) {
    //     this.setState({
    //       dailyBudgetList: this.props.dailyBudgetList
    //     });
    //   }
    // });
  };

  componentWillUnmount = () => {
    this.setState({ dailyBudgetList: [] });
  };

  handleOffer = event => {
    this.props.handleSelect("budget", event.target.value);
  };
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
  handleSelect: PropTypes.func.isRequired,
  isFor: PropTypes.any
};

SelectDailyBudget.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectDailyBudget);
