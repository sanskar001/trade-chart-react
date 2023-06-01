import React from "react";

interface OptionType {
  value: string;
  label: React.ReactNode;
  shortLabel?: React.ReactNode;
  isFrequent?: boolean;
}

export type OptionListType = Array<OptionType>;

export interface DropDownProps {
  optionList: OptionListType;
  selectedValue: string;
  onSelect: (_value: string) => void;
  className?: string;
  style?: React.CSSProperties;
}
