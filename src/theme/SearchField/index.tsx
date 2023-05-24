import React from "react";
import SearchIcon from "../../components/SVG/SearchIcon";
import { formatClass } from "../../util/formatClass";

interface SearchFieldProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
  style?: React.CSSProperties;
  autoFocus?: boolean;
  disabled?: boolean;
  placeholder?: string;
}

const SearchField: React.FC<SearchFieldProps> = ({
  value,
  onChange,
  className = "",
  style,
  autoFocus = false,
  disabled = false,
  placeholder = "Search",
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
      />
    </div>
  );
};

export default SearchField;
