import React, { useState } from "react";
import DropDown from "@/theme/DropDown";
import { resolutions } from "./resolution";

const SelectResolution: React.FC = () => {
  const [resolution, setResolution] = useState<string>("1");

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
