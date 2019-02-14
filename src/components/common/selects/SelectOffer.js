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

  componentDidMount = () => {
    this.props.getSelect("offers").then(() => {
      if(this.props.offerList){
        this.setState({
          offerList: this.props.offerList
        });
      }
    });
  }

  componentWillUnmount = () => {
    this.setState({offerList: []});
  }
  
  handleOffer = (event) => {
    const { offerList } = this.props;
    const data = {
      id: event.target.value,
      name: offerList.filter(c => c.id === event.target.value)[0].offerName
    }
    this.props.handleSelect("offers", data);
  };
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
