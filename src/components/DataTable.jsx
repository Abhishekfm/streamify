import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { saveAs } from "file-saver";
import DownloadIcon from "@mui/icons-material/Download";

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
      return new Date(params);
    },
  },
  { field: "streams", headerName: "Streams", width: 250, filterable: true },
];

/**
 * Exports data to CSV format and triggers browser download
 */
const exportToCsv = (data, columns, filename) => {
  // Create CSV header row from column headers
  const csvHeader = columns.map((col) => col.headerName).join(",");

  // Process each data row into CSV format
  const csvRows = data
    .map(
      (row) =>
        columns
          // Map each column to its corresponding value in the row
          .map((col) => {
            const value = row[col.field];

            return typeof value === "string"
              ? `"${value.replace(/"/g, '""')}"` // CSV escaping rule for quotes
              : value;
          })
          .join(",") // Join column values with commas
    )
    .join("\n"); // Join rows with newline characters

  // Combine header and rows into final CSV content
  const csvString = [csvHeader, csvRows].join("\n");

  // Create downloadable file
  const blob = new Blob([csvString], {
    type: "text/csv;charset=utf-8;", // Set proper MIME type
  });

  // Trigger browser download using FileSaver.js
  saveAs(blob, `${filename}.csv`);
};

export function DataTable({ data }) {
  const [rows, setRows] = React.useState(data);

  React.useEffect(() => {
    setRows(data);
  }, [data]);

  return (
    <div className="pt-4  bg-white rounded-lg shadow-sm">
      <div className="flex justify-between items-center p-2">
        <h3 className="text-xl ml-4 font-semibold">Recent Revenue</h3>
        <Button
          className="mr-4 font-semibold"
          variant="contained"
          startIcon={<DownloadIcon />}
          onClick={() => exportToCsv(data, columns, "revenue_data")}
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
