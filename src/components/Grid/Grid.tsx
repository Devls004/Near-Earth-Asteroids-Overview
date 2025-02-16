import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import data from "data/near-earth-asteroids.json";
import Header from "components/Header";
import columnDefs from "config/columnDefs";
import { AgGridReact } from "ag-grid-react";
import { GridApi, GridReadyEvent } from "ag-grid-community";
import { useCallback, useRef, useState } from "react";
import "./styles.css";

const Grid = (): JSX.Element => {
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

export default Grid;

/*
  import { RangeSelectionModule } from '@ag-grid-enterprise/range-selection';
  The correct way to select multiple cells is to use the RangeSelectionModule but it is an enterprise feature.
  I used CSS styles instead to get the feature in grid.css .
  -> cellSelection={true}
*/
