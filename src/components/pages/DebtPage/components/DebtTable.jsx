import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Grid } from "@mui/material";

const columns = [
  { field: "amount", headerName: "Amount", flex: 1 },
  { field: "category", headerName: "Category", flex: 1 },
  { field: "date", headerName: "Date", flex: 1 }
];

const rows = [
  {
    id: 0,
    amount: 10,
    category: "Entertainment",
    date: new Date().toLocaleDateString("de-DE")
  },
  {
    id: 1,
    amount: 100,
    category: "Clothing",
    date: new Date().toLocaleDateString("de-DE")
  },
  {
    id: 2,
    amount: 25.99,
    category: "Food",
    date: new Date().toLocaleDateString("de-DE")
  },
  {
    id: 3,
    amount: 10,
    category: "Entertainment",
    date: new Date().toLocaleDateString("de-DE")
  },
  {
    id: 4,
    amount: 100,
    category: "Clothing",
    date: new Date().toLocaleDateString("de-DE")
  },
  {
    id: 5,
    amount: 25.99,
    category: "Food",
    date: new Date().toLocaleDateString("de-DE")
  },
  {
    id: 6,
    amount: 10,
    category: "Entertainment",
    date: new Date().toLocaleDateString("de-DE")
  },
  {
    id: 7,
    amount: 100,
    category: "Clothing",
    date: new Date().toLocaleDateString("de-DE")
  },
  {
    id: 8,
    amount: 25.99,
    category: "Food",
    date: new Date().toLocaleDateString("de-DE")
  }
];

function DebtTable() {
  return (
    <div style={{ width: "100%" }}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} lg={8} xl={5}>
          <DataGrid
            autoHeight={true}
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default DebtTable;
