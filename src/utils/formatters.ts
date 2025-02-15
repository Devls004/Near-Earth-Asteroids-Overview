import { ValueFormatterParams } from "ag-grid-community";

export const dateFormatter = (params: ValueFormatterParams): string => {
  if (!params.value) return "";
  const actualDate = new Date(params.value);
  return actualDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
};
