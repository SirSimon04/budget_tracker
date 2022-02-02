import React from "react";
import BudgetCard from "./components/BudgetCard";
import { Grid } from "@mui/material";

function CategoryPage() {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} xl={4}>
          <BudgetCard />
        </Grid>
        <Grid item xs={12} md={6} xl={4}>
          <BudgetCard />
        </Grid>
        <Grid item xs={12} md={6} xl={4}>
          <BudgetCard />
        </Grid>
      </Grid>
    </div>
  );
}

export default CategoryPage;