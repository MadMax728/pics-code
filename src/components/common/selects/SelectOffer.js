import React, { Component } from "react";
import PropTypes from "prop-types";
import { getOffer } from "../../../actions";
import { connect } from "react-redux";

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
    this.props.getOffer().then(() => {
      if(this.props.offerList && this.props.offerList.offers){
        this.setState({
          offerList: this.props.offerList.offers
        });
      }
    });
  }
  
  handleOffer = (event) => {
    this.props.handleSelect("offer",event.target.value);
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
        <option value="">{"Select Offer"}</option>
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
  offerList: state.selectData
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
