import React from "react";
import { ChartType } from "@/components/ChartWidget/type";
import { OptionListType } from "@/theme/DropDown/type";
import AreaIcon from "@/components/SVG/AreaIcon";
import CandleStickIcon from "@/components/SVG/CandleStickIcon";
import LineIcon from "@/components/SVG/LineIcon";

interface ChartLabelProps {
  icon: React.ReactNode;
  title: string;
}

const ChartLabel: React.FC<ChartLabelProps> = ({ icon, title }) => {
  return (
    <div className="flex items-center gap-1">
      <span>{icon}</span>
      <span>{title}</span>
    </div>
  );
};

export const chartTypes: OptionListType<ChartType> = [
  {
    value: "candle",
    label: <ChartLabel title="Candle" icon={<CandleStickIcon />} />,
  },
  {
    value: "line",
    label: <ChartLabel title="Line" icon={<LineIcon />} />,
  },
  {
    value: "area",
    label: <ChartLabel title="Area" icon={<AreaIcon />} />,
  },
];
