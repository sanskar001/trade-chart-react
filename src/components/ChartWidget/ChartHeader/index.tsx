import React from "react";
import CandleStickIcon from "@/components/SVG/CandleStickIcon";
import LineIcon from "@/components/SVG/LineIcon";
import AreaIcon from "@/components/SVG/AreaIcon";
import IndicatorIcon from "@/components/SVG/IndicatorIcon";

const ChartHeader: React.FC = () => {
  return (
    <div className="border-b border-linen-orange">
      <div className="h-[40px] bg-white flex items-center gap-2 p-[2px]">
        <h6>Chart Header</h6>
        <div className="flex items-center gap-1">
          <CandleStickIcon />
          <LineIcon />
          <AreaIcon />
          <IndicatorIcon />
        </div>
      </div>
    </div>
  );
};

export default ChartHeader;
