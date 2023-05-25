export interface FilterOption {
  value: string;
  label: React.ReactNode;
}

type SetFilterType = React.Dispatch<React.SetStateAction<string>>;

export interface FilterTagsProps {
  filterOptions: FilterOption[];
  selectedValue: string;
  setFilter: SetFilterType;
  name?: string;
  className?: string;
  style?: React.CSSProperties;
}
