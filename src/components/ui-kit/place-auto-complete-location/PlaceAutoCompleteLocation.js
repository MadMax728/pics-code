import React, { Component } from "react";
import PropTypes from "prop-types";

import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";

class PlaceAutoCompleteLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: this.props.value ? this.props.value : ""
    };
  }

  render() {
    const { className } = this.props;
    const isConnected = navigator.onLine;
    return (
      isConnected && (
        <PlacesAutocomplete
          value={this.state.address}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading
          }) => (
            <div>
              <input
                {...getInputProps({
                  className
                })}
              />
              <div
                className={
                  suggestions.length !== 0
                    ? "autocomplete-dropdown-container show"
                    : "autocomplete-dropdown-container"
                }
              >
                {loading && <div>Loading...</div>}
                {suggestions.map((suggestion, index) => {
                  const className = suggestion.active
                    ? "suggestion-item--active"
                    : "suggestion-item";
                  // inline style for demonstration purpose
                  const style = suggestion.active
                    ? { backgroundColor: "#fafafa", cursor: "pointer" }
                    : { backgroundColor: "#ffffff", cursor: "pointer" };
                  return (
                    <div
                      key={index}
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style
                      })}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
      )
    );
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.value) {
      this.setState({ address: nextProps.value });
    }
  };

  handleChange = address => {
    this.getGeoLocation(address);
  };

  handleSelect = address => {
    this.getGeoLocation(address);
  };

  getGeoLocation = address => {
    this.setState({ address });
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => this.props.handleLocation(latLng, address))
      .catch(error => console.error("Error", error));
  };
}

PlaceAutoCompleteLocation.propTypes = {
  handleLocation: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  value: PropTypes.any
};

export default PlaceAutoCompleteLocation;
