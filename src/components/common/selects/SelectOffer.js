import React, { Component } from "react";
import PropTypes from "prop-types";
import { getSelect } from "../../../actions";
import { connect } from "react-redux";
import { Translations } from "../../../lib/translations";

class SelectOffer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offerList: []
    }
  }

  componentWillUnmount = () => {
    this.setState({offerList: []});
  }

  componentDidMount = () => {
    this.props.getSelect("offers").then(() => {
      if(this.props.offerList){
        this.setState({
          offerList: this.props.offerList
        });
      }
    });
  }
  
  handleOffer = (event) => {
    this.props.handleSelect("offers",event.target.value);
  }
  
  render() {
    const { offerList } = this.state;
    const { value, className } = this.props;
    
    return (
      <select
        value={value}
        className={className}
        onChange={this.handleOffer}
        onBlur={this.handleOffer}
        options={offerList}
      >
        <option value="">{Translations.select_offer}</option>
        {offerList.map(option => (
          <option value={option.id} key={option.id}>
            {option.offerName}
          </option>
        ))}
      </select>
    );
  }
}

const mapStateToProps = state => ({
  offerList: state.selectData.offers
});

const mapDispatchToProps = {
  getSelect
};


const propTypes = {
  value: PropTypes.any,
  offerList: PropTypes.any,
  className: PropTypes.string,
  getSelect: PropTypes.func.isRequired,
  handleSelect: PropTypes.func.isRequired
};

SelectOffer.propTypes = propTypes;


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectOffer);
