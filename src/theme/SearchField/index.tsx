import React from "react";
import SearchIcon from "../../components/SVG/SearchIcon";
import { formatClass } from "../../util/formatClass";
import { SearchFieldProps } from "./type";

const SearchField: React.FC<SearchFieldProps> = ({
  value,
  onChange,
  className = "",
  style,
  autoFocus = true,
  disabled = false,
  placeholder = "Search",
  ...props
}) => {
  return (
    <div className={formatClass(`search-field ${className}`)} style={style}>
      <label htmlFor="search">
        <SearchIcon />
      </label>
      <input
        id="search"
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete="off"
        autoFocus={autoFocus}
        disabled={disabled}
        {...props}
      />
    </div>
  );
};

export default SearchField;
