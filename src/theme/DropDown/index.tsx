import React, { useState } from "react";
import Button from "@/theme/Button";
import DownArrow from "@/components/SVG/DownArrow";
import { formatClass } from "@/util/formatClass";

interface OptionType {
  value: string;
  label: React.ReactNode;
  shortLabel: React.ReactNode;
  isFrequent: boolean;
}

type OptionListType = Array<OptionType>;

const sampleOptions: OptionListType = [
  { value: "1", shortLabel: "1m", label: "1 minute", isFrequent: true },
  { value: "30", shortLabel: "30m", label: "30 minutes", isFrequent: true },
  { value: "1h", shortLabel: "1h", label: "1 hour", isFrequent: false },
  { value: "2h", shortLabel: "2h", label: "2 hours", isFrequent: false },
  { value: "1d", shortLabel: "1D", label: "1 day", isFrequent: true },
  { value: "1m", shortLabel: "1M", label: "1 month", isFrequent: false },
  { value: "3m", shortLabel: "3M", label: "1 months", isFrequent: false },
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
          {frequentOptions.length > 0 ? (
            frequentOptions.map((option, index) => {
              return (
                <Button
                  key={`opt_${index + 1}`}
                  className={`${
                    selectedOption === option.value ? "active" : ""
                  }`}
                  onClick={setSelectedOption.bind(null, option.value)}
                >
                  {option.shortLabel}
                </Button>
              );
            })
          ) : (
            <div>Select</div>
          )}
          <Button
            className={formatClass(`down-arrow ${isExpand ? "expand" : ""}`)}
            onClick={toggleHandler}
          >
            <DownArrow />
          </Button>
        </div>
      </div>
    </>
  );
};

export default DropDown;
