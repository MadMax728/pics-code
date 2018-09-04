import React from "react";
import PropTypes from "prop-types";
import { Radio } from "./radio";
import { Select } from "./select";
import { Text } from "./text";

const LeftSidebarFilter = ({ filters }) => {
  console.log(filters);
  return (
    <div>
      {filters.map(filter => {
        return (
          <div className="filter-wrapper" key={filter.name}>
            <div className={filter.className}>{filter.name}</div>
            {filter.type === "radio" &&
              filter.items.map(item => {
                return (
                  <Radio
                    key={item.name}
                    forUse={filter.name}
                    name={item.name}
                    className={item.className}
                    value={item.value}
                  />
                );
              })}
            {filter.type === "select" && (
              <Select
                forUse={filter.name}
                name={filter.name}
                options={filter.items}
                defaultValue={"select"}
              />
            )}

            {filter.type === "text" && (
              <Text forUse={filter.name} name={filter.name} />
            )}
          </div>
        );
      })}
    </div>
  );
};

LeftSidebarFilter.propTypes = {
  filters: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      // onClick: PropTypes.func,
      className: PropTypes.string.isRequired,
      type: PropTypes.string,
      items: PropTypes.any
    }).isRequired
  ).isRequired
};

export default LeftSidebarFilter;
