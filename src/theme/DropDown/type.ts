import React from "react";

interface OptionType<T> {
  value: T;
  label: React.ReactNode;
  shortLabel?: React.ReactNode;
  isFrequent?: boolean;
}

export type OptionListType<T> = Array<OptionType<T>>;

export interface DropDownProps {
  optionList: OptionListType<string>;
  selectedValue: string;
  onSelect: (_value: string) => void;
  className?: string;
  style?: React.CSSProperties;
}
