import { AgGridReact } from "ag-grid-react";
import { ColDef, GridApi, GridReadyEvent } from "ag-grid-community";
import data from "./near-earth-asteroids.json";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import Header from "./components/Header";
import {
  dateComparator,
  sortDateComparator,
  sortNumberComparator,
} from "./utils/filterComparators";
import {
  dateFormatter,
  poHazFormatter,
  textFormatter,
} from "./utils/formatters";
import "./Grid.css";
import { useCallback, useRef } from "react";

/*
  import { RangeSelectionModule } from '@ag-grid-enterprise/range-selection';
  The correct way to select multiple cells is to use the RangeSelectionModule but it is an enterprise feature.
  I used CSS styles instead to get the feature.
*/

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

const NeoGrid = (): JSX.Element => {
  const gridApiRef = useRef<GridApi<any>>(null);

  const onGridReady = useCallback((params: GridReadyEvent) => {
    (gridApiRef.current as GridApi<any>) = params.api;
  }, []);

  const clearFiltersAndSorters = useCallback(() => {
    if (gridApiRef.current) {
      gridApiRef.current.setFilterModel(null);
      gridApiRef.current.applyColumnState({
        defaultState: { sort: null },
      });
    }
  }, [gridApiRef]);

  return (
    <>
      <Header
        title="Near-Earth Object Overview"
        onClear={clearFiltersAndSorters}
      />
      <div className="ag-theme-alpine grid-container">
        <AgGridReact
          rowData={data}
          columnDefs={columnDefs}
          onGridReady={onGridReady}
          rowGroupPanelShow={"always"}
          /* cellSelection={true} */
        />
      </div>
    </>
  );
};

export default NeoGrid;
