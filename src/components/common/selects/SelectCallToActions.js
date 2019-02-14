import React, { Component } from "react";
import PropTypes from "prop-types";
import { getSelect } from "../../../actions";
import { connect } from "react-redux";
import { Translations } from "../../../lib/translations";

class SelectCallToActions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      callToActionList: []
    }
  }

  render() {
    const { callToActionList } = this.state;
    const { value, className } = this.props;
    return (
      <select
        value={value}
        className={className}
        onChange={this.handleCallToActions}
        onBlur={this.handleCallToActions}
        options={callToActionList}
      >
        <option value="">{Translations.call_to_action}</option>
        {callToActionList.map(option => (
          <option value={option.id} key={option.id}>
            {option.callToActionName}
          </option>
        ))}
      </select>
    );
  }

  componentDidMount = () => {
    this.props.getSelect("callToActions").then(() => {
      if (this.props.callToActionList) {
        this.setState({
          callToActionList: this.props.callToActionList
        });
      }
    });
  }


  componentWillUnmount = () => {
    this.setState({ callToActionList: [] });
  }

  handleCallToActions = (event) => {
    const { callToActionList } = this.props;
    const data = {
      id: event.target.value,
      name: callToActionList.filter(c => c.id === event.target.value)[0].callToActionName
    }
    this.props.handleSelect("callToAction", data);
  };
}

const mapStateToProps = state => ({
  callToActionList: state.selectData.callToActions
});

const mapDispatchToProps = {
  getSelect
};


const propTypes = {
  value: PropTypes.any,
  callToActionList: PropTypes.any,
  className: PropTypes.string,
  getSelect: PropTypes.func.isRequired,
  handleSelect: PropTypes.func.isRequired
};

SelectCallToActions.propTypes = propTypes;


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectCallToActions);
