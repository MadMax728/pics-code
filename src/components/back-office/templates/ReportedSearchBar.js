import React from "react";
import * as images from "../../../lib/constants/images";
import PropTypes from "prop-types";

const ReportedSearchBar = (e) => {
  return (
    <div className="middle-section-search">
      <form onSubmit={e.handleSearch}>
        <div className="input-group search-input-group">
          <input type="text" 
            name="search"
            className="form-control" 
            placeholder="Search" 
            defaultValue={e.value}
            onChange={e.handleSearch}
          />
          <span className="input-group-addon">
            <button type="submit">
              <span className="search_icon">
                <img src={images.search} alt="Search" />
              </span>
            </button>
          </span>
        </div>
      </form>
    </div>
  );
};

ReportedSearchBar.propTypes = {
  e: PropTypes.any
};

export default ReportedSearchBar;
