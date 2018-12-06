import React, { Component } from "react";
import PropTypes from "prop-types";
import { getCategory } from "../../../actions";
import { connect } from "react-redux";

class SelectCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
      categoryList: []
    }
  }

  componentDidMount = () => {
    this.props.getCategory().then(() => {
      if(this.props.categoryList && this.props.categoryList.categories){
        this.setState({
          categoryList: this.props.categoryList.categories
        });
      }
    });
  }
  
  handleCategory = (event) => {
    this.props.handleCategory(event.target.value);
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
        <option value="">{"select"}</option>
        {categoryList.map(option => (
          <option value={option.id} key={option.id}>
            {option.categoryName}
          </option>
        ))}
      </select>
    );
  }
}

const mapStateToProps = state => ({
  categoryList: state.categoryData
});

const mapDispatchToProps = {
  getCategory
};


const propTypes = {
  value: PropTypes.any,
  categoryList: PropTypes.any,
  className: PropTypes.string.isRequired,
  getCategory: PropTypes.func.isRequired,
  handleCategory: PropTypes.func.isRequired
};

SelectCategory.propTypes = propTypes;


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectCategory);
