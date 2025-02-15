import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";
import data from "./near-earth-asteroids.json";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import Header from "./components/Header";
import { dateComparator, sortDateComparator, sortNumberComparator } from "./utils/filterComparators";
import { dateFormatter, poHazFormatter, textFormatter } from "./utils/formatters";

const columnDefs: ColDef[] = [
  {
    field: 'designation',
    headerName: 'Designation',
    sortable: true,
    filter: 'agTextColumnFilter',
    filterParams: { textFormatter },
  },
  {
    field: 'discovery_date',
    headerName: 'Discovery Date',
    sortable: true,
    filter: 'agDateColumnFilter',
    filterParams: { comparator: dateComparator },
    comparator: sortDateComparator,
    valueFormatter: dateFormatter,
  },
  {
    field: 'h_mag',
    headerName: 'H (mag)',
    sortable: true,
    filter: 'agNumberColumnFilter',
    comparator: sortNumberComparator,
  },
  {
    field: 'moid_au',
    headerName: 'MOID (au)',
    sortable: true,
    filter: 'agNumberColumnFilter',
    comparator: sortNumberComparator,
  },
  {
    field: 'q_au_1',
    headerName: 'q (au)',
    sortable: true,
    filter: 'agNumberColumnFilter',
    comparator: sortNumberComparator,
  },
  {
    field: 'q_au_2',
    headerName: 'Q (au)',
    sortable: true,
    filter: 'agNumberColumnFilter',
    comparator: sortNumberComparator,
  },
  {
    field: 'period_yr',
    headerName: 'Period (yr)',
    sortable: true,
    filter: 'agNumberColumnFilter',
    comparator: sortNumberComparator,
  },
  {
    field: 'i_deg',
    headerName: 'Inclination (deg)',
    sortable: true,
    filter: 'agNumberColumnFilter',
    comparator: sortNumberComparator,
  },
  {
    field: 'pha',
    headerName: 'Potentially Hazardous',
    sortable: true,
    filter: 'agTextColumnFilter',
    filterParams: { textFormatter },
    valueFormatter: poHazFormatter,
  },
  {
    field: 'orbit_class',
    headerName: 'Orbit Class',
    sortable: true,
    filter: 'agTextColumnFilter',
    filterParams: { textFormatter },
    enableRowGroup: true,
  },
];

const NeoGrid = (): JSX.Element => {
  return (
    <>
      <Header title="Near-Earth Object Overview" />
      <div className="ag-theme-alpine" style={{ height: 900, width: 1920 }}>
        <AgGridReact
          rowData={data}
          columnDefs={columnDefs}
          rowGroupPanelShow={"always"}
        />
      </div>
    </>
  );
};

export default NeoGrid;
