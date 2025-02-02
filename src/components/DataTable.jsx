/* eslint-disable react/prop-types */

import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { saveAs } from "file-saver";

const columns = [
  { field: "userId", headerName: "User ID", width: 100 },
  { field: "artist", headerName: "Artist Name", width: 250, filterable: true },
  { field: "song", headerName: "Song Name", width: 250, filterable: true },
  {
    field: "date",
    headerName: "Date",
    width: 250,
    filterable: true,
    type: "date",
    valueGetter: (params) => {
      console.log("params", params);
      return new Date(params);
    },
  },
  { field: "streams", headerName: "Streams", width: 250, filterable: true },
];

// CSV export function
const exportToCsv = (data, columns, filename) => {
  const csvHeader = columns.map((col) => col.headerName).join(",");
  const csvRows = data
    .map((row) =>
      columns
        .map((col) => {
          const value = row[col.field];
          return typeof value === "string"
            ? `"${value.replace(/"/g, '""')}"`
            : value;
        })
        .join(",")
    )
    .join("\n");

  const csvString = [csvHeader, csvRows].join("\n");
  const blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" });
  saveAs(blob, `${filename}.csv`);
};

export function DataTable({ data }) {
  const [rows, setRows] = React.useState(data);

  React.useEffect(() => {
    console.log("rows", data);
    setRows(data);
  }, [data]);

  // const getRowClassName = (params) => {
  //   // Check if it's the first row
  //   if (params.index === 0) {
  //     return 'first-row'; // Apply custom class to the first row
  //   }
  //   return ''; // No class for other rows
  // };

  return (
    <div className="pt-4  bg-white rounded-lg shadow-sm">
      <div className="flex justify-between items-center p-2">
        <h3 className="text-xl ml-4 font-semibold">Recent Revenue</h3>
        <Button
          variant="contained"
          onClick={() => exportToCsv(data, columns, "revenue_data")}
          className="mr-4"
        >
          Export CSV
        </Button>
      </div>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          //Add this prop
          pagination: { paginationModel: { pageSize: 5 } }, // Setting initial pageSize
        }}
        pageSizeOptions={[5, 10, 20]}
        disableColumnFilter={false}
        // getRowClassName={getRowClassName}
      />
    </div>
  );
}
