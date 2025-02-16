import { ColDef } from "ag-grid-community";
import {
  dateComparator,
  sortDateComparator,
  sortNumberComparator,
} from "../utils/filterComparators";
import {
  dateFormatter,
  poHazFormatter,
  textFormatter,
} from "../utils/formatters";

const columnDefs: ColDef[] = [
  {
    field: "designation",
    headerName: "Designation",
    sortable: true,
    filter: "agTextColumnFilter",
    filterParams: { textFormatter },
  },
  {
    field: "discovery_date",
    headerName: "Discovery Date",
    sortable: true,
    filter: "agDateColumnFilter",
    filterParams: { comparator: dateComparator },
    comparator: sortDateComparator,
    valueFormatter: dateFormatter,
  },
  {
    field: "h_mag",
    headerName: "H (mag)",
    sortable: true,
    filter: "agNumberColumnFilter",
    comparator: sortNumberComparator,
  },
  {
    field: "moid_au",
    headerName: "MOID (au)",
    sortable: true,
    filter: "agNumberColumnFilter",
    comparator: sortNumberComparator,
  },
  {
    field: "q_au_1",
    headerName: "q (au)",
    sortable: true,
    filter: "agNumberColumnFilter",
    comparator: sortNumberComparator,
  },
  {
    field: "q_au_2",
    headerName: "Q (au)",
    sortable: true,
    filter: "agNumberColumnFilter",
    comparator: sortNumberComparator,
  },
  {
    field: "period_yr",
    headerName: "Period (yr)",
    sortable: true,
    filter: "agNumberColumnFilter",
    comparator: sortNumberComparator,
  },
  {
    field: "i_deg",
    headerName: "Inclination (deg)",
    sortable: true,
    filter: "agNumberColumnFilter",
    comparator: sortNumberComparator,
  },
  {
    field: "pha",
    headerName: "Potentially Hazardous",
    sortable: true,
    filter: "agTextColumnFilter",
    filterParams: { textFormatter },
    valueFormatter: poHazFormatter,
  },
  {
    field: "orbit_class",
    headerName: "Orbit Class",
    sortable: true,
    filter: "agTextColumnFilter",
    filterParams: { textFormatter },
    /* enableRowGroup: true, */
  },
];

export default columnDefs;
