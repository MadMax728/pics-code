import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as enumerations from "../../../lib/constants/enumerations";
import { Translations } from "../../../lib/translations";
import { getAge } from "../../../actions";

const ageData = [
  {
    id: 1,
    label: Translations.age["0"],
    value: ""
  },
  {
    id: 2,
    label: Translations.age["1"],
    value: enumerations.age["1"]
  },
  {
    id: 3,
    label: Translations.age["2"],
    value: enumerations.age["2"]
  },
  {
    id: 4,
    label: Translations.age["3"],
    value: enumerations.age["3"]
  },
  {
    id: 5,
    label: Translations.age["4"],
    value: enumerations.age["4"]
  },
  {
    id: 6,
    label: Translations.age["5"],
    value: enumerations.age["5"]
  }
];

class SelectAge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ageList: []
    };
  }

  componentWillMount = () => {
    this.props.getAge(ageData);
  };

  render() {
    const { value, className } = this.props;
    return (
      <select
        value={value}
        className={className}
        onChange={this.handleAge}
        onBlur={this.handleAge}
        options={ageData}
      >
        <option value="">{Translations.select_age}</option>
        {ageData.map(option => (
          <option value={option.value} key={option.id}>
            {option.label}
          </option>
        ))}
      </select>
    );
  }

  componentDidMount = () => {
    if (this.props.ageList && this.props.ageList.ageData) {
      this.setState({ ageList: this.props.ageList.ageData });
    }
  };

  componentWillUnmount = () => {
    this.setState({ ageList: [] });
  };

  handleAge = event => {
    this.props.handleSelect("age", event.target.value);
  };
}

const mapStateToProps = state => ({
  ageList: state.selectData
});

const mapDispatchToProps = {
  getAge
};

const propTypes = {
  value: PropTypes.any,
  ageList: PropTypes.any,
  className: PropTypes.string,
  getAge: PropTypes.func.isRequired,
  handleSelect: PropTypes.func.isRequired
};

SelectAge.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectAge);
