import React, { Component } from "react";
import PropTypes from "prop-types";
import { getSelect } from "../../../actions";
import { connect } from "react-redux";

class SelectCallToActions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      callToActionList: []
    }
  }

  componentWillUnmount = () => {
    this.setState({callToActionList: []});
  }

  componentDidMount = () => {
    this.props.getSelect("callToActions").then(() => {
      if(this.props.callToActionList){
        this.setState({
          callToActionList: this.props.callToActionList
        });
      }
    });
  }
  
  handleCallToActions = (event) => {
    this.props.handleSelect("callToAction",event.target.value);
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
        <option value="">{"Select Call to Action"}</option>
        {callToActionList.map(option => (
          <option value={option.id} key={option.id}>
            {option.callToActionName}
          </option>
        ))}
      </select>
    );
  }
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
