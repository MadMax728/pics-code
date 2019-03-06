import React, { Component } from "react";
import PropTypes from "prop-types";
import { getBackofficeSelect } from "../../../actions";
import { connect } from "react-redux";
import { Translations } from "../../../lib/translations";

class SelectType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typeList: []
    };
  }

  render() {
    const { typeList } = this.state;
    const { value, className } = this.props;

    return (
      <select
        value={value}
        className={className}
        onChange={this.handleType}
        onBlur={this.handleType}
        options={typeList}
      >
        <option value="">{Translations.admin.type}</option>
        {typeList.map(option => (
          <option value={option.id} key={option.id}>
            {option.voucherType}
          </option>
        ))}
      </select>
    );
  }

  componentDidMount = () => {
    this.props.getBackofficeSelect("types").then(() => {
      if (this.props.typeList) {
        this.setState({
          typeList: this.props.typeList
        });
      }
    });
  };

  componentWillUnmount = () => {
    this.setState({ typeList: [] });
  };

  handleType = event => {
    const { typeList } = this.props;
    const name = typeList.filter(c => c.id === event.target.value);
    const data = {
      id: event.target.value,
      name: name.length !== 0 ? name[0].voucherType : ""
    };
    this.props.handleSelect("type", data);
  };
}

const mapStateToProps = state => ({
  typeList: state.selectData.types
});

const mapDispatchToProps = {
  getBackofficeSelect
};

const propTypes = {
  value: PropTypes.any,
  typeList: PropTypes.any,
  className: PropTypes.string,
  getBackofficeSelect: PropTypes.func.isRequired,
  handleSelect: PropTypes.func.isRequired
};

SelectType.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectType);
