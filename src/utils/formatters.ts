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

export const poHazFormatter = (params: ValueFormatterParams): string => {
  if (!params.value || params.value.toLowerCase() === 'n/a') return '';
  const val = params.value.toString().toUpperCase();
  if (val === 'Y') return 'Yes';
  if (val === 'N') return 'No';
  return params.value;
};

export const textFormatter = (value: string): string => {
  return value ? value.toLowerCase() : '';
};
