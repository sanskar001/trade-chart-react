import { OptionListType } from "@/theme/DropDown/type";

export const resolutions: OptionListType = [
  {
    value: "1",
    label: "1 minute",
    shortLabel: "1m",
    isFrequent: true,
  },
  {
    value: "5",
    label: "5 minutes",
    shortLabel: "5m",
    isFrequent: false,
  },
  {
    value: "30",
    label: "30 minutes",
    shortLabel: "30m",
    isFrequent: false,
  },
  {
    value: "60",
    label: "1 hour",
    shortLabel: "1h",
    isFrequent: true,
  },
  {
    value: "1D",
    label: "1 day",
    shortLabel: "1D",
    isFrequent: true,
  },
  {
    value: "1W",
    label: "1 week",
    shortLabel: "1W",
    isFrequent: false,
  },
  {
    value: "1M",
    label: "1 month",
    shortLabel: "1M",
    isFrequent: false,
  },
];
