import React from "react";
import BudgetCard from "./components/BudgetCard";
import { Grid } from "@mui/material";

function CategoryPage() {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} xl={4}>
          <BudgetCard category="Food" current={233} max={500} />
        </Grid>
        <Grid item xs={12} md={6} xl={4}>
          <BudgetCard category="Clothing" current={110} max={120} />
        </Grid>
        <Grid item xs={12} md={6} xl={4}>
          <BudgetCard category="Entertainment" current={23} max={80} />
        </Grid>
      </Grid>
    </div>
  );
}

export default CategoryPage;
