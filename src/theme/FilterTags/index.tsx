import React from "react";
import { formatClass } from "../../util/formatClass";
import { FilterTagsProps } from "./type";

const FilterTags: React.FC<FilterTagsProps> = ({
  filterOptions,
  selectedValue,
  setFilter,
  name = "filter",
  className = "",
  style,
}) => {
  return (
    <div className={formatClass(`filter-tags ${className}`)} style={style}>
      {filterOptions.map((item) => {
        return (
          <div className="filter-tag" key={item.value}>
            <input
              type="radio"
              id={item.value}
              name={name}
              value={item.value}
              checked={item.value === selectedValue}
              onChange={setFilter.bind(null, item.value)}
            />
            <label htmlFor={item.value}>{item.label || item.value}</label>
          </div>
        );
      })}
    </div>
  );
};

export default FilterTags;
