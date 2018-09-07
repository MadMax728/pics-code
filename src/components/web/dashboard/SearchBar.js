import React from "react";
import Search from "../../../containers/searchResult";

const SearchBar = () => {
  return (
    <Search>
      {({ onChangeValue, onSubmit, searchString }) => (
        <form className="navbar-form navbar-left">
          <div className="input-group search-input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              onChange={onChangeValue}
            />
            <span className="input-group-addon">
              <button type="submit" onClick={onSubmit}>
                <span className="search_icon" />
              </button>
            </span>
          </div>
          <div>{searchString}</div>
        </form>
      )}
    </Search>
  );
};

export default SearchBar;
