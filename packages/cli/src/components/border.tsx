export const EmptyBorder = {
  topLeft: "",
  bottomLeft: "",
  vertical: "",
  horizontal: "",
  topRight: "",
  bottomRight: "",
  bottomT: "",
  topT: "",
  cross: "",
  leftT: "",
  right: "",
  rightT: "",
};

export const SplitBorder = {
  border: ["left" as const, "right" as const],
  customBorderChars: {
    ...EmptyBorder,
    vertical: "|",
  },
};
