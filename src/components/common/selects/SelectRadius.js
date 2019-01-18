import React, { Component } from "react";
import PropTypes from "prop-types";
import { getSelect } from "../../../actions";
import { connect } from "react-redux";
import { Translations } from "../../../lib/translations";

class SelectRadius extends Component {
  constructor(props) {
    super(props);
    this.state = {
      radiusList: []
    };
  }

  render() {
    const { radiusList } = this.state;
    const { value, className } = this.props;

    return (
      <select
        value={value}
        className={className}
        onChange={this.handleRadius}
        onBlur={this.handleRadius}
        options={radiusList}
      >
        <option value="">{Translations.select_radius}</option>
        {radiusList.map(option => (
          <option value={option.id} key={option.id}>
            {option.radiusName}
          </option>
        ))}
      </select>
    );
  }

  componentDidMount = () => {
    this.props.getSelect("radius").then(() => {
      if (this.props.radiusList && this.props.radiusList) {
        this.setState({
          radiusList: this.props.radiusList
        });
      }
    });
  };

  componentWillUnmount = () => {
    this.setState({ radiusList: [] });
  };

  handleRadius = event => {
    this.props.handleSelect("radius", event.target.value);
  };

}

const mapStateToProps = state => ({
  radiusList: state.selectData.radius
});

const mapDispatchToProps = {
  getSelect
};

const propTypes = {
  value: PropTypes.any,
  radiusList: PropTypes.any,
  className: PropTypes.string,
  getSelect: PropTypes.func.isRequired,
  handleSelect: PropTypes.func.isRequired
};

SelectRadius.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectRadius);
