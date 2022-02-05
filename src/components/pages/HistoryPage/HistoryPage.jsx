import React from "react";
import Grid from "@mui/material/Grid";
import IncomeTimelineView from "./components/IncomeTimelineView";

function HistoryPage() {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid xs={6} item>
          <IncomeTimelineView />
        </Grid>
      </Grid>
    </div>
  );
}

export default HistoryPage;
