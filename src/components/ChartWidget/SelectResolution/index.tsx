import React, { useContext } from "react";
import DropDown from "@/theme/DropDown";
import { resolutions } from "@/repo/resolutions";
import { ChartContext } from "@/store/chart-context";

const SelectResolution: React.FC = () => {
  const { resolution, setResolution } = useContext(ChartContext);

  return (
    <>
      <DropDown
        optionList={resolutions}
        selectedValue={resolution}
        onSelect={(val) => setResolution(val)}
        className="h-full"
      />
    </>
  );
};

export default SelectResolution;
