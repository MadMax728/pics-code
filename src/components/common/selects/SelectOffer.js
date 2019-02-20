import React, { Component } from "react";
import PropTypes from "prop-types";
import { getOffer } from "../../../actions";
import { connect } from "react-redux";
import { Translations } from "../../../lib/translations";
import * as enumerations from "../../../lib/constants/enumerations";

const offerList = [
  {
    id: enumerations.offer.payment,
    value: Translations.offer.payment
  },
  {
    id: enumerations.offer.products,
    value: Translations.offer.products
  },
  {
    id: enumerations.offer.premium_commission,
    value: Translations.offer.premium_commission
  },
  {
    id: enumerations.offer.cooperation,
    value: Translations.offer.cooperation
  },
  {
    id: enumerations.offer.other_incentive,
    value: Translations.offer.other_incentive
  }
];

class SelectOffer extends Component {
  render() {
    const { value, className, offerList } = this.props;
    
    return (
      <select
        value={value}
        className={className}
        onChange={this.handleOffer}
        onBlur={this.handleOffer}
        options={offerList}
      >
        <option value="">{Translations.select_offer}</option>
        {offerList && offerList.map(option => (
          <option value={option.id} key={option.id}>
            {option.value}
          </option>
        ))}
      </select>
    );
  }

  componentDidMount = () => {
    this.props.getOffer(offerList);
  }

  handleOffer = (event) => {
    const { offerList } = this.props;
    const name = offerList.filter(c => c.id === event.target.value);
    const data = {
      id: event.target.value,
      name: (name.length !== 0) ? name[0].value : ""
    }
    this.props.handleSelect("offers", data);
  };
}

const mapStateToProps = state => ({
  offerList: state.selectData.offers
});

const mapDispatchToProps = {
  getOffer
};

const propTypes = {
  value: PropTypes.any,
  offerList: PropTypes.any,
  className: PropTypes.string,
  getOffer: PropTypes.func.isRequired,
  handleSelect: PropTypes.func.isRequired
};

SelectOffer.propTypes = propTypes;


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectOffer);
