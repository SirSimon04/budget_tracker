import React from "react";
import Grid from "@mui/material/Grid";
import IncomeTimelineView from "./components/IncomeTimelineView";
import ExpenseTimelineView from "./components/ExpenseTimelineView";

function HistoryPage() {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid xs={6} item>
          <IncomeTimelineView />
        </Grid>
        <Grid xs={6} item>
          <ExpenseTimelineView />
        </Grid>
      </Grid>
    </div>
  );
}

export default HistoryPage;
