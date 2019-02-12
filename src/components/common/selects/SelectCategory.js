import React, { Component } from "react";
import PropTypes from "prop-types";
import { getSelect } from "../../../actions";
import { connect } from "react-redux";
import { Translations } from "../../../lib/translations";

class SelectCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryList: []
    };
  }

  render() {
    const { categoryList } = this.state;
    const { value, className } = this.props;

    return (
      <select
        value={value}
        className={className}
        onChange={this.handleCategory}
        onBlur={this.handleCategory}
        options={categoryList}
      >
        <option value="">{Translations.select_category}</option>
        {categoryList.map(option => (
          <option value={option.id} key={option.id}>
            {option.categoryName}
          </option>
        ))}
      </select>
    );
  }

  componentDidMount = () => {
    this.props.getSelect("categories").then(() => {
      if (this.props.categoryList) {
        this.setState({
          categoryList: this.props.categoryList
        });
      }
    });
  };

  componentWillUnmount = () => {
    this.setState({ categoryList: [] });
  };

  handleCategory = event => {
    this.props.handleSelect("category", event.target.value);
  };
}

const mapStateToProps = state => ({
  categoryList: state.selectData.categories
});

const mapDispatchToProps = {
  getSelect
};

const propTypes = {
  value: PropTypes.any,
  categoryList: PropTypes.any,
  className: PropTypes.string,
  getSelect: PropTypes.func.isRequired,
  handleSelect: PropTypes.func.isRequired
};

SelectCategory.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectCategory);
