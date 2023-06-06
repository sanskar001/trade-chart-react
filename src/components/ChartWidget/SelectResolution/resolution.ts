import { OptionListType } from "@/theme/DropDown/type";

export const resolutions: OptionListType = [
  {
    value: "1",
    label: "1 minute",
    shortLabel: "1m",
    isFrequent: true,
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
    isFrequent: false,
  },
  {
    value: "1D",
    label: "1 day",
    shortLabel: "1D",
    isFrequent: true,
  },
  {
    value: "1M",
    label: "1 month",
    shortLabel: "1M",
    isFrequent: true,
  },
];
