import React from "react";

import * as images from "../../../../lib/constants/images";

const ReportedSearchBar = () => {
  return (
    <div className="middle-section-search">
      <form>
        <div className="input-group search-input-group">
          <input type="text" className="form-control" placeholder="Search" />
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

export default ReportedSearchBar;
