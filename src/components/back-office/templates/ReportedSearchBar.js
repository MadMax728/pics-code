import React from "react";
import PropTypes from "prop-types";

import * as images from "../../../lib/constants/images";
import { Input, Button } from "../../ui-kit";

const ReportedSearchBar = (e) => {
  return (
    <div className="middle-section-search">
      <form onSubmit={e.handleSearch}>
        <div className="input-group search-input-group">
          <Input type="text" 
            name="search"
            className="form-control" 
            placeholder="Search" 
            defaultValue={e.value}
            onChange={e.handleSearch}
          />
          <span className="input-group-addon">
            <Button type="submit" text={
              <span className="search_icon">
                <img src={images.search} alt="Search" />
              </span>}
            />
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
