/* eslint-disable react/prop-types */

import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

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
      <h3 className="text-xl p-2 ml-4 font-semibold mb-4">Recent Revenue</h3>
      <DataGrid
        rows={rows}
        columns={columns}
        // pageSizeOptions={[5, 10, 20]}
        disableColumnFilter={false}
        // getRowClassName={getRowClassName}
      />
    </div>
  );
}
