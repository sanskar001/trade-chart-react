export interface Option {
  value: string;
  label: React.ReactNode;
}

type SetFilterType = React.Dispatch<React.SetStateAction<string>>;

export interface FilterTagsProps {
  filterOptions: Option[];
  selectedValue: string;
  setFilter: SetFilterType;
  name?: string;
  className?: string;
  style?: React.CSSProperties;
}
