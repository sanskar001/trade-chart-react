import React, { useState } from "react";
import Button from "@/theme/Button";
import DownArrow from "@/components/SVG/DownArrow";
import { formatClass } from "@/util/formatClass";

interface OptionType {
  value: string;
  label: React.ReactNode;
  shortLabel?: React.ReactNode;
  isFrequent?: boolean;
}

type OptionListType = Array<OptionType>;

const sampleOptions: OptionListType = [
  { value: "1", label: "1 minute" },
  { value: "30", label: "30 minutes" },
  { value: "1h", label: "1 hour" },
  { value: "2h", label: "2 hours" },
  { value: "1d", label: "1 day" },
  { value: "1m", label: "1 month" },
  { value: "3m", label: "3 months" },
];

const DropDown: React.FC = () => {
  const [isExpand, setIsExpand] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>("1");
  const frequentOptions: OptionListType = sampleOptions.filter((option) => {
    return option.isFrequent;
  });

  const toggleHandler = () => {
    setIsExpand((prevState) => !prevState);
  };

  return (
    <>
      <div className="drop-down">
        <div className="freq-option">
          {frequentOptions.length > 0 &&
            frequentOptions.map((option, index) => {
              return (
                <Button
                  key={`opt_${index + 1}`}
                  className={`${
                    selectedOption === option.value ? "active" : ""
                  }`}
                  onClick={setSelectedOption.bind(null, option.value)}
                >
                  {option.shortLabel || option.label}
                </Button>
              );
            })}
          <Button className="active bg-alice-blue">
            {sampleOptions.find((option) => option.value === selectedOption)
              ?.shortLabel ||
              sampleOptions.find((option) => option.value === selectedOption)
                ?.label}
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
            {sampleOptions.map((option, index) => {
              return (
                <div
                  key={`opt_${index + 1}`}
                  className={formatClass(
                    `option ${selectedOption === option.value ? "active" : ""}`
                  )}
                  onClick={() => {
                    setSelectedOption(option.value);
                    setIsExpand(false);
                  }}
                >
                  {option.label}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default DropDown;
