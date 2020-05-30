import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
const Grid = ({columnDefs, rowData}) => {
    return (
        <div className="ag-theme-alpine"
        style={{
        height: '500px'}}>
        <AgGridReact
            columnDefs = {columnDefs}
            rowData = {rowData}>
      </AgGridReact>
      </div>
    )
}
export default Grid;