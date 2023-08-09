import React, { useContext } from "react";
import DropDown from "@/theme/DropDown";
import { ChartContext } from "@/store/chart-context";
import { indicatorList } from "@/repo/indicators";

const SelectIndicator: React.FC = () => {
  const { indicators, addIndicator } = useContext(ChartContext);
  const lastIndicator = indicators[indicators.length - 1];

  const selectHandler = (val: string) => {
    const selectIndicator = indicatorList.find(
      (indicator) => indicator.value === val
    );
    selectIndicator && addIndicator(selectIndicator);
  };

  return (
    <>
      <DropDown
        optionList={indicatorList}
        selectedValue={lastIndicator ? lastIndicator.value : ""}
        onSelect={selectHandler}
        className="h-full"
      />
    </>
  );
};

export default SelectIndicator;
