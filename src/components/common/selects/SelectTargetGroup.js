import React, { Component } from "react";
import PropTypes from "prop-types";
import { getTargetGroup } from "../../../actions";
import { connect } from "react-redux";
import { Translations } from "../../../lib/translations";
import { targetGroupData } from "../../../lib/constants/select";

class SelectTargetGroup extends Component {
  render() {
    const { value, className, targetGroupList } = this.props;
    return (
      <select
        value={value}
        className={className}
        onChange={this.handleTargetGroup}
        onBlur={this.handleTargetGroup}
        options={targetGroupList}
      >
        <option value="">{Translations.select_target_group}</option>
        {targetGroupList && targetGroupList.map(option => (
          <option value={option.id} key={option.id}>
            {option.value}
          </option>
        ))}
      </select>
    );
  }

  componentDidMount = () => {
    this.props.getTargetGroup(targetGroupData);
  };

  handleTargetGroup = event => {
    const { targetGroupList } = this.props;
    const name = targetGroupList.filter(c => c.id === event.target.value);
    const data = {
      id: event.target.value,
      name: (name.length !== 0) ?  name[0].value : ""
    }
    this.props.handleSelect("target_group", data);
  };
}

const mapStateToProps = state => ({
  targetGroupList: state.selectData.targetGroups
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
