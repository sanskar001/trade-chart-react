import { FilterOption } from "@/theme/FilterTags/type";

export const enum SymbolFilterType {
  all = "all",
  FUTIDX = "FUTIDX",
  FUTSTK = "FUTSTK",
  OPTIDX = "OPTIDX",
  OPTSTK = "OPTSTK",
}

export const symbolFilterOptions: FilterOption[] = [
  { value: SymbolFilterType.all, label: "All" },
  { value: SymbolFilterType.FUTIDX, label: "FUTIDX" },
  { value: SymbolFilterType.FUTSTK, label: "FUTSTK" },
  { value: SymbolFilterType.OPTIDX, label: "OPTIDX" },
  { value: SymbolFilterType.OPTSTK, label: "OPTSTK" },
];
