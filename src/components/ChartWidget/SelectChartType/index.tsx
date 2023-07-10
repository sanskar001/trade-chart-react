import React, { useContext } from "react";
import DropDown from "@/theme/DropDown";
import { chartTypes } from "@/repo/chart-type";
import { ChartContext } from "@/store/chart-context";
import { ChartType } from "../type";

const SelectChartType: React.FC = () => {
  const { chartType, setChartType } = useContext(ChartContext);

  return (
    <>
      <DropDown
        optionList={chartTypes}
        selectedValue={chartType}
        onSelect={(val) => setChartType(val as ChartType)}
        className="h-full"
      />
    </>
  );
};

export default SelectChartType;
