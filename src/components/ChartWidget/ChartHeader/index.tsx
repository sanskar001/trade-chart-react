import React from "react";
import DropDown from "@/components/DropDown";

const ChartHeader: React.FC = () => {
  return (
    <div className="border-b border-linen-orange">
      <div className="h-[40px] bg-white flex items-center gap-2 p-[2px]">
        <h6>Chart Header</h6>
        <div>
          <DropDown />
        </div>
      </div>
    </div>
  );
};

export default ChartHeader;
