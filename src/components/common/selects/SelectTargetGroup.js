import React, { Component } from "react";
import PropTypes from "prop-types";
import { getTargetGroup } from "../../../actions";
import { connect } from "react-redux";
import * as enumerations from "../../../lib/constants/enumerations";
import { Translations } from "../../../lib/translations";

const targetGroupData = [
  {
    id: enumerations.target_group.company,
    value: Translations.target_group.company
  },
  {
    id: enumerations.target_group.female_and_male,
    value: Translations.target_group.female_and_male
  },
  {
    id: enumerations.target_group.female,
    value: Translations.target_group.female
  },
  {
    id: enumerations.target_group.male,
    value: Translations.target_group.male
  }
];

class SelectTargetGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      targetGroupList: []
    };
  }

  componentWillMount = () => {
    this.props.getTargetGroup(targetGroupData);
  };

  render() {
    const { value, className } = this.props;
    return (
      <select
        value={value}
        className={className}
        onChange={this.handleTargetGroup}
        onBlur={this.handleTargetGroup}
        options={targetGroupData}
      >
        <option value="">{Translations.select_target_group}</option>
        {targetGroupData.map(option => (
          <option value={option.id} key={option.id}>
            {option.value}
          </option>
        ))}
      </select>
    );
  }

  componentDidMount = () => {
    if (
      this.props.targetGroupList &&
      this.props.targetGroupList.target_group_data
    ) {
      this.setState({
        targetGroupList: this.props.targetGroupList.target_group_data
      });
    }
  };

  componentWillUnmount = () => {
    this.setState({ targetGroupList: [] });
  };

  handleTargetGroup = event => {
    this.props.handleSelect("target_group", event.target.value);
  };

}

const mapStateToProps = state => ({
  targetGroupList: state.selectData
});

const mapDispatchToProps = {
  getTargetGroup
};

const propTypes = {
  value: PropTypes.any,
  targetGroupList: PropTypes.any,
  className: PropTypes.string,
  getTargetGroup: PropTypes.func.isRequired,
  handleSelect: PropTypes.func.isRequired
};

SelectTargetGroup.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectTargetGroup);
