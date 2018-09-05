import React from "react";
import { SearchResultType } from "../../types";
class SearchResult extends React.Component {
  state = {
    value: "",
    searchString: ""
  };
  onChangeValue = e => {
    e.preventDefault();
    this.setState({
      value: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();
    this.setState({ searchString: this.state.value });
  };
  stateAndHelpers = () => {
    return {
      onChangeValue: this.onChangeValue,
      onSubmit: this.onSubmit,
      searchString: this.state.searchString
    };
  };
  render() {
    return this.props.children(this.stateAndHelpers());
  }
}
SearchResult.propTypes = {
  ...SearchResultType
};
export default SearchResult;
