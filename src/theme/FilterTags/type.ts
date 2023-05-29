export interface FilterOption {
  value: string;
  label: React.ReactNode;
}

type SetFilterType = (_val: string) => void;

export interface FilterTagsProps {
  filterOptions: FilterOption[];
  selectedValue: string;
  setFilter: SetFilterType;
  name?: string;
  className?: string;
  style?: React.CSSProperties;
}
