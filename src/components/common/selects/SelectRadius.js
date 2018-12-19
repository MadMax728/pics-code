import React, { Component } from "react";
import PropTypes from "prop-types";
import { getRadius } from "../../../actions";
import { connect } from "react-redux";

class SelectRadius extends Component {
  constructor(props) {
    super(props);
    this.state = {
      radiusList: []
    };
  }

  componentWillUnmount = () => {
    this.setState({ radiusList: [] });
  };

  componentDidMount = () => {
    this.props.getRadius().then(() => {
      if (this.props.radiusList && this.props.radiusList.radius_data) {
        this.setState({
          radiusList: this.props.radiusList.radius_data
        });
      }
    });
  };

  handleCategory = event => {
    this.props.handleSelect("radius", event.target.value);
  };

  render() {
    const { radiusList } = this.state;
    const { value, className } = this.props;

    return (
      <select
        value={value}
        className={className}
        onChange={this.handleCategory}
        onBlur={this.handleCategory}
        options={radiusList}
      >
        <option value="">{"Select Radius"}</option>
        {radiusList.map(option => (
          <option value={option.id} key={option.id}>
            {option.radiusName}
          </option>
        ))}
      </select>
    );
  }
}

const mapStateToProps = state => ({
  radiusList: state.selectData
});

const mapDispatchToProps = {
  getRadius
};

const propTypes = {
  value: PropTypes.any,
  radiusList: PropTypes.any,
  className: PropTypes.string,
  getRadius: PropTypes.func.isRequired,
  handleSelect: PropTypes.func.isRequired
};

SelectRadius.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectRadius);
