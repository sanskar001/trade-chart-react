import React, { useContext } from "react";
import DropDown from "@/theme/DropDown";
import { ChartContext } from "@/store/chart-context";
import { indicatorList } from "@/repo/indicators";
import { tradeChart } from "../ChartBody/Chart";
import { fetchIndiciatorData } from "@/mocks/indicator-data";
import { randomColor } from "@/util/randomColor";

const SelectIndicator: React.FC = () => {
  const { indicators, addIndicator, removeIndicator } =
    useContext(ChartContext);
  const lastIndicator = indicators[indicators.length - 1];

  const selectHandler = (val: string) => {
    const selectedIndicator = indicatorList.find(
      (indicator) => indicator.value === val
    );
    if (selectedIndicator) {
      const indexValue = indicators.findIndex(
        (indicator) => indicator.value === selectedIndicator.value
      );
      console.log(selectedIndicator, indexValue);
      if (indexValue < 0) {
        addIndicator(selectedIndicator);
        tradeChart.addIndicator(fetchIndiciatorData(), randomColor());
      } else {
        removeIndicator(selectedIndicator);
        tradeChart.removeIndicator(indexValue);
      }
    }
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
