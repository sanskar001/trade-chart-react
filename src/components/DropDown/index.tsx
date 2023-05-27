import React, { useState, useMemo } from "react";
import Button from "@/theme/Button";
import DownArrow from "@/components/SVG/DownArrow";
import { formatClass } from "@/util/formatClass";
import { DropDownProps } from "./type";

const DropDown: React.FC<DropDownProps> = ({
  optionList,
  selectedValue,
  onSelect,
  className = "",
  style,
}) => {
  const [isExpand, setIsExpand] = useState<boolean>(false);
  const frequentOptionList = useMemo(
    () => optionList.filter((option) => option.isFrequent),
    []
  );
  const selectedOption = useMemo(
    () => optionList.find((option) => option.value === selectedValue),
    [selectedValue]
  );

  const toggleHandler = () => {
    setIsExpand((prevState) => !prevState);
  };

  const selectOptionHandler = (value: string) => {
    onSelect(value);
    setIsExpand(false);
  };

  return (
    <div className={formatClass(`drop-down ${className}`)} style={style}>
      <div className="freq-option">
        {frequentOptionList.map((option, index) => {
          return (
            <Button
              key={`opt_${index + 1}`}
              className={`${selectedValue === option.value ? "active" : ""}`}
              onClick={onSelect.bind(null, option.value)}
            >
              {option.shortLabel || option.label}
            </Button>
          );
        })}
        <Button className="active">
          {selectedOption?.shortLabel || selectedOption?.label}
        </Button>
        <Button
          className={formatClass(`down-arrow ${isExpand ? "expand" : ""}`)}
          onClick={toggleHandler}
        >
          <DownArrow />
        </Button>
      </div>
      {isExpand && (
        <div className="option-list">
          {optionList.map((option, index) => {
            return (
              <div
                key={`opt_${index + 1}`}
                className={formatClass(
                  `option ${selectedValue === option.value ? "active" : ""}`
                )}
                onClick={selectOptionHandler.bind(null, option.value)}
              >
                {option.label}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DropDown;
