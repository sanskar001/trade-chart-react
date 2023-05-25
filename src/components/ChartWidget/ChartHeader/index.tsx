import DropDown from "@/theme/DropDown";
import React from "react";

const ChartHeader: React.FC = () => {
  return (
    <div className="border-b border-linen-orange">
      <div className="h-[40px] flex items-center gap-2 p-[2px]">
        <h6>Chart Header</h6>
        <div>
          <DropDown />
        </div>
      </div>
    </div>
  );
};

export default ChartHeader;
