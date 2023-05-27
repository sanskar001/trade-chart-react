import React, { useState } from "react";
import DropDown from "@/components/DropDown";
import { OptionListType } from "@/components/DropDown/type";

const sampleOptions: OptionListType = [
  { value: "1", label: "1 minute" },
  { value: "30", label: "30 minutes" },
  { value: "1h", label: "1 hour" },
  { value: "2h", label: "2 hours" },
  { value: "1d", label: "1 day" },
  { value: "1m", label: "1 month" },
  { value: "3m", label: "3 months" },
];

const ChartHeader: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<string>("1");

  return (
    <div className="border-b border-linen-orange">
      <div className="h-[40px] bg-white flex items-center gap-2 p-[2px]">
        <h6>Chart Header</h6>
        <DropDown
          optionList={sampleOptions}
          selectedValue={selectedValue}
          onSelect={(val) => setSelectedValue(val)}
          className="h-full"
        />
      </div>
    </div>
  );
};

export default ChartHeader;
